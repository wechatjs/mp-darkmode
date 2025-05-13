/**
 * @name 颜色操作相关API
 *
 * @function ColorParser 实例化Color对象，传参非法时返回null
 * @param {string} color css色值
 * @return {Color Object | null} 实例化结果
 *
 * @function parseColorName 处理颜色，包括清除!important和转换英文定义颜色
 * @param {string}  color              css色值
 * @param {boolean} supportTransparent 是否支持转换transparent
 * @return {string} 处理后的rgb(a)格式css色值
 *
 * @function parseWebkitFillColorAndStrokeColor 处理-webkit-fill-color和-webkit-text-stroke-color，返回处理后的色值，无则返回空字符串
 * @param {string} color css色值
 * @return {string} 处理后的rgb(a)格式css色值，无则返回空字符串
 *
 * @function mixColors 计算混合颜色
 * @param {string} colors 用于计算的颜色数组
 * @param {string} type 使用的混合颜色算法，支持 mix(默认) | normal | multiply | screen | overlay | darken | lighten | colorDodge | colorBurn | hardLight | softLight | difference | exclusion | hue | saturation | color | luminosity
 * @return {Color Object | null} 混合结果
 *
 * @function getColorPerceivedBrightness 计算感知亮度
 * @param {RGB Array} rgb 要计算的颜色rgb数组，如：[255, 0, 0]
 * @return {number} 感知亮度
 *
 * @function adjustBrightnessTo 调整为指定感知亮度
 * @param {number}    target 指定的感知亮度值
 * @param {RGB Array} rgb    要调整的颜色rgb数组，如：[255, 0, 0]
 * @return {Color Object} 调整后的颜色
 *
 */

import Color from 'color';
import ColorName from 'color-name';
ColorName.windowtext = [0, 0, 0]; // 补上这个colorName
ColorName.transparent = [255, 255, 255, 0]; // 支持透明，暂定用白色透明度0来表示
import * as ColorBlend from 'color-blend';

// 常量
import {
  IMPORTANT_REGEXP,
  COLOR_REGEXP
} from './constant';

const COLOR_NAME_REG = new RegExp(Object.keys(ColorName).map(colorName => `\\b${colorName}\\b`).join('|'), 'ig'); // 生成正则表达式来匹配这些colorName

// Color对象 => ColorBlend对象
const color2ColorBlend = color => {
  const obj = color.object();
  obj.a = obj.alpha || 1;
  delete obj.alpha;
  return obj;
};

// ColorBlend对象 => Color对象
const colorBlend2Color = colorBlend => {
  colorBlend.alpha = colorBlend.a;
  delete colorBlend.a;
  return ColorParser(colorBlend);
};

// 实例化Color对象，传参非法时返回null
export const ColorParser = color => {
  let res = null;
  try {
    res = color instanceof Color ? color : Color(color);
  } catch (e) {
    console.log(`ignore the invalid color: \`${color}\``);
  }
  return res;
};

// 处理颜色，包括清除!important和转换英文定义颜色
export const parseColorName = (color, supportTransparent) => color.replace(IMPORTANT_REGEXP, '').replace(COLOR_NAME_REG, match => {
  if (!supportTransparent && match === 'transparent') return match; // 如果不支持转换transparent，直接返回transparent

  const color = ColorName[match.toLowerCase()];
  return `${color.length > 3 ? 'rgba' : 'rgb'}(${color.toString()})`;
});

// 处理-webkit-fill-color和-webkit-text-stroke-color，返回处理后的色值，无则返回空字符串
export const parseWebkitFillColorAndStrokeColor = color => {
  const newValue = parseColorName(color);
  return COLOR_REGEXP.test(newValue) ? newValue : '';
};

// 计算混合颜色
export const mixColors = (colors, type = 'mix') => {
  if (Object.prototype.toString.call(colors) !== '[object Array]' || colors.length < 1) return null;
  if (colors.length === 1) return colors[0];

  let color1 = ColorParser(colors.shift());
  let color2 = ColorParser(colors.shift());
  while (color2) {
    if (!color1 && color2) { // 如果当前色值非法，混入色值合法，则直接使用混入色值
      color1 = color2;
    } else if (!color1 && !color2) { // 如果两个色值都非法，则使用下一批色值
      if (colors.length === 0) break;
      color1 = ColorParser(colors.shift());
    } else if (color1 && color2) { // 如果两个色值都合法，执行mix
      color1 = (type === 'mix'
        ? color1.mix(color2, color2.alpha())
        : colorBlend2Color(ColorBlend[type](color2ColorBlend(color1), color2ColorBlend(color2))));
    } // 如果当前色值合法，混入色值非法，无需处理

    if (colors.length === 0) break;
    color2 = ColorParser(colors.shift());
  }

  return color1 || null;
};

// 计算感知亮度
export const getColorPerceivedBrightness = rgb => (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;

// 调整为指定感知亮度
export const adjustBrightnessTo = (target, rgb) => {
  const relativeBrightnessRatio = target / getColorPerceivedBrightness(rgb);
  let newTextR = Math.min(255, rgb[0] * relativeBrightnessRatio);
  let newTextG = Math.min(255, rgb[1] * relativeBrightnessRatio);
  let newTextB = Math.min(255, rgb[2] * relativeBrightnessRatio);
  if (newTextG === 0 || newTextR === 255 || newTextB === 255) {
    newTextG = (target * 1000 - newTextR * 299 - newTextB * 114) / 587;
  } else if (newTextR === 0) {
    newTextR = (target * 1000 - newTextG * 587 - newTextB * 114) / 299;
  } else if (newTextB === 0 || newTextG === 255) {
    newTextB = (target * 1000 - newTextR * 299 - newTextG * 587) / 114;
  }
  return Color.rgb(newTextR, newTextG, newTextB);
};
