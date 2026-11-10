/**
 * @name 颜色操作相关API
 *
 * @function ColorParser 实例化Color对象，传参非法时返回null
 * @param {ColorParam} color css色值
 * @return {ColorInstance | null} 实例化结果
 *
 * @function parseColorName 处理颜色，包括清除!important和转换英文定义颜色
 * @param {string}  color                      css色值
 * @param {boolean} [supportTransparent=false] 是否支持转换transparent
 * @return {string} 处理后的rgb(a)格式css色值
 *
 * @function parseWebkitFillColorAndStrokeColor 处理-webkit-fill-color和-webkit-text-stroke-color，返回处理后的色值，无则返回空字符串
 * @param {string} color css色值
 * @return {string} 处理后的rgb(a)格式css色值，无则返回空字符串
 *
 * @function mixColors 计算混合颜色
 * @param {ColorParam[]} colors          用于计算的颜色数组
 * @param {string}       [type='normal'] 使用的混合颜色算法，支持 mix | normal | multiply | screen | overlay | darken | lighten | colorDodge | colorBurn | hardLight | softLight | difference | exclusion | hue | saturation | color | luminosity
 * @return {ColorInstance | null} 混合结果
 *
 * @function getFrontColor 根据混合色、背景色和前景色透明度，反推前景色rgba，目前混合模式只支持'normal'
 * @param {ColorParam}                retColor 混合色，透明度恒为1
 * @param {ColorParam | ColorParam[]} bgColor  背景色，透明度恒为1
 * @param {number}                    alpha    前景色透明度
 * @return {ColorInstance} 前景色，反推值超出[0, 255]时返回混合色
 *
 * @function getColorPerceivedBrightness 计算感知亮度
 * @param {RGBAArray} rgba 要计算的颜色rgba数组，如：[255, 0, 0, 1]
 * @return {number} 感知亮度
 *
 * @function adjustBrightnessTo 调整为指定感知亮度
 * @param {number}    target 指定的感知亮度值
 * @param {RGBAArray} rgba   要调整的颜色rgba数组，如：[255, 0, 0, 1]
 * @return {ColorInstance} 调整后的颜色
 *
 */

import ColorName from 'color-name';
import * as ColorBlend from 'color-blend';
import ColorJS from 'colorjs.io'; // 统一使用 colorjs.io 做颜色的解析/转换，不再依赖 color 库

type RGBA = {
  r: number;
  g: number;
  b: number;
  a?: number;
  alpha?: number;
};
type ColorBlendRGBA = Required<Omit<RGBA, 'alpha'>>;
export type RGBAArray = [
  ColorBlendRGBA['r'],
  ColorBlendRGBA['g'],
  ColorBlendRGBA['b'],
  ColorBlendRGBA['a'],
];
export type ColorInstance = ColorJS;
export type ColorParam = string | RGBA | ColorInstance | null;

// 常量
import {
  IMPORTANT_REGEXP,
  COLOR_REGEXP
} from './constant';

const COLOR_NAME = {
  ...ColorName,

  // 补上这些colorName
  windowtext: [0, 0, 0], // windows特有的colorName
  transparent: [255, 255, 255, 0], // 透明，暂定用白色透明度0来表示
};
const COLOR_NAME_REG = new RegExp(Object.keys(COLOR_NAME).map(colorName => `\\b${colorName}\\b`).join('|'), 'ig'); // 生成正则表达式来匹配这些colorName

// Color对象 => ColorBlend对象
const color2ColorBlend = (color: ColorInstance): ColorBlendRGBA => {
  // ColorInstance 可能是 hsl/lch 等非srgb空间，直接取通道拿不到 r/g/b，
  // ColorBlend 会据此算出黑色，因此统一先转到 srgb 空间再取（会保留透明度）
  return getRgbObject(color);
};

// ColorBlend对象 => Color对象
const colorBlend2Color = (colorBlend: ColorBlendRGBA): ColorInstance => {
  (colorBlend as RGBA).alpha = colorBlend.a;
  delete (colorBlend as RGBA).a;
  return ColorParser(colorBlend) as ColorInstance;
};

// 实例化Color对象，传参非法时返回null
// colorjs.io 原生支持 rgb/rgba/hex/hsl/lch/oklch/lab/color() 等全部 CSS 色值，无需再用其它库兜底
export const ColorParser = (color: ColorParam): ColorInstance | null => {
  if (!color) return null;
  try {
    if (color instanceof ColorJS) return color;
    if (typeof color === 'string') return new ColorJS(color);
    // {r,g,b,a} 形式的入参是 0-255 的通道值，colorjs.io 的 srgb 空间用 0-1
    const { r = 0, g = 0, b = 0, a, alpha } = color as RGBA;
    return new ColorJS('srgb', [r / 255, g / 255, b / 255], a === undefined ? (alpha === undefined ? 1 : alpha) : a);
  } catch (err) {
    console.log(`ignore the invalid color: \`${color}\`, err: ${err}`);
    return null;
  }
};

