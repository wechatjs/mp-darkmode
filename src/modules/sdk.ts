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
 * @method rebuildAncestorExpando 重建祖先节点的expando
 * @param {HTMLElement[]} nodes 要处理的节点
 * @param {HTMLElement} container 要重建的祖先容器
 * @return void
 *
 * @method convert 处理节点
 * @param {HTMLElement} el                要处理的节点
 * @param {CssKV[]}     [cssKVList=[]]    要处理的css属性列表
 * @param {boolean}     [isUpdate=false]  是否更新
 * @param {boolean}     [needReset=false] 是否重置
 * @return {string} 处理后的css，包含css选择器
 *
 * @method adjustBackgroundBrightness 调整背景明度
 * @param {ColorParam} bgColor      要调整的背景颜色
 * @param {ColorParam} bgColorExist 已有的背景颜色
 * @return {ColorInstance | null} 调整后的背景颜色
 *
 * @method adjustTextBrightness 调整文本明度
 * @param {ColorParam}                  textColor 要调整的字体颜色
 * @param {ColorParam}                  bgColor   背景颜色
 * @param {AdjustTextBrightnessOptions} [opt]     调整选项
 * @return {ColorInstance | null} 调整后的字体颜色
 *
 * @method getContrast 获取两个颜色的对比度
 * @param {ColorParam} colorStr1 颜色1
 * @param {ColorParam} colorStr2 颜色2
 * @return {number} 颜色对比度，取值范围为`[1, 21]`
 *
 * @method reset 重置
 * @return void
 *
 */

import { PLUGIN_HOOK } from '../darkmode.d';

// 颜色操作相关API
import {
  type RGBAArray,
  type ColorInstance,
  type ColorParam,
  ColorParser,
  parseColorName,
  parseWebkitFillColorAndStrokeColor,
  mixColors,
  getFrontColor,
  getColorPerceivedBrightness,
  adjustBrightnessTo,
  getRgbArray,
  getHslArray,
  colorFromHsl,
  colorToCssString,
  getContrast,
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
  BGGRADIENT_MIXCOLORATTR,
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
import config, {
  trim,
  getStyle,
  setStyle,
  getClass,
  addClass,
  getAttr,
  setAttr,
  removeAttr,
} from './config';

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
  parentElementBgColor?: ColorInstance | null;
}

interface AdjustBrightnessRet {
  newColor: ColorInstance | null;
  extStyle: string;
}

interface AdjustTextBrightnessOptions {
  alpha?: number;
  bgColorPerceivedBrightness?: number;
}

type CssKV = [string, string];

export default class SDK {
  _idx = 0; // 索引值
  _defaultDarkTextColorRgb: RGBAArray = [0, 0, 0, 0];
  _defaultDarkBgColorRgb: RGBAArray = [0, 0, 0, 0];
  _defaultDarkBgColorHSL: number[] = [];
  _defaultDarkTextColorBrightness = 0;
  _defaultDarkBgColorBrightness = 0;
  _defaultDarkBgColorHslBrightness = 0;
  _maxLimitOffsetBrightness = 0;
  _inheritTargets: HTMLElement[] | null = null; // convert 继承传递时的目标白名单（仅 rebuildAncestorExpando 场景使用，null 时走整子树）

  isDarkmode = false; // 当前是否需要运行Darkmode处理

  constructor() {}

  // convert 继承传递（setAttr/removeAttr 给子树）时的目标节点集合
  // 默认（_inheritTargets 为 null）走原逻辑 getChildrenAndIt(el) 覆盖整个子树；
  // rebuildAncestorExpando 场景下限定为 inheritTargets 中 el 的后代（含自身），避免遍历整子树 + 污染旁支。
  _inheritNodes(el: HTMLElement): HTMLElement[] {
    return this._inheritTargets ? this._inheritTargets.filter(t => el.contains(t)) : getChildrenAndIt(el);
  }

  // 是否是「黑白灰且亮度需要取反」的颜色
  _isInvertGrayColor(color: ColorParam): boolean {
    const colorInstance = ColorParser(color);
    if (!colorInstance) return false;
    const colorHsl = getHslArray(colorInstance);
    const colorRgb = getRgbArray(colorInstance) as RGBAArray;

    return (colorHsl[1] === 0 && colorHsl[2] > HIGH_BLACKWHITE_HSL_BRIGHTNESS)
      || getColorPerceivedBrightness(colorRgb) > WHITE_LIKE_COLOR_BRIGHTNESS;
  }

