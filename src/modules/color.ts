/**
 * @name 颜色操作相关API
 *
 * @function ColorParser 实例化Color对象，传参非法时返回null
 * @param {ColorParam} color css色值
 * @return {Color | null} 实例化结果
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
 * @return {Color | null} 混合结果
 *
 * @function getFrontColor 根据混合色、背景色和前景色透明度，反推前景色rgba，目前混合模式只支持'normal'
 * @param {ColorParam}                retColor 混合色
 * @param {ColorParam | ColorParam[]} bgColor  背景色
 * @param {number}                    alpha    前景色透明度
 * @return {Color} 前景色
 *
 * @function getColorPerceivedBrightness 计算感知亮度
 * @param {RGBAArray} rgba 要计算的颜色rgba数组，如：[255, 0, 0, 1]
 * @return {number} 感知亮度
 *
 * @function adjustBrightnessTo 调整为指定感知亮度
 * @param {number}    target 指定的感知亮度值
 * @param {RGBAArray} rgba   要调整的颜色rgba数组，如：[255, 0, 0, 1]
 * @return {Color} 调整后的颜色
 *
 */

import * as _ColorName from 'color-name';
import * as Color from 'color';
import * as ColorBlend from 'color-blend';

const ColorName = {
  ..._ColorName,

  // 补上这些colorName
  windowtext: [0, 0, 0], // windows特有的colorName
  transparent: [255, 255, 255, 0], // 透明，暂定用白色透明度0来表示
};

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
export type ColorParam = string | RGBA | Color | null;

// 常量
import {
  IMPORTANT_REGEXP,
  COLOR_REGEXP
} from './constant';

const COLOR_NAME_REG = new RegExp(Object.keys(ColorName).map(colorName => `\\b${colorName}\\b`).join('|'), 'ig'); // 生成正则表达式来匹配这些colorName

// Color对象 => ColorBlend对象
const color2ColorBlend = (color: Color): ColorBlendRGBA => {
  const obj = color.object() as RGBA;
  obj.a = obj.alpha || 1;
  delete obj.alpha;
  return obj as ColorBlendRGBA;
};

// ColorBlend对象 => Color对象
const colorBlend2Color = (colorBlend: ColorBlendRGBA): Color => {
  (colorBlend as RGBA).alpha = colorBlend.a;
  delete (colorBlend as RGBA).a;
  return ColorParser(colorBlend) as Color;
};

// 实例化Color对象，传参非法时返回null
export const ColorParser = (color: ColorParam): Color | null => {
  if (!color) return null;
  let res = null;
  try {
    res = color instanceof Color ? color : Color(color);
  } catch (e) {
    console.log(`ignore the invalid color: \`${color}\``);
  }
  return res;
};

// 处理颜色，包括清除!important和转换英文定义颜色
export const parseColorName = (color: string, supportTransparent: boolean = false): string => color.replace(IMPORTANT_REGEXP, '').replace(COLOR_NAME_REG, match => {
  if (!supportTransparent && match === 'transparent') return match; // 如果不支持转换transparent，直接返回transparent

  const color = ColorName[match.toLowerCase() as keyof typeof ColorName];
  return `${color.length > 3 ? 'rgba' : 'rgb'}(${color.toString()})`;
});

// 处理-webkit-fill-color和-webkit-text-stroke-color，返回处理后的色值，无则返回空字符串
export const parseWebkitFillColorAndStrokeColor = (color: string): string => {
  const newValue = parseColorName(color);
  return COLOR_REGEXP.test(newValue) ? newValue : '';
};

// 计算混合颜色
export const mixColors = (colors: ColorParam[], type: keyof typeof ColorBlend | 'mix' = 'normal'): Color | null => {
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
      color1 = (type === 'mix' ? color1.mix(color2, color2.alpha()) : colorBlend2Color(ColorBlend[type](color2ColorBlend(color1), color2ColorBlend(color2))));
    } // 如果当前色值合法，混入色值非法，无需处理

    if (filterColors.length === 0) break;
    color2 = ColorParser(filterColors.shift() || null);
  }

  return color1 || null;
};

// 根据混合色、背景色和前景色透明度，反推前景色rgba，目前混合模式只支持'normal'
export const getFrontColor = (retColor: ColorParam, bgColor: ColorParam | ColorParam[], alpha: number): Color | null => {
  const retColorObj = ColorParser(retColor);
  if (!retColorObj) return null;
  const retColorRgb = retColorObj.rgb().array().slice(0, 3);

  const bgColorObj = Object.prototype.toString.call(bgColor) === '[object Array]' ? mixColors(bgColor as ColorParam[]) : ColorParser(bgColor as ColorParam);
  if (!bgColorObj) return null;
  const bgColorRgb = bgColorObj.rgb().array().slice(0, 3);
  const bgColorAlpha = bgColorObj.alpha();

  return ColorParser(`rgba(${retColorRgb.map((r, idx) => Math.round(r + (bgColorAlpha * (1 - alpha) * (r - bgColorRgb[idx])) / alpha)).join(', ')}, ${alpha})`);
};

// 计算感知亮度
export const getColorPerceivedBrightness = (rgba: RGBAArray): number => (rgba[0] * 299 + rgba[1] * 587 + rgba[2] * 114) / 1000;

// 调整为指定感知亮度
export const adjustBrightnessTo = (target: number, rgba: RGBAArray): Color => {
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
  return Color.rgb(newTextR, newTextG, newTextB, rgba[3] || 1);
};