// 取指定空间的通道值，colorjs.io 的 to() 在无法转换时返回 null
const getCoords = (color: ColorInstance, space: string): number[] => (color.to(space)?.coords || [0, 0, 0]) as number[];

// 取 srgb 通道值（0-255），返回 [r, g, b, a]
export const getRgbArray = (color: ColorInstance): RGBAArray => {
  const [r, g, b] = getCoords(color, 'srgb');

  return [r * 255, g * 255, b * 255, color.alpha === null ? 1 : color.alpha];
};

// 取 hsl 通道值，返回 [h(0-360), s(0-100), l(0-100), a]
export const getHslArray = (color: ColorInstance): RGBAArray => {
  const [h, s, l] = getCoords(color, 'hsl');

  return [h, s, l, color.alpha === null ? 1 : color.alpha];
};

// 取 srgb 通道对象（0-255），供 color-blend 使用
export const getRgbObject = (color: ColorInstance): ColorBlendRGBA => {
  const [r, g, b, a] = getRgbArray(color);

  return { r, g, b, a };
};

// 由 rgb 通道值（0-255）构造Color对象
export const colorFromRgb = (r: number, g: number, b: number, alpha = 1): ColorInstance => (
  new ColorJS('srgb', [r / 255, g / 255, b / 255], alpha)
);

// 由 hsl 通道值（h: 0-360，s/l: 0-100）构造Color对象
// 注意 colorjs.io 的 hsl 空间通道值与 to('hsl').coords 同量纲（h: 0-360，s/l: 0-100），只有 srgb 是 0-1
export const colorFromHsl = (h: number, s: number, l: number, alpha = 1): ColorInstance => (
  new ColorJS('hsl', [h, s, l], alpha)
);

// 输出 css 色值，统一成 rgb()/rgba() 形式（避免输出 hsl/lab 等老 webview 兼容风险更高的写法）
export const colorToCssString = (color: ColorInstance): string => {
  const [r, g, b, a] = getRgbArray(color);
  // 通道取整；透明度保留 3 位小数（很小的透明度如 0.004 不能被舍成 0）
  const roundAlpha = (value: number) => Math.round(value * 1000) / 1000;

  return a >= 1
    ? `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`
    : `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${roundAlpha(a)})`;
};

// 输出 hex 色值：不透明（alpha = 1）时返回 6 位 #RRGGBB，带透明度时返回 8 位 #RRGGBBAA
// 旧实现的 .hex() 恒定忽略透明度（只出 6 位），这里把透明度也支持上，便于后续拓展到带透明度的场景；
// 当前使用场景（config 里的默认色）透明度恒为 1，因此实际输出与旧实现一致
export const colorToHex = (color: ColorInstance): string => {
  const [r, g, b, a] = getRgbArray(color);
  const hex = (value: number) => Math.round(value).toString(16).padStart(2, '0');
  const rgbHex = `${hex(r)}${hex(g)}${hex(b)}`;

  return `#${a >= 1 ? rgbHex : `${rgbHex}${hex(a * 255)}`}`.toUpperCase();
};

// 按 sass mix 算法混合两个颜色（旧实现里 color 库的 .mix() 就是 port 自 libsass，
// 直接线性插值结果不同），weight 为后一个颜色的权重
export const mixSassLike = (color1: ColorInstance, color2: ColorInstance, weight: number): ColorInstance => {
  const rgb1 = getRgbArray(color1);
  const rgb2 = getRgbArray(color2);
  const w = 2 * weight - 1;
  const a = rgb2[3] - rgb1[3];
  const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
  const w2 = 1 - w1;

  return colorFromRgb(
    w1 * rgb2[0] + w2 * rgb1[0],
    w1 * rgb2[1] + w2 * rgb1[1],
    w1 * rgb2[2] + w2 * rgb1[2],
    rgb2[3] * weight + rgb1[3] * (1 - weight),
  );
};

// WCAG 相对亮度
const getRelativeLuminance = (rgba: RGBAArray): number => {
  const channel = (value: number) => {
    const v = value / 255;

    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };

  return 0.2126 * channel(rgba[0]) + 0.7152 * channel(rgba[1]) + 0.0722 * channel(rgba[2]);
};

