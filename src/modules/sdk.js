/**
 * @name 算法SDK
 *
 * @class SDK
 *
 * @constructor
 * @param {Object} obj
 * @param {Object} obj.config   Darkmode配置
 * @param {Object} obj.tnQueue  文本队列
 * @param {Object} obj.bgStack  背景堆栈
 * @param {Object} obj.cssUtils 样式工具
 *
 * @method convert 处理节点
 * @param {DOM Object} el 要处理的节点
 * @return {string} 处理后的css，包含css选择器
 *
 */

// dependencies
import Color from 'color';
import ColorName from 'color-name';
ColorName.windowtext = [0, 0, 0]; // 补上这个colorName
ColorName.transparent = [255, 255, 255, 0]; // 支持透明，暂定用白色透明度0来表示

import {
  CLASS_PREFIX,

  COLORATTR,
  BGCOLORATTR,
  ORIGINAL_COLORATTR,
  ORIGINAL_BGCOLORATTR,
  BGIMAGEATTR,

  GRAY_MASK_COLOR,

  WHITE_LIKE_COLOR_BRIGHTNESS,
  MIN_LIMIT_OFFSET_BRIGHTNESS,
  MAX_LIMIT_BGCOLOR_BRIGHTNESS,
  HIGH_BGCOLOR_BRIGHTNESS,
  HIGH_BLACKWHITE_HSL_BRIGHTNESS,
  LOW_BLACKWHITE_HSL_BRIGHTNESS,

  TABLE_NAME,

  IS_PC,

  IMPORTANT_REGEXP
} from './constant';

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
const BG_COLOR_DELIMITER = '|';

// 计算mix颜色
const mixColor = colors => {
  if (!colors || colors.length < 1) return '';
  if (colors.length === 1) return colors[0];

  let retColor = colors.shift();
  let nextColor = colors.shift();
  while (nextColor) {
    const nextColorObj = Color(nextColor);
    retColor = Color(retColor).mix(nextColorObj, nextColorObj.alpha());
    nextColor = colors.shift();
  }

  return retColor;
};

// 处理-webkit-fill-color和-webkit-text-stroke-color，返回处理后的色值，无则返回空字符串
const parseWebkitFillColorAndStrokeColor = value => {
  const newValue = parseColor(value);
  return colorReg.test(newValue) ? newValue : '';
};