  // 调整明度
  _adjustBrightness(color: ColorInstance, el: HTMLElement, options: ConvertOptions, isUpdate: boolean = false, needReset: boolean = false): AdjustBrightnessRet {
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

    let newColor: ColorInstance | null = null;
    let extStyle = '';

    if (options.isBgColor) { // 背景色
      // 如果有背景颜色，取消背景图片的影响
      if (color.alpha >= IGNORE_ALPHA && getAttr(el, BGIMAGEATTR)) {
        this._inheritNodes(el).forEach(dom => {
          removeAttr(dom, BGIMAGEATTR);
        });
      }

      // 如果有背景图片补色
      if (getAttr(el, COMPLEMENTARY_BGIMAGECOLORATTR)) {
        // 背景图片补色和当前背景色一致，则无需处理
        // 根据最小可觉差Just-noticeable difference(即JND，表示人类或动物对于某一特定的感官刺激所能察觉的最小改变）和韦伯-费希纳定律，在特定条件下，人类能感知小至 0.5% - 2% 的变化，0.5%换算成对比度为1.1
        // https://zh.wikipedia.org/wiki/%E6%9C%80%E5%B0%8F%E5%8F%AF%E8%A6%BA%E5%B7%AE 最小可觉差wiki
        // https://zh.wikipedia.org/wiki/%E9%9F%8B%E4%BC%AF-%E8%B2%BB%E5%B8%8C%E7%B4%8D%E5%AE%9A%E7%90%86 韦伯-费希纳定理wiki
        if (getAttr(el, COMPLEMENTARY_BGIMAGECOLORATTR) === colorToCssString(color) || this.getContrast(getAttr(el, COMPLEMENTARY_BGIMAGECOLORATTR), colorToCssString(color)) < 1.1) {
          return {
            newColor: needReset ? color : null,
            extStyle
          };
        }

        // 否则取消背景图片补色的影响
        this._inheritNodes(el).forEach(dom => {
          removeAttr(dom, COMPLEMENTARY_BGIMAGECOLORATTR);
        });
      }

      const bgColor = getAttr(el, BGCOLORATTR) || config.defaultDarkBgColor;
      newColor = this.adjustBackgroundBrightness(color, bgColor);

      // 如果内联样式没有color，使用继承的原字体颜色和当前背景色算出合适的字体颜色
      if (!options.hasInlineColor) {
        const parentElementBgColor = mixColors([bgColor, newColor || color]);
        const parentTextColor = ColorParser(getAttr(el, ORIGINAL_COLORATTR) || config.defaultLightTextColor);
        if (parentTextColor) {
          const ret = this._adjustBrightness(parentTextColor, el, {
            isBgColor: false,
            isTextShadow: false,
            isTextColor: true,
            isBorderColor: false,
            hasInlineColor: true,
            parentElementBgColor,
          }, isUpdate, needReset);
          extStyle += cssUtils.genCssKV('color', colorToCssString(ret.newColor || parentTextColor));

          // 对文字颜色做继承传递，用于文字亮度计算
          this._inheritNodes(el).forEach(dom => {
            setAttr(dom, COLORATTR, mixColors([parentElementBgColor, ret.newColor || parentTextColor]));
            setAttr(dom, ORIGINAL_COLORATTR, parentTextColor);
          });
        }
      }
    } else if (options.isTextColor || options.isBorderColor) { // 字体色、边框色
      const parentElementBgColor = ColorParser(
        options.parentElementBgColor
        || (options.isTextColor && getAttr(el, BGCOLORATTR))
        || config.defaultDarkBgColor
      );

      // 无背景图片，或背景底色不属于「黑白灰需取反」时才转换（按底色判断，与所在区域的 LM/DM 观感一致）
      if (parentElementBgColor && (!getAttr(el, BGIMAGEATTR) || !this._isInvertGrayColor(getAttr(el, ORIGINAL_BGCOLORATTR) || config.defaultLightBgColor))) {
        newColor = this.adjustTextBrightness(color, parentElementBgColor);
        let afterConvertTextColorHookName = PLUGIN_HOOK.AFTER_CONVERT_TEXT_COLOR;
        if (isUpdate) {
          afterConvertTextColorHookName = PLUGIN_HOOK.AFTER_CONVERT_TEXT_COLOR_BY_UPDATE_STYLE;
        } else if (needReset) {
          afterConvertTextColorHookName = PLUGIN_HOOK.AFTER_CONVERT_TEXT_COLOR_BY_RESET;
        }
        plugins.emit(afterConvertTextColorHookName, el, {
          fontColor: newColor,
          bgColor: parentElementBgColor
        });
      }
    } else if (options.isTextShadow) { // 字体阴影，当背景色处理
      // 无背景图片，或阴影色值不属于「黑白灰需取反」时才转换（按阴影自身色值判断，与底色/补色无关）
      if (!getAttr(el, BGIMAGEATTR) || !this._isInvertGrayColor(color)) {
        newColor = this.adjustBackgroundBrightness(color, getAttr(el, BGCOLORATTR) || config.defaultDarkBgColor);
      }
    }

    return {
      newColor: (newColor && colorToCssString(color) !== colorToCssString(newColor)) ? newColor : null,
      extStyle,
    };
  }

