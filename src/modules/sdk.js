/**
 * @name 算法SDK
 *
 * @class SDK
 *
 * @method convert 处理节点
 * @param {DOM Object} el 要处理的节点
 * @return {string} 处理后的css，包含css选择器
 *
 */

// dependencies
import Color from 'color';
const ColorParser = color => {
  let res = null;
  try {
    res = Color(color);
  } catch (e) {
    console.log(`ignore the invalid color: \`${color}\``);
  }
  return res;
};
import ColorName from 'color-name';
ColorName.windowtext = [0, 0, 0]; // 补上这个colorName
ColorName.transparent = [255, 255, 255, 0]; // 支持透明，暂定用白色透明度0来表示

import {
  CLASS_PREFIX,
  DM_CLASSNAME_REGEXP,

  COLORATTR,
  BGCOLORATTR,
  ORIGINAL_COLORATTR,
  ORIGINAL_BGCOLORATTR,
  BGIMAGEATTR,
  BG_COLOR_DELIMITER,

  WHITE_LIKE_COLOR_BRIGHTNESS,
  MIN_LIMIT_OFFSET_BRIGHTNESS,
  MAX_LIMIT_BGCOLOR_BRIGHTNESS,
  HIGH_BGCOLOR_BRIGHTNESS,
  HIGH_BLACKWHITE_HSL_BRIGHTNESS,
  LOW_BLACKWHITE_HSL_BRIGHTNESS,
  IGNORE_ALPHA,

  CSS_PROP_SERIES,
  CSS_PROP_LIST,
  TABLE_NAME,

  IMPORTANT_REGEXP,

  SEMICOLON_PLACEHOLDER,
  SEMICOLON_PLACEHOLDER_REGEXP
} from './constant';

// Darkmode配置
import config from './config';

import {
  plugins, // 插件系统
  tnQueue, // 文本节点队列
  bgStack, // 需要判断位置的背景节点堆栈
  cssUtils // 样式相关操作工具对象
} from './global';

// 节点相关操作工具API
import {
  getChildrenAndIt,
  hasTextNode,
  hasTableClass
} from './domUtils';

const colorNameReg = new RegExp(Object.keys(ColorName).map(colorName => `\\b${colorName}\\b`).join('|'), 'ig'); // 生成正则表达式来匹配这些colorName
const colorReg = /\brgba?\([^)]+\)/i;
const colorRegGlobal = /\brgba?\([^)]+\)/ig;
const removeImportant = value => value.replace(IMPORTANT_REGEXP, ''); // 清除!important
const parseColor = (value, parseTransparent) => removeImportant(value).replace(colorNameReg, match => { // 处理颜色，包括清除!important和转换英文定义颜色
  if (!parseTransparent && match === 'transparent') return match; // 如果不转换transparent，直接返回transparent

  const color = ColorName[match.toLowerCase()];
  return `${color.length > 3 ? 'rgba' : 'rgb'}(${color.toString()})`;
});

// 计算mix颜色
const mixColor = colors => {
  if (!colors || colors.length < 1) return '';
  if (colors.length === 1) return colors[0];

  let retColorStr = colors.shift();
  let nextColorStr = colors.shift();
  while (nextColorStr) {
    const retColor = ColorParser(retColorStr);
    const nextColor = ColorParser(nextColorStr);
    if (!retColor && nextColor) { // 如果当前色值非法，混入色值合法，则直接使用混入色值
      retColorStr = nextColorStr;
    } else if (!retColor && !nextColor) { // 如果两个色值都非法，则使用下一批色值
      retColorStr = colors.shift() || '';
    } else if (retColor && nextColor) { // 如果两个色值都合法，执行mix
      retColorStr = retColor.mix(nextColor, nextColor.alpha());
    } // 如果当前色值合法，混入色值非法，无需处理
    nextColorStr = colors.shift();
  }

  return retColorStr;
};

// 处理-webkit-fill-color和-webkit-text-stroke-color，返回处理后的色值，无则返回空字符串
const parseWebkitFillColorAndStrokeColor = value => {
  const newValue = parseColor(value);
  return colorReg.test(newValue) ? newValue : '';
};