// 计算感知亮度
const getColorPerceivedBrightness = rgb => (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;

export default class SDK {
  _idx = 0; // 索引值

  constructor({
    config,
    tnQueue,
    bgStack,
    cssUtils
  }) {
    this._config = config;
    this._tnQueue = tnQueue;
    this._bgStack = bgStack;
    this._cssUtils = cssUtils;

    this._defaultDarkTextColorRgb = Color(this._config.defaultDarkTextColor).rgb().array();
    this._defaultDarkBgColorRgb = Color(this._config.defaultDarkBgColor).rgb().array();
    this._defaultDarkBgColorHSL = Color(this._config.defaultDarkBgColor).hsl().array();
    this._defaultDarkTextColorBrightness = getColorPerceivedBrightness(this._defaultDarkTextColorRgb);
    this._defaultDarkBgColorBrightness = getColorPerceivedBrightness(this._defaultDarkBgColorRgb);
    this._defaultDarkBgColorHslBrightness = this._defaultDarkBgColorHSL[2];
    this._maxLimitOffsetBrightness = this._defaultDarkTextColorBrightness - this._defaultDarkBgColorBrightness;
  }

  _adjustBrightnessByLimit(limitBright, rgb) {
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
  }

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
      return this._adjustBrightnessByLimit(this._maxLimitOffsetBrightness + bgColorWithOpacityPerceivedBrightness
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
      return this._adjustBrightnessByLimit(Math.min(
        this._maxLimitOffsetBrightness
        , bgColorWithOpacityPerceivedBrightness - MIN_LIMIT_OFFSET_BRIGHTNESS
      ), textColorRgb).alpha(textColorAlpha);
    } else { // 暗背景，调亮字体
      if (textColorHSL[2] <= HIGH_BLACKWHITE_HSL_BRIGHTNESS) { // 优先调字体的亮度已带到提高感知亮度的目的
        textColorHSL[2] = 90 - textColorHSL[2];
        const tmpTextColor = Color.hsl(...textColorHSL).alpha(textColorAlpha);
        return this._adjustTextBrightness(tmpTextColor, bgColor);
      }
      return this._adjustBrightnessByLimit(Math.min(
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
      newColor = this._adjustBrightnessByLimit(MAX_LIMIT_BGCOLOR_BRIGHTNESS, bgColorRgb).alpha(bgColorAlpha);
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
  _adjustBrightness(color, el, options) {
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
      if (el.getAttribute(BGIMAGEATTR) && alpha >= 0.05) {
        el.removeAttribute(BGIMAGEATTR);
      }

      newColor = this._adjustBackgroundBrightness(color);

      if (!options.hasInlineColor) {
        const parentTextColor = el.getAttribute(COLORATTR) || this._config.defaultLightTextColor;
        const parentBgColorStr = newColor || color;
        // el.setAttribute(BGCOLORATTR, newColor || color)
        const ret = this._adjustBrightness(Color(parentTextColor), el, {
          isTextColor: true,
          parentElementBgColorStr: parentBgColorStr
        });
        if (ret.newColor) {
          extStyle += this._cssUtils.genCssKV('color', ret.newColor);
        } else {
          extStyle += this._cssUtils.genCssKV('color', parentTextColor);
        }
      }
    } else if (options.isTextColor || options.isBorderColor) { // 字体色、边框色
      const parentElementBgColorStr = options.parentElementBgColorStr
        || (options.isTextColor && el.getAttribute(BGCOLORATTR))
        || this._config.defaultDarkBgColor;
      const parentElementBgColor = Color(parentElementBgColorStr);

      // 无背景图片
      if (!el.getAttribute(BGIMAGEATTR)) {
        newColor = this._adjustTextBrightness(color, parentElementBgColor);
      }
    } else if (options.isTextShadow) { // 字体阴影
      newColor = this._adjustBackgroundBrightness(color); // 按照背景色的方法来处理
    }

    return {
      newColor: newColor && color.toString() !== newColor.toString() && newColor.alpha(alpha).rgb(),
      extStyle
    };
  }

  convert(el) {
    const nodeName = el.nodeName;

    if (this._config.whitelist.tagName.indexOf(nodeName) > -1) return '';

    const styles = el.style;
    let cssKV = ''; // css键值对
    let css = ''; // css
    let hasInlineColor = false; // 是否有自定义字体颜色
    let hasInlineBackground = false;
    let hasInlineBackgroundImage = false;
    let elBackgroundPositionAttr;
    let elBackgroundSizeAttr;

    // styles.cssText 读出来的颜色统一是rgba格式，除了用英文定义颜色（如：black、white）
    const cssKVList = ((styles.cssText && styles.cssText.split(';')) || []).map(cssStr => { // 将cssStr转换为[key, value]，并清除各个元素的前后空白字符
      const splitIdx = cssStr.indexOf(':');
      return [cssStr.slice(0, splitIdx).toLowerCase(), cssStr.slice(splitIdx + 1)].map(item => (item || '').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
    }).filter(([key, value]) => {
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
      return [
        '-webkit-border-image',
        'border-image',
        'color',
        'background-color',
        'background-image',
        'background',
        'border',
        'border-top',
        'border-right',
        'border-bottom',
        'border-left',
        'border-color',
        'border-top-color',
        'border-right-color',
        'border-bottom-color',
        'border-left-color',
        '-webkit-text-fill-color',
        '-webkit-text-stroke',
        '-webkit-text-stroke-color',
        'text-shadow'
      ].indexOf(key) > -1;
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
      let color = hasTableClass(el); // 获取class对应的lm色值
      if (!color) color = el.getAttribute('bgcolor'); // 如果没有class则获取bgcolor的色值
      if (color) { // 有色值（class对应的lm色值或者是bgcolor色值），则当做内联样式来处理
        cssKVList.unshift(['background-color', Color(color).toString()]);
        hasInlineBackground = true;
      }
    }

    if (nodeName === 'FONT' && !hasInlineColor) { // 如果是font标签且没有内联样式
      const color = el.getAttribute('color'); // 获取color的色值
      if (color) { // 有色值，则当做内联样式来处理
        cssKVList.push(['color', Color(color).toString()]);
        hasInlineColor = true;
      }
    }

    // 处理-webkit-text相关样式
    let webkitFillColor = '';
    let webkitStrokeColor = '';
    let webkitTextLen = 0;
    cssKVList.some(([key, value], idx) => {
      if (key.indexOf('-webkit-text') !== 0) { // 遍历到非-webkit-text样式
        webkitTextLen = idx; // 记录-webkit-text相关样式的长度
        return true; // 结束遍历
      }

      switch (key) {
        case '-webkit-text-fill-color':
          webkitFillColor = parseWebkitFillColorAndStrokeColor(value);
          break;
        case '-webkit-text-stroke': // 有-webkit-text-stroke时就不会有-webkit-text-stroke-color
          const newValue = value.split(' ');
          newValue.length === 2 && (webkitStrokeColor = parseWebkitFillColorAndStrokeColor(newValue[1]));
          break;
        case '-webkit-text-stroke-color': // 有-webkit-text-stroke-color时就不会有-webkit-text-stroke
          webkitStrokeColor = parseWebkitFillColorAndStrokeColor(value);
          break;
      }

      return false; // 继续遍历
    });
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

    cssKVList.forEach(([key, value]) => {
      const oldValue = value;
      let cssChange = false;

      // 找出色值来处理
      const isBgColor = /^background/.test(key);
      const isTextShadow = key === 'text-shadow';
      const textColorIdx = ['-webkit-text-stroke-color', 'color', '-webkit-text-fill-color'].indexOf(key);
      const isBorderColor = /^border/.test(key);
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

          // 使用颜色处理算法
          const ret = this._adjustBrightness(Color(match), el, {
            isBgColor,
            isTextShadow,
            isTextColor: textColorIdx > -1,
            isBorderColor,
            hasInlineColor
          });
          const retColor = !hasInlineBackgroundImage && ret.newColor;

          extStyle += ret.extStyle;

          // 对背景颜色和文字颜色做继承传递，用于文字亮度计算
          if (isBgColor || textColorIdx > 0) { // 不处理-webkit-text-stroke-color
            const attrName = isBgColor ? BGCOLORATTR : COLORATTR;
            const originalAttrName = isBgColor ? ORIGINAL_BGCOLORATTR : ORIGINAL_COLORATTR;
            const retColorStr = retColor ? retColor.toString() : match;
            replaceIndex === 0 && getChildrenAndIt(el).forEach(dom => {
              const originalAttrValue = dom.getAttribute(originalAttrName) || this._config.defaultLightBgColor;
              dom.setAttribute(attrName, retColorStr);
              dom.setAttribute(originalAttrName, originalAttrValue.split(BG_COLOR_DELIMITER).concat(match).join(BG_COLOR_DELIMITER));

              // 如果设置背景颜色，取消背景图片的影响
              if (isBgColor && Color(retColorStr).alpha() >= 0.05 && dom.getAttribute(BGIMAGEATTR)) {
                dom.removeAttribute(BGIMAGEATTR);
              }
            });
          }

          retColor && (cssChange = true);
          replaceIndex += 1;
          return retColor || match;
        }).replace(/\s?!\s?important/ig, '');
      }

      if (extStyle) {
        cssKV += extStyle;
      }

      if (!(el instanceof SVGElement)) { // 先不处理SVG
        // 背景图片、边框图片
        const isBackgroundAttr = /^background/.test(key);
        const isBorderImageAttr = /^(-webkit-)?border-image/.test(key);
        if ((isBackgroundAttr || isBorderImageAttr) && /url\([^)]*\)/i.test(value)) {
          cssChange = true;
          const imgBgColor = mixColor((el.getAttribute(ORIGINAL_BGCOLORATTR) || this._config.defaultLightBgColor).split(BG_COLOR_DELIMITER));

          // 在背景图片下加一层原背景颜色：
          // background-image使用多层背景(注意background-position也要多加一层 https://www.w3.org/TR/css-backgrounds-3/#layering)；
          // border-image不支持多层背景，需要添加background-color
          value = value.replace(/^(.*?)url\(([^)]*)\)(.*)$/i, matches => {
            let newValue = matches;
            let newBackgroundPositionValue = '';
            let newBackgroundSizeValue = '';
            let tmpCssKvStr = '';

            if (el.getAttribute(BGIMAGEATTR) !== '1') { // 避免重复setAttribute
              getChildrenAndIt(el).forEach(dom => dom.setAttribute(BGIMAGEATTR, '1'));
            }

            // background-image
            if (isBackgroundAttr) {
              newValue = `linear-gradient(${GRAY_MASK_COLOR}, ${GRAY_MASK_COLOR}),${matches}`;
              tmpCssKvStr = this._cssUtils.genCssKV(key, `${newValue},linear-gradient(${imgBgColor}, ${imgBgColor})`);
              if (elBackgroundPositionAttr) {
                newBackgroundPositionValue = `top left,${elBackgroundPositionAttr}`;
                cssKV += this._cssUtils.genCssKV('background-position', `${newBackgroundPositionValue}`);
                tmpCssKvStr += this._cssUtils.genCssKV('background-position', `${newBackgroundPositionValue},top left`);
              }
              if (elBackgroundSizeAttr) {
                newBackgroundSizeValue = `100%,${elBackgroundSizeAttr}`;
                cssKV += this._cssUtils.genCssKV('background-size', `${newBackgroundSizeValue}`);
                tmpCssKvStr += this._cssUtils.genCssKV('background-size', `${newBackgroundSizeValue},100%`);
              }
              this._bgStack.push(el, tmpCssKvStr); // 背景图入栈
            } else {
              // border-image元素，如果当前元素没有背景颜色，补背景颜色
              !hasInlineBackground && this._bgStack.push(el, this._cssUtils.genCssKV('background-image', `linear-gradient(${GRAY_MASK_COLOR}, ${GRAY_MASK_COLOR}),linear-gradient(${imgBgColor}, ${imgBgColor})`)); // 背景图入栈
            }
            return newValue;
          });

          // 没有设置自定义字体颜色，则使用非 Dark Mode 下默认字体颜色
          if (!hasInlineColor) {
            const textColor = mixColor((el.getAttribute(ORIGINAL_COLORATTR) || this._config.defaultLightTextColor).split(BG_COLOR_DELIMITER));
            cssKV += this._cssUtils.genCssKV('color', textColor);
            getChildrenAndIt(el).forEach(dom => dom.setAttribute(COLORATTR, textColor));
          }
        }
      }

      if (cssChange) {
        IMPORTANT_REGEXP.test(oldValue) && (styles[key] = removeImportant(oldValue)); // 清除inline style的!important
        if (isGradient) {
          this._bgStack.push(el, this._cssUtils.genCssKV(key, value)); // 渐变入栈
        } else {
          cssKV += this._cssUtils.genCssKV(key, value);
        }
      }
    });

    if (cssKV) { // 有处理过或者是背景图片就加class以及css
      IS_PC && el.setAttribute('data-style', styles.cssText); // PC端备份内联样式到data-style里，供编辑器做反处理
      const className = `${CLASS_PREFIX}${this._idx++}`;
      el.classList.add(className);
      css += (cssKV ? this._cssUtils.genCss(className, cssKV) : '');
    }

    if (hasTextNode(el)) { // 如果节点里有文本，要判断是否在背景图里
      if (this._config.delayBgJudge) { // 延迟背景判断
        this._tnQueue.push(el); // 文字入队
      } else {
        this._bgStack.contains(el, item => {
          css += this._cssUtils.genCss(item.className, item.cssKV);
        });
      }
    }

    return css;
  }
};