  // 叠加渐变色到背景色中，并更新背景色相关属性值以及文本颜色
  // gradientColor       Light Mode 下的渐变混合色，用于叠加 Light Mode 背景色（ORIGINAL_BGCOLORATTR）
  // dmGradientColor     该渐变实际写进样式的混合色（可能已被转换成 Dark Mode 色，也可能因背景图等原因保持原色），
  //                     用于叠加 Dark Mode 背景色（BGCOLORATTR）。不传时退化为 gradientColor（如 rebuildAncestorExpando 场景）
  _updateBgWithGradient(gradientColor: ColorInstance, el: HTMLElement, className: string, cssKVList: CssKV[], isUpdate: boolean = false, needReset: boolean = false, dmGradientColor: ColorInstance | null = null): string {
    // 节点在 Dark Mode 下的真实底色取决于「实际写进样式的渐变色」，而不是 Light Mode 原色：
    // 用原色会把 BGCOLORATTR 记成浅色，导致后代算文字颜色时误判为「浅底上的深色字」而不做转换（黑底黑字）；
    // 反过来，若渐变实际没有被转换成深色（例如节点带背景图时渐变保持原样），用转换后的色又会误判成深底（浅底浅字）。
    const bgColorExist = getAttr(el, BGCOLORATTR) || config.defaultDarkBgColor;
    const newBgColor = mixColors([bgColorExist, dmGradientColor || gradientColor]);
    const newOriginalBgColor = mixColors([getAttr(el, ORIGINAL_BGCOLORATTR) || config.defaultLightBgColor, gradientColor]);
    this._inheritNodes(el).forEach(dom => {
      setAttr(dom, BGCOLORATTR, newBgColor);
      setAttr(dom, ORIGINAL_BGCOLORATTR, newOriginalBgColor);
    });
    const lastKV = cssKVList.slice(-1)[0];
    if (!lastKV) return ''; // 防御：cssKVList 为空时 lastKV 为 undefined，避免后续取 lastKV[0] 报错
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
      color = ColorParser(getAttr(el, ORIGINAL_COLORATTR) || config.defaultLightTextColor);
    }
    if (color === null) return '';

    const ret = this._adjustBrightness(color, el, {
      isBgColor: false,
      isTextShadow: false,
      isTextColor: true,
      isBorderColor: false,
      hasInlineColor,
    }, isUpdate, needReset);
    const newColor = mixColors([newBgColor, ret.newColor || color]);
    const newOriginColor = color;
    this._inheritNodes(el).forEach(dom => {
      setAttr(dom, COLORATTR, newColor);
      setAttr(dom, ORIGINAL_COLORATTR, newOriginColor);
    });
    if (ret.newColor) return cssUtils.genCss(className, cssUtils.genCssKV('color', colorToCssString(ret.newColor)));
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
    defaultDarkTextColor && (this._defaultDarkTextColorRgb = getRgbArray(defaultDarkTextColor) as RGBAArray);

    const defaultDarkBgColor = ColorParser(config.defaultDarkBgColor);
    if (defaultDarkBgColor) {
      this._defaultDarkBgColorRgb = getRgbArray(defaultDarkBgColor) as RGBAArray;
      this._defaultDarkBgColorHSL = getHslArray(defaultDarkBgColor);
    }