// 计算感知亮度
const getColorPerceivedBrightness = rgb => (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;

// 调整为指定感知亮度
const adjustBrightnessByLimit = (limitBright, rgb) => {
  const relativeBrightnessRatio = limitBright / getColorPerceivedBrightness(rgb);
  let newTextR = Math.min(255, rgb[0] * relativeBrightnessRatio);
  let newTextG = Math.min(255, rgb[1] * relativeBrightnessRatio);
  let newTextB = Math.min(255, rgb[2] * relativeBrightnessRatio);
  if (newTextG === 0 || newTextR === 255 || newTextB === 255) {
    newTextG = (limitBright * 1000 - newTextR * 299 - newTextB * 114) / 587;
  } else if (newTextR === 0) {
    newTextR = (limitBright * 1000 - newTextG * 587 - newTextB * 114) / 299;
  } else if (newTextB === 0 || newTextG === 255) {
    newTextB = (limitBright * 1000 - newTextR * 299 - newTextG * 587) / 114;
  }
  return Color.rgb(newTextR, newTextG, newTextB);
};

// 计算亮度，用作对比度计算
const getLuminanace = rgb => {
  const srgb = rgb.map(val => {
    val /= 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return srgb[0] * 0.2126 + srgb[1] * 0.7152 + srgb[2] * 0.0722;
};

// 计算对比度 https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-procedure
const getContrast = (rgb1, rgb2) => {
  const lum1 = getLuminanace(rgb1);
  const lum2 = getLuminanace(rgb2);

  // 亮色 / 暗色
  if (lum1 < lum2) return (lum2 + 0.05) / (lum1 + 0.05);
  return (lum1 + 0.05) / (lum2 + 0.05);
}

export default class SDK {
  _idx = 0; // 索引值
  _defaultDarkTextColorRgb = null;
  _defaultDarkBgColorRgb = null;
  _defaultDarkBgColorHSL = null;
  _defaultDarkTextColorBrightness = null;
  _defaultDarkBgColorBrightness = null;
  _defaultDarkBgColorHslBrightness = null;
  _maxLimitOffsetBrightness = null;

  isDarkmode = false; // 当前是否需要运行Darkmode处理

  constructor() {}

  _adjustTextBrightness(textColor, bgColor) {
    const bgColorRgb = bgColor.rgb().array();
    const bgColorAlpha = bgColor.alpha();
    const bgColorPerceivedBrightness = getColorPerceivedBrightness(bgColorRgb);
    const bgColorWithOpacityPerceivedBrightness = bgColorPerceivedBrightness * bgColorAlpha
      + this._defaultDarkBgColorBrightness * (1 - bgColorAlpha);
    const textColorRgb = textColor.rgb().array();
    const textColorHSL = textColor.hsl().array();
    const textColorAlpha = textColor.alpha();
    const textPerceivedBrightness = getColorPerceivedBrightness(textColorRgb);
    const offsetPerceivedBrightness = Math.abs(bgColorWithOpacityPerceivedBrightness - textPerceivedBrightness);

    // 用户设置为高亮字体颜色（接近白色亮度），不处理，保持高亮
    if (textPerceivedBrightness >= WHITE_LIKE_COLOR_BRIGHTNESS) return textColor;

    if (offsetPerceivedBrightness > this._maxLimitOffsetBrightness
      && bgColorWithOpacityPerceivedBrightness <= this._defaultDarkBgColorBrightness + 2) {
      return adjustBrightnessByLimit(this._maxLimitOffsetBrightness + bgColorWithOpacityPerceivedBrightness
        , textColorRgb).alpha(textColorAlpha);
    }

    // 如果感知亮度差大于阈值，无需调整
    if (offsetPerceivedBrightness >= MIN_LIMIT_OFFSET_BRIGHTNESS) return textColor;

    if (bgColorWithOpacityPerceivedBrightness >= HIGH_BGCOLOR_BRIGHTNESS) { // 亮背景，调暗字体
      if (textColorHSL[2] > 90 - HIGH_BLACKWHITE_HSL_BRIGHTNESS) { // 优先调字体的亮度已带到降低感知亮度的目的
        textColorHSL[2] = 90 - textColorHSL[2];
        const tmpTextColor = Color.hsl(...textColorHSL).alpha(textColorAlpha);
        return this._adjustTextBrightness(tmpTextColor, bgColor);
      }
      return adjustBrightnessByLimit(Math.min(
        this._maxLimitOffsetBrightness
        , bgColorWithOpacityPerceivedBrightness - MIN_LIMIT_OFFSET_BRIGHTNESS
      ), textColorRgb).alpha(textColorAlpha);
    } else { // 暗背景，调亮字体
      if (textColorHSL[2] <= HIGH_BLACKWHITE_HSL_BRIGHTNESS) { // 优先调字体的亮度已带到提高感知亮度的目的
        textColorHSL[2] = 90 - textColorHSL[2];
        const tmpTextColor = Color.hsl(...textColorHSL).alpha(textColorAlpha);
        return this._adjustTextBrightness(tmpTextColor, bgColor);
      }
      return adjustBrightnessByLimit(Math.min(
        this._maxLimitOffsetBrightness
        , bgColorWithOpacityPerceivedBrightness + MIN_LIMIT_OFFSET_BRIGHTNESS
      ), textColorRgb).alpha(textColorAlpha);
    }
  }

  _adjustBackgroundBrightness(bgColor) {
    const bgColorRgb = bgColor.rgb().array();
    const bgColorHsl = bgColor.hsl().array();
    const bgColorAlpha = bgColor.alpha();
    const bgColorPerceivedBrightness = getColorPerceivedBrightness(bgColorRgb);
    let newColor = bgColor;
    if ((bgColorHsl[1] === 0 && bgColorHsl[2] > HIGH_BLACKWHITE_HSL_BRIGHTNESS)
      || bgColorPerceivedBrightness > WHITE_LIKE_COLOR_BRIGHTNESS) {
      // 饱和度为0（黑白灰色），亮度大于HIGH_BLACKWHITE_HSL_BRIGHTNESS或感知亮度大于WHITE_LIKE_COLOR_BRIGHTNESS（白色）时，做亮度取反处理
      newColor = Color.hsl(0, 0, Math.min(100, 100 + this._defaultDarkBgColorHslBrightness - bgColorHsl[2]));
    } else if (bgColorPerceivedBrightness > MAX_LIMIT_BGCOLOR_BRIGHTNESS) {
      // 感知亮度大于MAX_LIMIT_BGCOLOR_BRIGHTNESS，将感知亮度设为MAX_LIMIT_BGCOLOR_BRIGHTNESS
      newColor = adjustBrightnessByLimit(MAX_LIMIT_BGCOLOR_BRIGHTNESS, bgColorRgb).alpha(bgColorAlpha);
      // const ratio = (MAX_LIMIT_BGCOLOR_BRIGHTNESS * 1000)
      //   / (bgColorRgb[0] * 299 + bgColorRgb[1] * 587 + bgColorRgb[2] * 114);
      // newColor = Color.rgb(bgColorRgb[0] * ratio, bgColorRgb[1] * ratio, bgColorRgb[2] * ratio);
    } else if (bgColorHsl[2] < LOW_BLACKWHITE_HSL_BRIGHTNESS) {
      // 亮度小于LOW_BLACKWHITE_HSL_BRIGHTNESS，将亮度设为LOW_BLACKWHITE_HSL_BRIGHTNESS，适当提高亮度
      bgColorHsl[2] = LOW_BLACKWHITE_HSL_BRIGHTNESS;
      newColor = Color.hsl(...bgColorHsl);
    }
    return newColor.alpha(bgColorAlpha).rgb();
  }

  // 调整明度
  _adjustBrightness(color, el, options, isUpdate) {
    // 背景：
    // 处理原则：白背景改黑，其他高感知亮度背景调暗，低亮度适当提高亮度（感知亮度：https://www.w3.org/TR/AERT/#color-contrast）
    // 处理方法：
    // 黑白灰色（h=0，s=0）亮度大于HIGH_BLACKWHITE_HSL_BRIGHTNESS时，做取反处理；
    // 感知亮度大于MAX_LIMIT_BGCOLOR_BRIGHTNESS，取MAX_LIMIT_BGCOLOR_BRIGHTNESS；
    // 其他亮度小于LOW_BLACKWHITE_HSL_BRIGHTNESS时，设为LOW_BLACKWHITE_HSL_BRIGHTNESS。

    // 字体、边框：
    // 处理原则：根据调整后的背景颜色和最小亮度差值算出字体颜色，接近白色字体颜色保持不变，带背景图片子元素字体颜色不变
    // 处理方法：亮度小于HIGH_BLACKWHITE_HSL_BRIGHTNESS时，用（90%-该亮度），大于等于HIGH_BLACKWHITE_HSL_BRIGHTNESS则保持不变；

    // 字体阴影
    // 处理方法：按照背景的处理方法来处理

    const alpha = color.alpha();
    let newColor;
    let extStyle = '';

    if (options.isBgColor) { // 背景色
      // 如果设置背景颜色，取消背景图片的影响
      if (el[BGIMAGEATTR] && alpha >= IGNORE_ALPHA) {
        delete el[BGIMAGEATTR];
      }

      newColor = this._adjustBackgroundBrightness(color);

      if (!options.hasInlineColor) {
        const parentTextColorStr = el[ORIGINAL_COLORATTR] || config.defaultLightTextColor;
        const parentTextColor = ColorParser(parentTextColorStr);
        if (parentTextColor) {
          const ret = this._adjustBrightness(parentTextColor, el, {
            isTextColor: true,
            parentElementBgColorStr: newColor || color
          }, isUpdate);
          if (ret.newColor) {
            extStyle += cssUtils.genCssKV('color', ret.newColor);
          } else {
            extStyle += cssUtils.genCssKV('color', parentTextColor);
          }
        }
      }
    } else if (options.isTextColor || options.isBorderColor) { // 字体色、边框色
      const parentElementBgColorStr = options.parentElementBgColorStr
        || (options.isTextColor && el[BGCOLORATTR])
        || config.defaultDarkBgColor;
      const parentElementBgColor = ColorParser(parentElementBgColorStr);

      // 无背景图片
      if (parentElementBgColor && !el[BGIMAGEATTR]) {
        newColor = this._adjustTextBrightness(color, parentElementBgColor);
        plugins.emit(`afterConvertTextColor${isUpdate ? 'ByUpdateStyle' : ''}`, el, {
          // fontColor: color,
          fontColor: newColor,
          bgColor: parentElementBgColor
        });
      }
    } else if (options.isTextShadow) { // 字体阴影
      // 无背景图片
      if (!el[BGIMAGEATTR]) {
        newColor = this._adjustBackgroundBrightness(color); // 按照背景色的方法来处理
      }
    }

    return {
      newColor: newColor && color.toString() !== newColor.toString() && newColor.alpha(alpha).rgb(),
      extStyle
    };
  }

  _try(func) {
    try {
      return func();
    } catch (e) {
      console.log('An error occurred when running the dark mode conversion algorithm\n', e);
      typeof config.error === 'function' && config.error(e);
    }
  }

  init() {
    this._defaultDarkTextColorRgb = ColorParser(config.defaultDarkTextColor).rgb().array();
    this._defaultDarkBgColorRgb = ColorParser(config.defaultDarkBgColor).rgb().array();
    this._defaultDarkBgColorHSL = ColorParser(config.defaultDarkBgColor).hsl().array();
    this._defaultDarkTextColorBrightness = getColorPerceivedBrightness(this._defaultDarkTextColorRgb);
    this._defaultDarkBgColorBrightness = getColorPerceivedBrightness(this._defaultDarkBgColorRgb);
    this._defaultDarkBgColorHslBrightness = this._defaultDarkBgColorHSL[2];
    this._maxLimitOffsetBrightness = this._defaultDarkTextColorBrightness - this._defaultDarkBgColorBrightness;
  }

  convert(el, cssKVList, isUpdate) {
    plugins.resetCss();
    plugins.emit(`beforeConvertNode${isUpdate ? 'ByUpdateStyle' : ''}`, el);

    let css = ''; // css
    let bgCss = ''; // 文字底图css

    if (this.isDarkmode || isUpdate) {
      const nodeName = el.nodeName;

      if (config.whitelist.tagName.indexOf(nodeName) > -1) return '';
      if (config.whitelist.attribute.some(attribute => el.hasAttribute(attribute))) return '';

      const styles = el.style;

      if (!cssKVList) { // 没有传入cssKVList就从内联样式中提取
        // styles.cssText 读出来的颜色统一是rgba格式，除了用英文定义颜色（如：black、white）
        cssKVList = ((styles.cssText && styles.cssText.replace(/("[^;]*);([^;]*")|('[^;]*);([^;]*')/g, `$1$3${SEMICOLON_PLACEHOLDER}$2$4`).split(';')) || []).map(cssStr => { // 将cssStr转换为[key, value]，并清除各个元素的前后空白字符
          const splitIdx = cssStr.indexOf(':');
          return [cssStr.slice(0, splitIdx).toLowerCase(), cssStr.slice(splitIdx + 1).replace(SEMICOLON_PLACEHOLDER_REGEXP, ';')].map(item => (item || '').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
        });
      }

      let hasInlineColor = false; // 是否有自定义字体颜色
      let hasInlineBackground = false;
      let hasInlineBackgroundImage = false;
      let elBackgroundPositionAttr = null;
      let elBackgroundSizeAttr = null;

      cssKVList = cssKVList.filter(([key, value]) => {
        if (key === 'color') {
          hasInlineColor = true;
        } else if (/background/i.test(key)) {
          hasInlineBackground = true;
          if (key === 'background-position') {
            elBackgroundPositionAttr = value;
          } else if (key === 'background-size') {
            elBackgroundSizeAttr = value;
          }
        }

        if ((/background/i.test(key) || /^(-webkit-)?border-image/.test(key)) && /url\([^)]*\)/i.test(value)) {
          hasInlineBackgroundImage = true;
        }

        // 过滤掉一些key
        return CSS_PROP_LIST.indexOf(key) > -1;
      }).sort(([key1], [key2]) => { // color属性放在最后
        if (key1 === 'color') {
          return 1;
        } else if (key1 === 'background-image' && key2 === 'background-color') { // 确保 background-image 在 background-color 后面
          return 1;
        } else if (key2.indexOf('-webkit-text') === 0) { // 把-webkit-text的属性放在最前面
          return 1;
        }
        return -1;
      });

      if (TABLE_NAME.indexOf(nodeName) > -1 && !hasInlineBackground) { // 如果table没有内联样式
        this._try(() => {
          let colorStr = hasTableClass(el); // 获取class对应的lm色值
          if (!colorStr) colorStr = el.getAttribute('bgcolor'); // 如果没有class则获取bgcolor的色值
          if (colorStr) { // 有色值（class对应的lm色值或者是bgcolor色值），则当做内联样式来处理
            const color = ColorParser(colorStr);
            if (color) {
              cssKVList.unshift(['background-color', color.toString()]);
              hasInlineBackground = true;
            }
          }
        });
      }

      if (nodeName === 'FONT' && !hasInlineColor) { // 如果是font标签且没有内联文本颜色样式
        this._try(() => {
          const colorStr = el.getAttribute('color'); // 获取color的色值
          if (colorStr) { // 有色值，则当做内联样式来处理
            const color = ColorParser(colorStr);
            if (color) {
              cssKVList.push(['color', color.toString()]);
              hasInlineColor = true;
            }
          }
        });
      }

      // 处理-webkit-text相关样式
      let webkitFillColor = '';
      let webkitStrokeColor = '';
      let webkitTextLen = 0;
      cssKVList.some(([key, value], idx) => this._try(() => {
        if (key.indexOf('-webkit-text') !== 0) { // 遍历到非-webkit-text样式
          webkitTextLen = idx; // 记录-webkit-text相关样式的长度
          return true; // 结束遍历
        }

        switch (key) {
          case '-webkit-text-fill-color':
            webkitFillColor = parseWebkitFillColorAndStrokeColor(value);
            break;
          case '-webkit-text-stroke': { // 有-webkit-text-stroke时就不会有-webkit-text-stroke-color
            const newValue = value.split(' ');
            newValue.length === 2 && (webkitStrokeColor = parseWebkitFillColorAndStrokeColor(newValue[1]));
            break;
          }
          case '-webkit-text-stroke-color': // 有-webkit-text-stroke-color时就不会有-webkit-text-stroke
            webkitStrokeColor = parseWebkitFillColorAndStrokeColor(value);
            break;
        }

        return false; // 继续遍历
      }));
      if (webkitFillColor) { // 有-webkit-text-fill-color，当做color对待
        if (hasInlineColor) { // 本来有color，替换为-webkit-text-fill-color
          cssKVList[cssKVList.length - 1] = ['-webkit-text-fill-color', webkitFillColor];
        } else { // 没有color，push一个-webkit-text-fill-color
          cssKVList.push(['-webkit-text-fill-color', webkitFillColor]);
          hasInlineColor = true;
        }
      }
      if (webkitTextLen) {
        cssKVList.splice(0, webkitTextLen); // 删掉-webkit-text相关样式
        webkitStrokeColor && cssKVList.unshift(['-webkit-text-stroke-color', webkitStrokeColor]); // 如果有-webkit-text-stroke-color，则插入到最前面
      }

      let dmClassName = '';
      let dmBgClassName = '';
      if (isUpdate && el.className && typeof el.className === 'string') {
        // 先提取dm className
        let matches = el.className.match(DM_CLASSNAME_REGEXP);
        if (matches) {
          dmClassName = matches[0];
        }

        // 再提取dm bg className
        matches = el.className.match(bgStack.classNameReg);
        if (matches) {
          dmBgClassName = matches[0];
        }
      }

      let cssKV = ''; // css键值对
      cssKVList.forEach(([key, value]) => this._try(() => {
        const oldValue = value;
        let cssChange = false;

        // 找出色值来处理
        const isBgColor = CSS_PROP_SERIES.BG_COLOR.indexOf(key) > -1;
        const isTextShadow = CSS_PROP_SERIES.TEXT_SHADOW.indexOf(key) > -1;
        const textColorIdx = CSS_PROP_SERIES.TEXT_COLOR.indexOf(key);
        const isBorderColor = CSS_PROP_SERIES.BORDER_COLOR.indexOf(key) > -1;
        const isGradient = /gradient/.test(value);
        const gradientColors = [];
        let extStyle = '';
        let gradientMixColor;

        // 将英文定义颜色转换为rgb格式
        value = parseColor(value, isGradient); // 渐变需要处理透明

        if (colorReg.test(value)) {
          if (isGradient) {
            // 把原渐变色取出来
            let matches = colorRegGlobal.exec(value);
            while (matches) {
              gradientColors.push(matches[0]);
              matches = colorRegGlobal.exec(value);
            }

            // 计算出一个mix颜色
            gradientMixColor = mixColor(gradientColors);
          }
          let replaceIndex = 0;
          value = value.replace(colorRegGlobal, match => {
            // 渐变色统一改成mix纯色
            if (isGradient) {
              match = gradientMixColor;
              cssChange = true;
            }

            const matchColor = ColorParser(match);
            if (matchColor?.alpha() >= IGNORE_ALPHA) { // 忽略透明度低的色值
              // 使用颜色处理算法
              const ret = this._adjustBrightness(matchColor, el, {
                isBgColor,
                isTextShadow,
                isTextColor: textColorIdx > -1,
                isBorderColor,
                hasInlineColor
              }, isUpdate);
              const retColor = !hasInlineBackgroundImage && ret.newColor;

              extStyle += ret.extStyle;

              // 对背景颜色和文字颜色做继承传递，用于文字亮度计算
              if (isBgColor || textColorIdx >= 5) { // 只处理color及之后的属性
                const retColorStr = retColor ? retColor.toString() : match;
                replaceIndex === 0 && getChildrenAndIt(el).forEach(dom => {
                  if (isBgColor) {
                    dom[BGCOLORATTR] = retColorStr;
                    dom[ORIGINAL_BGCOLORATTR] = (dom[ORIGINAL_BGCOLORATTR] || config.defaultLightBgColor).split(BG_COLOR_DELIMITER).concat(match).join(BG_COLOR_DELIMITER);
                  } else {
                    dom[COLORATTR] = retColorStr;
                    dom[ORIGINAL_COLORATTR] = match;
                  }

                  // 如果设置背景颜色，取消背景图片的影响
                  const retColor = ColorParser(retColorStr);
                  if (isBgColor && retColor?.alpha() >= IGNORE_ALPHA && dom[BGIMAGEATTR]) {
                    delete dom[BGIMAGEATTR];
                  }
                });
              }

              retColor && (cssChange = true);
              replaceIndex++;
              return retColor || match;
            }
            return match;
          }).replace(/\s?!\s?important/ig, '');
        }

        extStyle && (cssKV += extStyle);

        if (!(el instanceof SVGElement)) { // 先不处理SVG
          // 背景图片、边框图片
          const isBackgroundAttr = /^background/.test(key);
          const isBorderImageAttr = /^(-webkit-)?border-image/.test(key);
          if ((isBackgroundAttr || isBorderImageAttr) && /url\([^)]*\)/i.test(value)) {
            cssChange = true;
            const imgBgColor = mixColor((el[ORIGINAL_BGCOLORATTR] || config.defaultLightBgColor).split(BG_COLOR_DELIMITER));
            // const imgBgColor = el[BGCOLORATTR] || config.defaultLightBgColor;

            // 在背景图片下加一层原背景颜色：
            // background-image使用多层背景(注意background-position也要多加一层 https://www.w3.org/TR/css-backgrounds-3/#layering)；
            // border-image不支持多层背景，需要添加background-color
            value = value.replace(/^(.*?)url\(([^)]*)\)(.*)$/i, matches => {
              let newValue = matches;
              let tmpCssKvStr = '';

              if (!el[BGIMAGEATTR]) { // 避免重复set
                getChildrenAndIt(el).forEach(dom => {
                  dom[BGIMAGEATTR] = true;
                });
              }

              // background-image
              if (isBackgroundAttr) {
                tmpCssKvStr = cssUtils.genCssKV(key, imgBgColor ? `${newValue},linear-gradient(${imgBgColor}, ${imgBgColor})` : newValue);
                if (elBackgroundPositionAttr) {
                  cssKV += cssUtils.genCssKV('background-position', elBackgroundPositionAttr);
                  tmpCssKvStr += cssUtils.genCssKV('background-position', imgBgColor ? `${elBackgroundPositionAttr},top left` : elBackgroundPositionAttr);
                }
                if (elBackgroundSizeAttr) {
                  cssKV += cssUtils.genCssKV('background-size', elBackgroundSizeAttr);
                  tmpCssKvStr += cssUtils.genCssKV('background-size', imgBgColor ? `${elBackgroundSizeAttr},100%` : elBackgroundSizeAttr);
                }
                if (dmBgClassName) { // 如果是文字底图，则直接加样式
                  bgCss += cssUtils.genCss(dmBgClassName, tmpCssKvStr);
                } else { // 否则背景图入栈
                  bgStack.push(el, tmpCssKvStr);
                }
              } else {
                // border-image元素，如果当前元素没有背景颜色，补背景颜色
                if (imgBgColor && !hasInlineBackground) {
                  tmpCssKvStr = cssUtils.genCssKV('background-image', `linear-gradient(${imgBgColor}, ${imgBgColor})`);
                  if (dmBgClassName) { // 如果是文字底图，则直接加样式
                    bgCss += cssUtils.genCss(dmBgClassName, tmpCssKvStr);
                  } else { // 否则背景图入栈
                    bgStack.push(el, tmpCssKvStr); // 背景图入栈
                  }
                }
              }
              return newValue;
            });

            // 没有设置自定义字体颜色，则使用非 Dark Mode 下默认字体颜色
            if (!hasInlineColor) {
              const textColor = el[ORIGINAL_COLORATTR] || config.defaultLightTextColor;
              cssKV += cssUtils.genCssKV('color', textColor);
              getChildrenAndIt(el).forEach(dom => {
                dom[COLORATTR] = textColor;
              });
            }
          }
        }

        if (cssChange) {
          !isUpdate && IMPORTANT_REGEXP.test(oldValue) && (styles[key] = removeImportant(oldValue)); // 清除inline style的!important
          if (isGradient) {
            if (dmBgClassName) { // 如果是文字底图，则直接加样式
              bgCss += cssUtils.genCss(dmBgClassName, cssUtils.genCssKV(key, value));
            } else { // 否则背景图入栈
              bgStack.push(el, cssUtils.genCssKV(key, value)); // 渐变入栈
            }
          } else {
            cssKV += cssUtils.genCssKV(key, value);
          }
        }
      }));

      if (cssKV) { // 有处理过或者是背景图片就加class以及css
        if (!dmClassName) {
          dmClassName = `${CLASS_PREFIX}${this._idx++}`;
          el.classList.add(dmClassName);
        }
        css += (cssKV ? cssUtils.genCss(dmClassName, cssKV) : '');
      }

      css += bgCss; // 追加文字底图样式，要在添加cssKV之后添加，避免被覆盖

      if (!isUpdate && hasTextNode(el)) { // 如果节点里有文本，要判断是否在背景图里
        if (config.delayBgJudge) { // 延迟背景判断
          tnQueue.push(el); // 文字入队
        } else {
          bgStack.contains(el, item => {
            css += cssUtils.genCss(item.className, item.cssKV);
          });
        }
      }
    }

    plugins.emit(`afterConvertNode${isUpdate ? 'ByUpdateStyle' : ''}`, el);

    return css;
  }

  getContrast(colorStr1, colorStr2) {
    const color1 = ColorParser(colorStr1);
    const color2 = ColorParser(colorStr2);
    return (color1 && color2) ? getContrast(color1.rgb().array(), color2.rgb().array()) : 0;
  }
};
