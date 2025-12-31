/**
 * @name 算法SDK
 *
 * @class SDK
 *
 * @attr {boolean} isDarkmode 当前是否需要运行Darkmode处理
 *
 * @method init 初始化
 * @return void
 *
 * @method convert 处理节点
 * @param {HTMLElement} el               要处理的节点
 * @param {CssKV[]}     [cssKVList=[]]   要处理的css属性列表
 * @param {boolean}     [isUpdate=false] 是否更新
 * @return {string} 处理后的css，包含css选择器
 *
 * @method getContrast 获取两个颜色的对比度
 * @param {ColorParam} colorStr1 颜色1
 * @param {ColorParam} colorStr2 颜色2
 * @return {number} 颜色对比度，取值范围为`[1, 21]`
 *
 */

import { PLUGIN_HOOK } from '../darkmode.d';

// 颜色操作相关API
import * as Color from 'color';
import {
  type RGBAArray,
  type ColorParam,
  ColorParser,
  parseColorName,
  parseWebkitFillColorAndStrokeColor,
  mixColors,
  getFrontColor,
  getColorPerceivedBrightness,
  adjustBrightnessTo
} from './color';

// 常量
import {
  CLASS_PREFIX,
  DM_CLASSNAME_REGEXP,

  COLORATTR,
  BGCOLORATTR,
  ORIGINAL_COLORATTR,
  ORIGINAL_BGCOLORATTR,
  BGIMAGEATTR,
  COMPLEMENTARY_BGIMAGECOLORATTR,

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
  SEMICOLON_PLACEHOLDER_REGEXP,

  COLOR_REGEXP,
  COLOR_REGEXP_GLOBAL,

  URL_REGEXP,
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

interface ConvertOptions {
  isBgColor?: boolean;
  isTextShadow?: boolean;
  isTextColor?: boolean;
  isBorderColor?: boolean;
  hasInlineColor?: boolean;
  parentElementBgColor?: Color | null;
}

interface AdjustBrightnessRet {
  newColor: Color | null;
  extStyle: string;
}

interface AdjustTextBrightnessOptions {
  alpha?: number;
  bgColorPerceivedBrightness?: number;
}

type CssKV = [string, string];

const trim = (str: string) => str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

export default class SDK {
  _idx = 0; // 索引值
  _defaultDarkTextColorRgb: RGBAArray = [0, 0, 0, 0];
  _defaultDarkBgColorRgb: RGBAArray = [0, 0, 0, 0];
  _defaultDarkBgColorHSL: number[] = [];
  _defaultDarkTextColorBrightness = 0;
  _defaultDarkBgColorBrightness = 0;
  _defaultDarkBgColorHslBrightness = 0;
  _maxLimitOffsetBrightness = 0;

  isDarkmode = false; // 当前是否需要运行Darkmode处理

  constructor() {}

  // 调整明度
  _adjustBrightness(color: Color, el: HTMLElement, options: ConvertOptions, isUpdate: boolean = false): AdjustBrightnessRet {
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

    let newColor: Color | null = null;
    let extStyle = '';

    if (options.isBgColor) { // 背景色
      // 如果有背景颜色，取消背景图片的影响
      if (color.alpha() >= IGNORE_ALPHA && (el as any)[BGIMAGEATTR]) {
        getChildrenAndIt(el).forEach(dom => {
          delete (dom as any)[BGIMAGEATTR];
        });
      }

      // 如果有背景图片补色
      if ((el as any)[COMPLEMENTARY_BGIMAGECOLORATTR]) {
        // 背景图片补色和当前背景色一致，则无需处理
        // 根据最小可觉差Just-noticeable difference(即JND，表示人类或动物对于某一特定的感官刺激所能察觉的最小改变）和韦伯-费希纳定律，在特定条件下，人类能感知小至 0.5% - 2% 的变化，0.5%换算成对比度为1.1
        // https://zh.wikipedia.org/wiki/%E6%9C%80%E5%B0%8F%E5%8F%AF%E8%A6%BA%E5%B7%AE 最小可觉差wiki
        // https://zh.wikipedia.org/wiki/%E9%9F%8B%E4%BC%AF-%E8%B2%BB%E5%B8%8C%E7%B4%8D%E5%AE%9A%E7%90%86 韦伯-费希纳定理wiki
        if ((el as any)[COMPLEMENTARY_BGIMAGECOLORATTR] === color.toString() || this.getContrast((el as any)[COMPLEMENTARY_BGIMAGECOLORATTR], color.toString()) < 1.1) return {
          newColor: null,
          extStyle
        };

        // 否则取消背景图片补色的影响
        getChildrenAndIt(el).forEach(dom => {
          delete (dom as any)[COMPLEMENTARY_BGIMAGECOLORATTR];
        });
      }

      const bgColor = (el as any)[BGCOLORATTR] || config.defaultDarkBgColor;
      newColor = this._adjustBackgroundBrightness(color, bgColor);

      // 如果内联样式没有color，使用继承的原字体颜色和当前背景色算出合适的字体颜色
      if (!options.hasInlineColor) {
        const parentElementBgColor = mixColors([bgColor, newColor || color]);
        const parentTextColor = ColorParser((el as any)[ORIGINAL_COLORATTR] || config.defaultLightTextColor);
        if (parentTextColor) {
          const ret = this._adjustBrightness(parentTextColor, el, {
            isBgColor: false,
            isTextShadow: false,
            isTextColor: true,
            isBorderColor: false,
            hasInlineColor: true,
            parentElementBgColor,
          }, isUpdate);
          if (ret.newColor) {
            extStyle += cssUtils.genCssKV('color', ret.newColor.toString());
          } else {
            extStyle += cssUtils.genCssKV('color', parentTextColor.toString());
          }

          // 对文字颜色做继承传递，用于文字亮度计算
          getChildrenAndIt(el).forEach(dom => {
            (dom as any)[COLORATTR] = mixColors([parentElementBgColor, ret.newColor || parentTextColor]);
            (dom as any)[ORIGINAL_COLORATTR] = parentTextColor;
          });
        }
      }
    } else if (options.isTextColor || options.isBorderColor) { // 字体色、边框色
      const parentElementBgColor = ColorParser(
        options.parentElementBgColor
        || (options.isTextColor && (el as any)[BGCOLORATTR])
        || config.defaultDarkBgColor
      );

      // 无背景图片
      if (parentElementBgColor && !(el as any)[BGIMAGEATTR]) {
        newColor = this._adjustTextBrightness(color, parentElementBgColor);
        plugins.emit(isUpdate ? PLUGIN_HOOK.AFTER_CONVERT_TEXT_COLOR_BY_UPDATE_STYLE : PLUGIN_HOOK.AFTER_CONVERT_TEXT_COLOR, el, {
          fontColor: newColor,
          bgColor: parentElementBgColor
        });
      }
    } else if (options.isTextShadow) { // 字体阴影，当背景色处理
      // 无背景图片
      if (!(el as any)[BGIMAGEATTR]) {
        newColor = this._adjustBackgroundBrightness(color, (el as any)[BGCOLORATTR] || config.defaultDarkBgColor);
      }
    }

    return {
      newColor: (newColor && color.toString() !== newColor.toString()) ? newColor.rgb() : null,
      extStyle
    };
  }

  // 调整文本明度
  _adjustTextBrightness(textColor: Color, bgColor: Color, opt?: AdjustTextBrightnessOptions): Color | null {
    const textColorAlpha = opt?.alpha || textColor.alpha();
    const textColorMix = opt ? textColor : mixColors([bgColor, textColor]);
    if (textColorMix === null) return null;

    const textColorMixRgb = textColorMix.rgb().array() as RGBAArray;
    const textColorMixHsl = textColorMix.hsl().array();
    const textPerceivedBrightness = getColorPerceivedBrightness(textColorMixRgb);
    const bgColorPerceivedBrightness = opt?.bgColorPerceivedBrightness || getColorPerceivedBrightness(bgColor.rgb().array() as RGBAArray);
    const offsetPerceivedBrightness = Math.abs(bgColorPerceivedBrightness - textPerceivedBrightness);

    // 用户设置为高亮字体颜色（接近白色亮度），不处理，保持高亮
    if (textPerceivedBrightness >= WHITE_LIKE_COLOR_BRIGHTNESS) return opt ? getFrontColor(textColor, bgColor, textColorAlpha) : textColor;

    if (offsetPerceivedBrightness > this._maxLimitOffsetBrightness && bgColorPerceivedBrightness <= this._defaultDarkBgColorBrightness + 2) {
      return getFrontColor(
        adjustBrightnessTo(this._maxLimitOffsetBrightness + bgColorPerceivedBrightness, textColorMixRgb),
        bgColor,
        textColorAlpha
      );
    }

    // 如果感知亮度差大于阈值，无需调整
    if (offsetPerceivedBrightness >= MIN_LIMIT_OFFSET_BRIGHTNESS) return opt ? getFrontColor(textColor, bgColor, textColorAlpha) : textColor;

    if (bgColorPerceivedBrightness >= HIGH_BGCOLOR_BRIGHTNESS) { // 亮背景，调暗字体
      if (textColorMixHsl[2] > 90 - HIGH_BLACKWHITE_HSL_BRIGHTNESS) { // 优先调字体的亮度已带到降低感知亮度的目的
        textColorMixHsl[2] = 90 - textColorMixHsl[2];
        return this._adjustTextBrightness(Color.hsl(...textColorMixHsl), bgColor, {
          alpha: textColorAlpha,
          bgColorPerceivedBrightness,
        });
      }
      return getFrontColor(
        adjustBrightnessTo(Math.min(this._maxLimitOffsetBrightness, bgColorPerceivedBrightness - MIN_LIMIT_OFFSET_BRIGHTNESS), textColorMixRgb),
        bgColor,
        textColorAlpha
      );
    } else { // 暗背景，调亮字体
      if (textColorMixHsl[2] <= HIGH_BLACKWHITE_HSL_BRIGHTNESS) { // 优先调字体的亮度已带到提高感知亮度的目的
        textColorMixHsl[2] = 90 - textColorMixHsl[2];
        return this._adjustTextBrightness(Color.hsl(...textColorMixHsl), bgColor, {
          alpha: textColorAlpha,
          bgColorPerceivedBrightness,
        });
      }
      return getFrontColor(
        adjustBrightnessTo(Math.min(this._maxLimitOffsetBrightness, bgColorPerceivedBrightness + MIN_LIMIT_OFFSET_BRIGHTNESS), textColorMixRgb),
        bgColor,
        textColorAlpha
      );
    }
  }

  // 调整背景明度
  _adjustBackgroundBrightness(bgColor: Color, bgColorMix: Color): Color | null {
    const mixColor = mixColors([bgColorMix, bgColor]);
    if (mixColor === null) return null;

    const mixColorRgb = mixColor.rgb().array() as RGBAArray;
    const mixColorHsl = mixColor.hsl().array();
    const mixColorPerceivedBrightness = getColorPerceivedBrightness(mixColorRgb);
    let newColor = mixColor;
    if ((mixColorHsl[1] === 0 && mixColorHsl[2] > HIGH_BLACKWHITE_HSL_BRIGHTNESS)
      || mixColorPerceivedBrightness > WHITE_LIKE_COLOR_BRIGHTNESS) {
      // 饱和度为0（黑白灰色），亮度大于HIGH_BLACKWHITE_HSL_BRIGHTNESS或感知亮度大于WHITE_LIKE_COLOR_BRIGHTNESS（白色）时，做亮度取反处理
      newColor = Color.hsl(0, 0, Math.min(100, 100 + this._defaultDarkBgColorHslBrightness - mixColorHsl[2]), mixColorHsl[3] || 1);
    } else if (mixColorPerceivedBrightness > MAX_LIMIT_BGCOLOR_BRIGHTNESS) {
      // 感知亮度大于MAX_LIMIT_BGCOLOR_BRIGHTNESS，将感知亮度设为MAX_LIMIT_BGCOLOR_BRIGHTNESS
      newColor = adjustBrightnessTo(MAX_LIMIT_BGCOLOR_BRIGHTNESS, mixColorRgb);
    } else if (mixColorHsl[2] < LOW_BLACKWHITE_HSL_BRIGHTNESS) {
      // 亮度小于LOW_BLACKWHITE_HSL_BRIGHTNESS，将亮度设为LOW_BLACKWHITE_HSL_BRIGHTNESS，适当提高亮度
      mixColorHsl[2] = LOW_BLACKWHITE_HSL_BRIGHTNESS;
      newColor = Color.hsl(...mixColorHsl);
    }
    return getFrontColor(newColor, bgColorMix, bgColor.alpha());
  }

  // 叠加渐变色到背景色中，并更新背景色相关属性值以及文本颜色
  _updateBgWithGradient(gradientColor: Color, el: HTMLElement, className: string, cssKVList: CssKV[], isUpdate: boolean = false) {
    const newBgColor = mixColors([(el as any)[BGCOLORATTR] || config.defaultDarkBgColor, gradientColor]);
    const newOriginalBgColor = mixColors([(el as any)[ORIGINAL_BGCOLORATTR] || config.defaultLightBgColor, gradientColor]);
    getChildrenAndIt(el).forEach(dom => {
      (dom as any)[BGCOLORATTR] = newBgColor;
      (dom as any)[ORIGINAL_BGCOLORATTR] = newOriginalBgColor;
    });
    const lastKV = cssKVList.slice(-1)[0];
    let color = null;
    let hasInlineColor = CSS_PROP_SERIES.TEXT_COLOR.indexOf(lastKV[0]) >= 5;
    if (hasInlineColor) {
      color = ColorParser(parseColorName(lastKV[1]));
    } else if (el.nodeName === 'FONT') { // 如果是font标签且没有内联文本颜色样式
      this._try(() => {
        const colorStr = el.getAttribute('color'); // 获取color的色值
        if (colorStr) { // 有色值，则当做内联样式来处理
          const tmpColor = ColorParser(colorStr);
          if (tmpColor) {
            color = tmpColor;
            hasInlineColor = true;
          }
        }
      });
    } else {
      color = ColorParser((el as any)[ORIGINAL_COLORATTR] || config.defaultLightTextColor);
    }
    if (color === null) return '';

    const ret = this._adjustBrightness(color, el, {
      isBgColor: false,
      isTextShadow: false,
      isTextColor: true,
      isBorderColor: false,
      hasInlineColor,
    }, isUpdate);
    const newColor = mixColors([newBgColor, ret.newColor || color]);
    const newOriginColor = color;
    getChildrenAndIt(el).forEach(dom => {
      (dom as any)[COLORATTR] = newColor;
      (dom as any)[ORIGINAL_COLORATTR] = newOriginColor;
    });
    if (ret.newColor) return cssUtils.genCss(className, cssUtils.genCssKV(lastKV[0], ret.newColor.toString()));
    return '';
  }

  _try(func: Function) {
    try {
      return func();
    } catch (e: any) {
      console.log('An error occurred when running the dark mode conversion algorithm\n', e);
      config.error?.(e);
    }
  }

  // 初始化
  init() {
    const defaultDarkTextColor = ColorParser(config.defaultDarkTextColor);
    defaultDarkTextColor && (this._defaultDarkTextColorRgb = defaultDarkTextColor.rgb().array() as RGBAArray);

    const defaultDarkBgColor = ColorParser(config.defaultDarkBgColor);
    if (defaultDarkBgColor) {
      this._defaultDarkBgColorRgb = defaultDarkBgColor.rgb().array() as RGBAArray;
      this._defaultDarkBgColorHSL = defaultDarkBgColor.hsl().array();
    }

    this._defaultDarkTextColorBrightness = getColorPerceivedBrightness(this._defaultDarkTextColorRgb);
    this._defaultDarkBgColorBrightness = getColorPerceivedBrightness(this._defaultDarkBgColorRgb);
    this._defaultDarkBgColorHslBrightness = this._defaultDarkBgColorHSL[2];
    this._maxLimitOffsetBrightness = Math.max(this._defaultDarkTextColorBrightness - this._defaultDarkBgColorBrightness, 0);
  }

  // 处理节点
  convert(el: HTMLElement, cssKVList: CssKV[] = [], isUpdate: boolean = false) {
    plugins.resetCss();
    plugins.emit(isUpdate ? PLUGIN_HOOK.BEFORE_CONVERT_NODE_BY_UPDATE_STYLE : PLUGIN_HOOK.BEFORE_CONVERT_NODE, el);

    let css = ''; // css
    let bgCss = ''; // 文字底图css

    if (this.isDarkmode || isUpdate) {
      const nodeName = el.nodeName;

      if (config.whitelist.tagName.indexOf(nodeName) > -1) return '';
      if (config.whitelist.attribute.some(attribute => el.hasAttribute(attribute))) return '';

      const styles = el.style;

      if (cssKVList.length === 0) { // 没有传入cssKVList就从内联样式中提取
        // styles.cssText 读出来的颜色统一是rgba格式，除了用英文定义颜色（如：black、white）
        cssKVList = ((styles.cssText && styles.cssText.replace(/("[^;]*);([^;]*")|('[^;]*);([^;]*')/g, `$1$3${SEMICOLON_PLACEHOLDER}$2$4`).split(';')) || []).map(cssStr => { // 将cssStr转换为[key, value]，并清除各个元素的前后空白字符
          const splitIdx = cssStr.indexOf(':');
          return [
            trim(cssStr.slice(0, splitIdx).toLowerCase() || ''),
            trim(cssStr.slice(splitIdx + 1).replace(SEMICOLON_PLACEHOLDER_REGEXP, ';') || ''),
          ];
        });
      }

      let hasInlineColor = false; // 是否有自定义字体颜色
      let hasInlineBackground = false;
      let hasInlineBackgroundImage = false;
      let elBackgroundPositionAttr = '';
      let elBackgroundSizeAttr = '';

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

        if ((/background/i.test(key) || /^(-webkit-)?border-image/.test(key)) && URL_REGEXP.test(value)) {
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
        let gradientMixColor: Color | null = null;

        // 将英文定义颜色转换为rgb格式
        value = parseColorName(value, isGradient); // 渐变需要处理透明

        if (COLOR_REGEXP.test(value)) {
          if (isGradient) {
            // 把原渐变色取出来
            let matches = COLOR_REGEXP_GLOBAL.exec(value);
            while (matches) {
              gradientColors.push(matches[0]);
              matches = COLOR_REGEXP_GLOBAL.exec(value);
            }

            // 计算出一个mix颜色
            gradientMixColor = mixColors(gradientColors, 'mix');
          }
          let replaceIndex = 0;
          value = value.replace(COLOR_REGEXP_GLOBAL, match => {
            let matchColor: Color | null = null;

            // 渐变色统一改成mix纯色
            if (isGradient) {
              matchColor = gradientMixColor;
              cssChange = true;
            } else {
              matchColor = ColorParser(match);
            }

            if (matchColor && matchColor.alpha() >= IGNORE_ALPHA) { // 忽略透明度低的色值 // TODO: 后面要干掉这个逻辑
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
              if ((isBgColor || textColorIdx >= 5) && replaceIndex === 0) { // 只处理color及之后的属性
                const newColor = mixColors([(el as any)[BGCOLORATTR] || config.defaultDarkBgColor, retColor || matchColor]);
                const newOriginalColor = isBgColor ? mixColors([(el as any)[ORIGINAL_BGCOLORATTR] || config.defaultLightBgColor, matchColor]) : matchColor;
                getChildrenAndIt(el).forEach(dom => {
                  if (isBgColor) {
                    (dom as any)[BGCOLORATTR] = newColor;
                    (dom as any)[ORIGINAL_BGCOLORATTR] = newOriginalColor;
                  } else {
                    (dom as any)[COLORATTR] = newColor;
                    (dom as any)[ORIGINAL_COLORATTR] = newOriginalColor;
                  }
                });
              }

              retColor && (cssChange = true);
              replaceIndex++;
              return (retColor || matchColor).toString();
            }

            if (!isGradient) return match;
            return gradientMixColor === null ? match : gradientMixColor.toString();
          }).replace(/\s?!\s?important/ig, '');
        }

        extStyle && (cssKV += extStyle);

        if (!(el instanceof SVGElement)) { // 先不处理SVG
          // 背景图片、边框图片
          const isBackgroundAttr = /^background/.test(key);
          const isBorderImageAttr = /^(-webkit-)?border-image/.test(key);
          if ((isBackgroundAttr || isBorderImageAttr) && URL_REGEXP.test(value)) {
            cssChange = true;

            // 在背景图片下加一层原背景颜色，即图片补色：
            // background-image使用多层背景(注意background-position也要多加一层 https://www.w3.org/TR/css-backgrounds-3/#layering)
            // border-image不支持多层背景，需要添加background-image
            const imgBgColor = (el as any)[ORIGINAL_BGCOLORATTR] || config.defaultLightBgColor;
            if (/^(.*?)url\(([^)]*)\)(.*)$/i.test(value)) {
              let tmpCssKvStr = '';

              // 标记为有背景图片
              !(el as any)[BGIMAGEATTR] && getChildrenAndIt(el).forEach(dom => {
                (dom as any)[BGIMAGEATTR] = true;
              });

              // background-image
              if (isBackgroundAttr) {
                tmpCssKvStr = cssUtils.genCssKV(key, `${value},linear-gradient(${imgBgColor}, ${imgBgColor})`);
                if (elBackgroundPositionAttr) {
                  cssKV += cssUtils.genCssKV('background-position', elBackgroundPositionAttr);
                  tmpCssKvStr += cssUtils.genCssKV('background-position', `${elBackgroundPositionAttr},top left`);
                }
                if (elBackgroundSizeAttr) {
                  cssKV += cssUtils.genCssKV('background-size', elBackgroundSizeAttr);
                  tmpCssKvStr += cssUtils.genCssKV('background-size', `${elBackgroundSizeAttr},100%`);
                }
                if (dmBgClassName) { // 如果是文字底图，则直接加样式
                  bgCss += cssUtils.genCss(dmBgClassName, tmpCssKvStr);
                  getChildrenAndIt(el).forEach(dom => {
                    (dom as any)[COMPLEMENTARY_BGIMAGECOLORATTR] = imgBgColor;
                  });
                } else { // 否则背景图入栈
                  bgStack.push(el, tmpCssKvStr, () => {
                    getChildrenAndIt(el).forEach(dom => {
                      (dom as any)[COMPLEMENTARY_BGIMAGECOLORATTR] = imgBgColor;
                    });
                  });
                }
              } else {
                // border-image元素，如果当前元素没有背景颜色，补背景颜色
                if (imgBgColor && !hasInlineBackground) {
                  tmpCssKvStr = cssUtils.genCssKV('background-image', `linear-gradient(${imgBgColor}, ${imgBgColor})`);
                  if (dmBgClassName) { // 如果是文字底图，则直接加样式
                    bgCss += cssUtils.genCss(dmBgClassName, tmpCssKvStr);
                  } else { // 否则边框图入栈
                    bgStack.push(el, tmpCssKvStr);
                  }
                }
              }
            }

            // 没有设置自定义字体颜色，则使用 Light Mode 下默认字体颜色
            if (!hasInlineColor) {
              const textColor = (el as any)[ORIGINAL_COLORATTR] || config.defaultLightTextColor;
              cssKV += cssUtils.genCssKV('color', textColor);
              getChildrenAndIt(el).forEach(dom => {
                (dom as any)[COLORATTR] = textColor;
              });
            }
          }
        }

        if (cssChange) {
          !isUpdate && IMPORTANT_REGEXP.test(oldValue) && ((styles as any)[key] = oldValue.replace(IMPORTANT_REGEXP, '')); // 清除inline style的!important
          if (isGradient) {
            if (dmBgClassName) { // 如果是文字底图，则直接加样式
              bgCss += cssUtils.genCss(dmBgClassName, cssUtils.genCssKV(key, value));
              if (gradientMixColor && /^background/.test(key) && !URL_REGEXP.test(value)) { // 是无背景图的渐变，需要重新计算背景色
                css += this._updateBgWithGradient(gradientMixColor, el, dmBgClassName, cssKVList, isUpdate);
              }
            } else { // 否则渐变入栈
              bgStack.push(el, cssUtils.genCssKV(key, value), item => {
                if (gradientMixColor && /^background/.test(key) && !URL_REGEXP.test(value)) { // 是无背景图的渐变，需要重新计算背景色
                  css += this._updateBgWithGradient(gradientMixColor, el, item.className, cssKVList, isUpdate);
                }
              });
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
            item.cb?.(item);
          });
        }
      }
    }

    plugins.emit(isUpdate ? PLUGIN_HOOK.AFTER_CONVERT_NODE_BY_UPDATE_STYLE : PLUGIN_HOOK.AFTER_CONVERT_NODE, el);

    return css;
  }

  // 获取两个颜色的对比度
  getContrast(colorStr1: ColorParam, colorStr2: ColorParam): number {
    const color1 = ColorParser(colorStr1);
    const color2 = ColorParser(colorStr2);
    return (color1 && color2) ? color1.contrast(color2) : 0;
  }
};