    this._defaultDarkTextColorBrightness = getColorPerceivedBrightness(this._defaultDarkTextColorRgb);
    this._defaultDarkBgColorBrightness = getColorPerceivedBrightness(this._defaultDarkBgColorRgb);
    this._defaultDarkBgColorHslBrightness = this._defaultDarkBgColorHSL[2];
    this._maxLimitOffsetBrightness = Math.max(this._defaultDarkTextColorBrightness - this._defaultDarkBgColorBrightness, 0);
  }

  // 重建祖先继承上下文（用于粘贴等增量场景）
  // 片段节点（nodes）已在 container 内，但其继承 expando（背景色/字体色上下文）尚未建立，直接 convert 会用默认底色算错颜色。
  // 做法：从 container 沿 parentElement 向上收集祖先链（到 config.container 为止，否则到根），
  // 以「祖先链 + nodes」为继承目标白名单，自顶向下对每个祖先跑「仅 expando」的 convert——
  // 继承沿祖先链逐级传递、最终到达 nodes，完全复用 convert 的继承逻辑，且不碰 container 子树里的其它旧节点。
  // 背景图补色（COMPLEMENTARY_BGIMAGECOLORATTR）与渐变标记（BGGRADIENT_MIXCOLORATTR）在 onlyExpando 下
  // 改用 DOM 包含关系直接继承，绕开 bgStack 的位置判断（见 convert）。
  rebuildAncestorExpando(nodes: HTMLElement[], container: HTMLElement) {
    if (!nodes || !nodes.length || !container) return;

    // 收集祖先链（含 container 自身），自顶向下排列
    const ancestors: HTMLElement[] = [];
    let cur: HTMLElement | null = container;
    while (cur) {
      ancestors.unshift(cur);
      if (cur === config.container) break; // 到达配置的容器即停止向上
      cur = cur.parentElement;
    }

    // 继承目标白名单 = 祖先链 + 片段节点；逐级 convert（仅做 expando 继承传递）
    const inheritTargets = [...ancestors, ...nodes];
    ancestors.forEach(ancestor => this.convert(ancestor, [], false, false, true, inheritTargets));
  }

  // 处理节点
  // onlyExpando 为 true 时：仅做 expando 继承传递（setAttr），跳过所有产出副作用
  //   （className/样式生成、bgStack/tnQueue 入栈、setStyle 清 important、插件钩子），用于 rebuildAncestorExpando 补算祖先继承。
  //   其中背景图补色（COMPLEMENTARY_BGIMAGECOLORATTR）与渐变继承/标记（BGGRADIENT_MIXCOLORATTR）原走 bgStack 延迟位置判断，
  //   onlyExpando 下改用 DOM 包含关系（_inheritNodes）直接继承，绕开 getBoundingClientRect。
  //   inheritTargets：继承传递的目标白名单（仅 onlyExpando 场景传入），限定 setAttr/removeAttr 只作用于其中的节点，避免遍历整子树。
  convert(el: HTMLElement, cssKVList: CssKV[] = [], isUpdate: boolean = false, needReset: boolean = false, onlyExpando: boolean = false, inheritTargets?: HTMLElement[]): string {
    this._inheritTargets = inheritTargets || null;

    if (!onlyExpando) {
      plugins.resetCss();
      let beforeConvertNodeHookName = PLUGIN_HOOK.BEFORE_CONVERT_NODE;
      if (isUpdate) {
        beforeConvertNodeHookName = PLUGIN_HOOK.BEFORE_CONVERT_NODE_BY_UPDATE_STYLE;
      } else if (needReset) {
        beforeConvertNodeHookName = PLUGIN_HOOK.BEFORE_CONVERT_NODE_BY_RESET;
      }
      plugins.emit(beforeConvertNodeHookName, el);
    }

    let css = ''; // css
    let bgCss = ''; // 文字底图css

    if (this.isDarkmode || isUpdate || needReset || onlyExpando) {
      const nodeName = el.nodeName;

      if (config.whitelist.tagName.indexOf(nodeName) > -1) return '';
      if (config.whitelist.attribute.some(attribute => el.hasAttribute(attribute))) return '';

      if (cssKVList.length === 0) { // 没有传入cssKVList就从内联样式中提取
        // cssText 读出来的颜色统一是rgba格式，除了用英文定义颜色（如：black、white）
        const cssText = getStyle(el, 'cssText');
        cssKVList = ((cssText && cssText.replace(/("[^;]*);([^;]*")|('[^;]*);([^;]*')/g, `$1$3${SEMICOLON_PLACEHOLDER}$2$4`).split(';')) || []).map(cssStr => { // 将cssStr转换为[key, value]，并清除各个元素的前后空白字符
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
              cssKVList.unshift(['background-color', colorToCssString(color)]);
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
              cssKVList.push(['color', colorToCssString(color)]);
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
      const elClassName = (isUpdate || needReset) ? getClass(el) : '';
      if (elClassName) {
        // 先提取dm className
        let matches = elClassName.match(DM_CLASSNAME_REGEXP);
        if (matches) {
          dmClassName = matches[0];
        }

        // 再提取dm bg className
        matches = elClassName.match(bgStack.classNameReg);
        if (matches) {
          dmBgClassName = matches[0];
        }
      }

      let cssKV = ''; // css键值对
      let noColor = needReset;
      noColor && cssUtils.watch('color', () => {
        noColor = false;
        cssUtils.unwatch('color');
      });
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
        let gradientMixColor: ColorInstance | null = null;
        let appliedGradientMixColor: ColorInstance | null = null; // 渐变实际写进样式的混合色

        // 将英文定义颜色转换为rgb格式
        value = parseColorName(value, isGradient); // 渐变需要处理透明

        if (COLOR_REGEXP.test(value)) {
          if (isGradient) {
            // 把原渐变色取出来
            // COLOR_REGEXP_GLOBAL 带 g 标志，lastIndex 有状态：exec 循环跑完（返回 null）会自动归零，
            // 但循环体或 replace 回调里抛异常（会被 _try 吞掉）、或 convert 重入时，lastIndex 会残留并静默污染后续节点，
            // 因此每次使用前显式重置
            COLOR_REGEXP_GLOBAL.lastIndex = 0;
            let matches = COLOR_REGEXP_GLOBAL.exec(value);
            while (matches) {
              gradientColors.push(matches[0]);
              matches = COLOR_REGEXP_GLOBAL.exec(value);
            }

            // 计算出一个mix颜色
            gradientMixColor = mixColors(gradientColors, 'mix');
          }
          let replaceIndex = 0;
          // 渐变的转换结果：所有 color stop 都是同一个 mix 色，只需要算第一个，后续直接复用
          // （逐个 stop 重算时，第一个 stop 会走继承传递写回 BGCOLORATTR，后续 stop 的底色基准就变了，
          //   同一个输入会算出不同的值，渐变被拆成多种颜色，达不到"渐变统一改成 mix 纯色"的目的）
          let gradientResultColor = '';
          value = value.replace(COLOR_REGEXP_GLOBAL, match => {
            let matchColor: ColorInstance | null = null;

            // 渐变色统一改成mix纯色
            if (isGradient) {
              matchColor = gradientMixColor;
              cssChange = true;

              if (gradientResultColor) { // 后续 stop 直接复用第一个 stop 的结果
                replaceIndex++;
                return gradientResultColor;
              }
            } else {
              matchColor = ColorParser(match);
            }

            if (matchColor && matchColor.alpha >= IGNORE_ALPHA) { // 忽略透明度低的色值 // TODO: 后面要干掉这个逻辑
              // 使用颜色处理算法
              const ret = this._adjustBrightness(matchColor, el, {
                isBgColor,
                isTextShadow,
                isTextColor: textColorIdx > -1,
                isBorderColor,
                hasInlineColor
              }, isUpdate, needReset);
              // 背景图区域是否保持 Light Mode 观感，判据与图片补色一致（同为 _isInvertGrayColor）：
              // 保持 LM 时整个区域（背景色/文字色/边框色）不转换；否则按 Dark Mode 正常转换。
              // ORIGINAL_BGCOLORATTR 要到下面的继承传递才写入，因此处理首个背景色色值时用当前色值兜底
              const keepLmForBgImage = hasInlineBackgroundImage
                && this._isInvertGrayColor(isBgColor ? matchColor : (getAttr(el, ORIGINAL_BGCOLORATTR) || config.defaultLightBgColor));
              const retColor = !keepLmForBgImage && ret.newColor;

              extStyle += ret.extStyle;

              // 对背景颜色和文字颜色做继承传递，用于文字亮度计算
              if ((isBgColor || textColorIdx >= 5) && replaceIndex === 0) { // 只处理color及之后的属性
                const newColor = mixColors([getAttr(el, BGCOLORATTR) || config.defaultDarkBgColor, retColor || matchColor]);
                const newOriginalColor = isBgColor ? mixColors([getAttr(el, ORIGINAL_BGCOLORATTR) || config.defaultLightBgColor, matchColor]) : matchColor;
                this._inheritNodes(el).forEach(dom => {
                  if (isBgColor) {
                    setAttr(dom, BGCOLORATTR, newColor);
                    setAttr(dom, ORIGINAL_BGCOLORATTR, newOriginalColor);
                  } else {
                    setAttr(dom, COLORATTR, newColor);
                    setAttr(dom, ORIGINAL_COLORATTR, newOriginalColor);
                  }
                });
              }

              retColor && (cssChange = true);
              replaceIndex++;
              const convertedColor = colorToCssString(retColor || matchColor);
              if (isGradient) gradientResultColor = convertedColor; // 记录，后续 stop 复用
              return convertedColor;
            }

            if (!isGradient) return match;
            const mixColorStr = gradientMixColor === null ? match : colorToCssString(gradientMixColor);
            if (isGradient) gradientResultColor = mixColorStr; // 记录，后续 stop 复用
            return mixColorStr;
          }).replace(/\s?!\s?important/ig, '');

          if (isGradient) {
            // 取替换后渐变（即实际写进样式的那个渐变）的颜色：
            // 渐变可能被转换成 Dark Mode 色，也可能因为该节点带了背景图（补色与当前色差异小于 JND）等原因保持 Light Mode 原色，
            // 只有实际生效的那个色才能代表节点在 Dark Mode 下的真实底色，后代的文字颜色要基于它来算
            //
            // 上面 replace 时同一个 mix 色只算了一次、所有 stop 复用其结果，因此这里各 stop 已经是同一个纯色，
            // 取第一个即可（对所有 stop 做 mixColors 的结果也等于第一个）
            COLOR_REGEXP_GLOBAL.lastIndex = 0; // 全局正则带 lastIndex 状态，使用前重置（同上）
            const appliedMatch = COLOR_REGEXP_GLOBAL.exec(value);
            appliedGradientMixColor = appliedMatch ? ColorParser(appliedMatch[0]) : gradientMixColor;
          }
        }

        extStyle && (cssKV += extStyle);

        if (!(el instanceof SVGElement)) { // 先不处理SVG
          // 背景图片、边框图片
          const isBackgroundAttr = /^background/.test(key);
          const isBorderImageAttr = /^(-webkit-)?border-image/.test(key);
          if ((isBackgroundAttr || isBorderImageAttr) && URL_REGEXP.test(value)) {
            cssChange = true;

            // 在背景图片下加一层底色，即图片补色：背景图算法无法处理，用这一层兜底保证底色正确
            // 默认用 Dark Mode 下该节点的底色（BGCOLORATTR 或 defaultDarkBgColor），否则背景图区域会补出一块浅色，
            // 和父容器转换后的深色底不一致（见 case「图片阴影bad case」）；
            // 但如果这个底色属于「黑白灰且需要取反」的一类（判据见 _isInvertGrayColor，
            // 与 adjustBackgroundBrightness 的取反分支一致），Dark Mode 色是取反后的结果，拿来补色会和背景图区域的观感不符，
            // 这种情况退回 Light Mode 原色（ORIGINAL_BGCOLORATTR 或 defaultLightBgColor）
            // background-image使用多层背景(注意background-position也要多加一层 https://www.w3.org/TR/css-backgrounds-3/#layering)
            // border-image不支持多层背景，需要添加background-image
            const lmImgBgColor = getAttr(el, ORIGINAL_BGCOLORATTR) || config.defaultLightBgColor;
            const dmImgBgColor = getAttr(el, BGCOLORATTR) || config.defaultDarkBgColor;
            const imgBgColor = this._isInvertGrayColor(lmImgBgColor) ? lmImgBgColor : dmImgBgColor;
            if (/^(.*?)url\(([^)]*)\)(.*)$/i.test(value)) {
              let tmpCssKvStr = '';

              // 标记为有背景图片
              !getAttr(el, BGIMAGEATTR) && this._inheritNodes(el).forEach(dom => {
                setAttr(dom, BGIMAGEATTR, true);
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
                if (!needReset) {
                  if (onlyExpando) {
                    // onlyExpando（rebuildAncestorExpando）：粘贴节点在背景图祖先的 DOM 内即视为落在背景图区域，
                    // 用 DOM 包含关系（_inheritNodes）直接继承补色，绕开 bgStack 的 getBoundingClientRect 位置判断
                    this._inheritNodes(el).forEach(dom => {
                      setAttr(dom, COMPLEMENTARY_BGIMAGECOLORATTR, imgBgColor);
                    });
                  } else if (dmBgClassName) { // 如果是文字底图，则直接加样式
                    bgCss += cssUtils.genCss(dmBgClassName, tmpCssKvStr);
                    this._inheritNodes(el).forEach(dom => {
                      setAttr(dom, COMPLEMENTARY_BGIMAGECOLORATTR, imgBgColor);
                    });
                  } else { // 否则背景图入栈
                    bgStack.push(el, tmpCssKvStr, bgStackItem => {
                      const els = [bgStackItem.elOld];
                      bgStackItem.el !== bgStackItem.elOld && els.push(bgStackItem.el);
                      els.forEach(bgEl => { // 新老节点都要处理
                        getChildrenAndIt(bgEl).forEach(dom => {
                          setAttr(dom, COMPLEMENTARY_BGIMAGECOLORATTR, imgBgColor);
                        });
                      });
                    });
                  }
                }
              } else {
                // border-image元素，如果当前元素没有背景颜色，补背景颜色
                if (imgBgColor && !hasInlineBackground && !needReset && !onlyExpando) {
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
              const textColor = getAttr(el, ORIGINAL_COLORATTR) || config.defaultLightTextColor;
              cssKV += cssUtils.genCssKV('color', textColor);
              this._inheritNodes(el).forEach(dom => {
                setAttr(dom, COLORATTR, textColor);
              });
            }
          }
        }

        if (cssChange || needReset) {
          !isUpdate && !needReset && !onlyExpando && IMPORTANT_REGEXP.test(oldValue) && setStyle(el, { [key]: oldValue.replace(IMPORTANT_REGEXP, '') }); // 清除inline style的!important
          if (isGradient) {
            if (onlyExpando) {
              // onlyExpando（rebuildAncestorExpando）：渐变背景的继承传递——复用 _updateBgWithGradient 的 expando 部分
              // （产出的 css 丢弃），并重建渐变标记 BGGRADIENT_MIXCOLORATTR，绕开 bgStack 位置判断
              if (gradientMixColor && /^background/.test(key) && !URL_REGEXP.test(value)) {
                this._updateBgWithGradient(gradientMixColor, el, '', cssKVList, isUpdate, needReset);
                setAttr(el, BGGRADIENT_MIXCOLORATTR, gradientMixColor);
              }
            } else if (!needReset) {
              if (dmBgClassName) { // 如果是文字底图，则直接加样式
                bgCss += cssUtils.genCss(dmBgClassName, cssUtils.genCssKV(key, value));
                if (gradientMixColor && /^background/.test(key) && !URL_REGEXP.test(value)) { // 是无背景图的渐变，需要重新计算背景色
                  css += this._updateBgWithGradient(gradientMixColor, el, dmBgClassName, cssKVList, isUpdate, needReset, appliedGradientMixColor);
                }
              } else { // 否则渐变入栈
                bgStack.push(el, cssUtils.genCssKV(key, value), item => {
                  if (gradientMixColor && /^background/.test(key) && !URL_REGEXP.test(value)) { // 是无背景图的渐变，需要重新计算背景色
                    css += this._updateBgWithGradient(gradientMixColor, el, item.className, cssKVList, isUpdate, needReset, appliedGradientMixColor);
                    setAttr(el, BGGRADIENT_MIXCOLORATTR, gradientMixColor);
                  }
                });
              }
            }
          } else {
            if (key === 'color') {
              noColor = false;
              cssUtils.unwatch('color');
            }
            cssKV += cssUtils.genCssKV(key, (!cssChange && needReset) ? getStyle(el, key) : value);
          }
        }
      }));

      if (noColor) {
        cssKV += cssUtils.genCssKV('color', getStyle(el, 'color') || getAttr(el, COLORATTR) || config.defaultDarkTextColor);
        cssUtils.unwatch('color');
      }

      if (cssKV && !onlyExpando) { // 有处理过或者是背景图片就加class以及css
        if (!dmClassName) {
          dmClassName = `${CLASS_PREFIX}${this._idx++}`;
          addClass(el, dmClassName);
        }
        css += (cssKV ? cssUtils.genCss(dmClassName, cssKV) : '');
      }

      css += bgCss; // 追加文字底图样式，要在添加cssKV之后添加，避免被覆盖

      if (!isUpdate && hasTextNode(el) && !needReset && !onlyExpando) { // 如果节点里有文本，要判断是否在背景图里
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

    if (!onlyExpando) {
      let afterConvertNodeHookName = PLUGIN_HOOK.AFTER_CONVERT_NODE;
      if (isUpdate) {
        afterConvertNodeHookName = PLUGIN_HOOK.AFTER_CONVERT_NODE_BY_UPDATE_STYLE;
      } else if (needReset) {
        afterConvertNodeHookName = PLUGIN_HOOK.AFTER_CONVERT_NODE_BY_RESET;
      }
      plugins.emit(afterConvertNodeHookName, el);
    }

    return css;
  }

  // 调整背景明度
  adjustBackgroundBrightness(bgColor: ColorParam, bgColorExist: ColorParam): ColorInstance | null {
    const bgColorInstance = ColorParser(bgColor);
    if (bgColorInstance === null) return null;

    const mixColor = mixColors([bgColorExist, bgColorInstance]);
    if (mixColor === null) return null;

    const mixColorRgb = getRgbArray(mixColor) as RGBAArray;
    const mixColorHsl = getHslArray(mixColor);
    const mixColorPerceivedBrightness = getColorPerceivedBrightness(mixColorRgb);
    let newColor = mixColor;
    if (this._isInvertGrayColor(mixColor)) {
      // 饱和度为0（黑白灰色），亮度大于HIGH_BLACKWHITE_HSL_BRIGHTNESS或感知亮度大于WHITE_LIKE_COLOR_BRIGHTNESS（白色）时，做亮度取反处理
      newColor = colorFromHsl(0, 0, Math.min(100, 100 + this._defaultDarkBgColorHslBrightness - mixColorHsl[2]), mixColorHsl[3]);
    } else if (mixColorPerceivedBrightness > MAX_LIMIT_BGCOLOR_BRIGHTNESS) {
      // 感知亮度大于MAX_LIMIT_BGCOLOR_BRIGHTNESS，将感知亮度设为MAX_LIMIT_BGCOLOR_BRIGHTNESS
      newColor = adjustBrightnessTo(MAX_LIMIT_BGCOLOR_BRIGHTNESS, mixColorRgb);
    } else if (mixColorHsl[2] < LOW_BLACKWHITE_HSL_BRIGHTNESS) {
      // 亮度小于LOW_BLACKWHITE_HSL_BRIGHTNESS，将亮度设为LOW_BLACKWHITE_HSL_BRIGHTNESS，适当提高亮度
      mixColorHsl[2] = LOW_BLACKWHITE_HSL_BRIGHTNESS;
      newColor = colorFromHsl(mixColorHsl[0], mixColorHsl[1], mixColorHsl[2], mixColorHsl[3]);
    }
    return getFrontColor(newColor, bgColorExist, bgColorInstance.alpha === null ? 1 : bgColorInstance.alpha);
  }

  // 调整文本明度
  adjustTextBrightness(textColor: ColorParam, bgColor: ColorParam, opt?: AdjustTextBrightnessOptions): ColorInstance | null {
    const textColorInstance = ColorParser(textColor);
    const bgColorInstance = ColorParser(bgColor);
    if (textColorInstance === null || bgColorInstance === null) return null;

    const textColorAlpha = opt?.alpha || (textColorInstance.alpha === null ? 1 : textColorInstance.alpha);
    const textColorMix = opt ? textColorInstance : mixColors([bgColorInstance, textColorInstance]);
    if (textColorMix === null) return null;

    const textColorMixRgb = getRgbArray(textColorMix) as RGBAArray;
    const textColorMixHsl = getHslArray(textColorMix);
    const textPerceivedBrightness = getColorPerceivedBrightness(textColorMixRgb);
    const bgColorPerceivedBrightness = opt?.bgColorPerceivedBrightness || getColorPerceivedBrightness(getRgbArray(bgColorInstance) as RGBAArray);
    const offsetPerceivedBrightness = Math.abs(bgColorPerceivedBrightness - textPerceivedBrightness);

    // 用户设置为高亮字体颜色（接近白色亮度），不处理，保持高亮
    if (textPerceivedBrightness >= WHITE_LIKE_COLOR_BRIGHTNESS) return opt ? getFrontColor(textColorInstance, bgColorInstance, textColorAlpha) : textColorInstance;

    if (offsetPerceivedBrightness > this._maxLimitOffsetBrightness && bgColorPerceivedBrightness <= this._defaultDarkBgColorBrightness + 2) {
      return getFrontColor(
        adjustBrightnessTo(this._maxLimitOffsetBrightness + bgColorPerceivedBrightness, textColorMixRgb),
        bgColorInstance,
        textColorAlpha
      );
    }

    // 如果感知亮度差大于阈值，无需调整
    if (offsetPerceivedBrightness >= MIN_LIMIT_OFFSET_BRIGHTNESS) return opt ? getFrontColor(textColorInstance, bgColorInstance, textColorAlpha) : textColorInstance;

    if (bgColorPerceivedBrightness >= HIGH_BGCOLOR_BRIGHTNESS) { // 亮背景，调暗字体
      if (textColorMixHsl[2] > 90 - HIGH_BLACKWHITE_HSL_BRIGHTNESS) { // 优先调字体的亮度已带到降低感知亮度的目的
        textColorMixHsl[2] = 90 - textColorMixHsl[2];
        return this.adjustTextBrightness(colorFromHsl(textColorMixHsl[0], textColorMixHsl[1], textColorMixHsl[2], textColorMixHsl[3]), bgColorInstance, {
          alpha: textColorAlpha,
          bgColorPerceivedBrightness,
        });
      }
      return getFrontColor(
        adjustBrightnessTo(Math.min(this._maxLimitOffsetBrightness, bgColorPerceivedBrightness - MIN_LIMIT_OFFSET_BRIGHTNESS), textColorMixRgb),
        bgColorInstance,
        textColorAlpha
      );
    } else { // 暗背景，调亮字体
      if (textColorMixHsl[2] <= HIGH_BLACKWHITE_HSL_BRIGHTNESS) { // 优先调字体的亮度已带到提高感知亮度的目的
        textColorMixHsl[2] = 90 - textColorMixHsl[2];
        return this.adjustTextBrightness(colorFromHsl(textColorMixHsl[0], textColorMixHsl[1], textColorMixHsl[2], textColorMixHsl[3]), bgColorInstance, {
          alpha: textColorAlpha,
          bgColorPerceivedBrightness,
        });
      }
      return getFrontColor(
        adjustBrightnessTo(Math.min(this._maxLimitOffsetBrightness, bgColorPerceivedBrightness + MIN_LIMIT_OFFSET_BRIGHTNESS), textColorMixRgb),
        bgColorInstance,
        textColorAlpha
      );
    }
  }

  // 获取两个颜色的对比度
  getContrast(colorStr1: ColorParam, colorStr2: ColorParam): number {
    const color1 = ColorParser(colorStr1);
    const color2 = ColorParser(colorStr2);
    return (color1 && color2) ? getContrast(color1, color2) : 0;
  }

  // 重置
  reset() {
    this._idx = 0;
    this._defaultDarkTextColorRgb = [0, 0, 0, 0];
    this._defaultDarkBgColorRgb = [0, 0, 0, 0];
    this._defaultDarkBgColorHSL = [];
    this._defaultDarkTextColorBrightness = 0;
    this._defaultDarkBgColorBrightness = 0;
    this._defaultDarkBgColorHslBrightness = 0;
    this._maxLimitOffsetBrightness = 0;

    this.isDarkmode = false;
  }
};