// 计算两个颜色的对比度（WCAG）
export const getContrast = (color1: ColorInstance, color2: ColorInstance): number => {
  const luminance1 = getRelativeLuminance(getRgbArray(color1));
  const luminance2 = getRelativeLuminance(getRgbArray(color2));

  return (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
};

// 处理颜色，包括清除!important和转换英文定义颜色
export const parseColorName = (color: string, supportTransparent: boolean = false): string => color.replace(IMPORTANT_REGEXP, '').replace(COLOR_NAME_REG, match => {
  if (!supportTransparent && match === 'transparent') return match; // 如果不支持转换transparent，直接返回transparent

  const color = COLOR_NAME[match.toLowerCase() as keyof typeof COLOR_NAME];
  return `${color.length > 3 ? 'rgba' : 'rgb'}(${color.toString()})`;
});

// 处理-webkit-fill-color和-webkit-text-stroke-color，返回处理后的色值，无则返回空字符串
export const parseWebkitFillColorAndStrokeColor = (color: string): string => {
  const newValue = parseColorName(color);
  return COLOR_REGEXP.test(newValue) ? newValue : '';
};

// 计算混合颜色
export const mixColors = (colors: ColorParam[], type: keyof typeof ColorBlend | 'mix' = 'normal'): ColorInstance | null => {
  if (Object.prototype.toString.call(colors) !== '[object Array]') return null;

  const filterColors = colors.filter(color => !!color);
  if (filterColors.length < 1) return null;
  if (filterColors.length === 1) return ColorParser(filterColors[0]);

  let color1 = ColorParser(filterColors.shift() || null);
  let color2 = ColorParser(filterColors.shift() || null);
  while (color2) {
    if (!color1 && color2) { // 如果当前色值非法，混入色值合法，则直接使用混入色值
      color1 = color2;
    } else if (!color1 && !color2) { // 如果两个色值都非法，则使用下一批色值
      if (filterColors.length === 0) break;
      color1 = ColorParser(filterColors.shift() || null);
    } else if (color1 && color2) { // 如果两个色值都合法，执行mix
      color1 = (type === 'mix' ? mixSassLike(color1, color2, color2.alpha === null ? 1 : color2.alpha) : colorBlend2Color(ColorBlend[type](color2ColorBlend(color1), color2ColorBlend(color2))));
    } // 如果当前色值合法，混入色值非法，无需处理

    if (filterColors.length === 0) break;
    color2 = ColorParser(filterColors.shift() || null);
  }

  return color1 || null;
};

// 根据混合色、背景色和前景色透明度，反推前景色rgba，目前混合模式只支持'normal'
// 混合色与背景色的透明度恒为1，只有入参alpha（前景色自身透明度）可能小于1：
// 混合色是normal混合（取反/限幅）后的结果，背景色来自BGCOLORATTR或defaultDarkBgColor，
// 内部只通过mixColors([不透明底, ...])更新，两者normal混合后都是不透明色
export const getFrontColor = (retColor: ColorParam, bgColor: ColorParam | ColorParam[], alpha: number): ColorInstance | null => {
  const retColorObj = ColorParser(retColor);
  if (!retColorObj) return null;
  const retColorRgb = getRgbArray(retColorObj).slice(0, 3);

  const bgColorObj = Object.prototype.toString.call(bgColor) === '[object Array]' ? mixColors(bgColor as ColorParam[]) : ColorParser(bgColor as ColorParam);
  if (!bgColorObj) return null;
  const bgColorRgb = getRgbArray(bgColorObj).slice(0, 3);

  const frontColorRgb = retColorRgb.map((r, idx) => Math.round(bgColorRgb[idx] + (r - bgColorRgb[idx]) / alpha));

  // 反推值超出[0, 255]：说明在这个前景色透明度下，前景色无论取什么都合成不出混合色（目标色不可达，
  // 常见于alpha < 0.5的半透明前景，此时混合色的可达上限bg + 255 * alpha低于目标色）
  if (frontColorRgb.some(rgb => rgb < 0 || rgb > 255)) return retColorObj; // 无法通过反推得到正确的前景色，返回混合色

  return ColorParser(`rgba(${frontColorRgb.join(', ')}, ${alpha})`);
};

// 计算感知亮度
export const getColorPerceivedBrightness = (rgba: RGBAArray): number => (rgba[0] * 299 + rgba[1] * 587 + rgba[2] * 114) / 1000;

// 调整为指定感知亮度
export const adjustBrightnessTo = (target: number, rgba: RGBAArray): ColorInstance => {
  target = Math.max(target, 0); // 防御：target 为负会反算出非法颜色（感知亮度最小为0）
  const relativeBrightnessRatio = target / (getColorPerceivedBrightness(rgba) || 1);
  let newTextR = Math.min(255, rgba[0] * relativeBrightnessRatio);
  let newTextG = Math.min(255, rgba[1] * relativeBrightnessRatio);
  let newTextB = Math.min(255, rgba[2] * relativeBrightnessRatio);
  if (newTextG === 0 || newTextR === 255 || newTextB === 255) {
    newTextG = (target * 1000 - newTextR * 299 - newTextB * 114) / 587;
  } else if (newTextR === 0) {
    newTextR = (target * 1000 - newTextG * 587 - newTextB * 114) / 299;
  } else if (newTextB === 0 || newTextG === 255) {
    newTextB = (target * 1000 - newTextR * 299 - newTextG * 587) / 114;
  }
  return colorFromRgb(newTextR, newTextG, newTextB, rgba[3] || 1);
};
