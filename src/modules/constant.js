/**
 * @name 常量
 *
 */

export const MEDIA_QUERY = '(prefers-color-scheme: dark)'; // Dark Mode的CSS媒体查询

export const CLASS_PREFIX = 'js_darkmode__'; // Dark Mode class前缀

export const HTML_CLASS = 'data_color_scheme_dark'; // 强制设置暗黑模式时给html加的class

const RANDOM = `${new Date() * 1}${Math.round(Math.random() * 10)}`; // 生成个随机数，格式为时间戳+随机数
export const COLORATTR = `data-darkmode-color-${RANDOM}`;
export const BGCOLORATTR = `data-darkmode-bgcolor-${RANDOM}`;
export const ORIGINAL_COLORATTR = `data-darkmode-original-color-${RANDOM}`;
export const ORIGINAL_BGCOLORATTR = `data-darkmode-original-bgcolor-${RANDOM}`;
export const BGIMAGEATTR = `data-darkmode-bgimage-${RANDOM}`;

export const DEFAULT_LIGHT_TEXTCOLOR = '#191919'; // 非Dark Mode下字体颜色
export const DEFAULT_LIGHT_BGCOLOR = '#fff'; // 非Dark Mode下背景颜色
export const DEFAULT_DARK_TEXTCOLOR = '#a3a3a3'; // 前景色：rgba(255,255,255,0.6) 背景色：#191919
export const DEFAULT_DARK_BGCOLOR = '#191919'; // Dark Mode下背景颜色
export const GRAY_MASK_COLOR = 'rgba(0,0,0,0.2)'; // 灰色蒙层色值

export const WHITE_LIKE_COLOR_BRIGHTNESS = 250; // 接近白色的感知亮度阈值
export const MAX_LIMIT_BGCOLOR_BRIGHTNESS = 190;
export const MIN_LIMIT_OFFSET_BRIGHTNESS = 65;
export const HIGH_BGCOLOR_BRIGHTNESS = 100;
export const HIGH_BLACKWHITE_HSL_BRIGHTNESS = 40;
export const LOW_BLACKWHITE_HSL_BRIGHTNESS = 22;

export const PAGE_HEIGHT = (window.getInnerHeight && window.getInnerHeight())
  || window.innerHeight
  || document.documentElement.clientHeight;

export const TABLE_NAME = ['TABLE', 'TR', 'TD', 'TH']; // 支持bgcolor属性的table标签列表

export const IMPORTANT_REGEXP = / !important$/; // !important
