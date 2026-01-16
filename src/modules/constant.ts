/**
 * @name 常量
 *
 */

declare global {
  interface Window {
    getInnerHeight?: () => number;
  }
}

export const MEDIA_QUERY = '(prefers-color-scheme: dark)'; // Dark Mode的CSS媒体查询

export const CLASS_PREFIX = 'js_darkmode__'; // Dark Mode class前缀
export const DM_CLASSNAME_REGEXP = new RegExp(`${CLASS_PREFIX}\\d+`);

export const HTML_CLASS = 'data_color_scheme_dark'; // 强制设置暗黑模式时给html加的class

const RANDOM = `${new Date().getTime()}${Math.floor(Math.random() * 10000)}`; // 生成个随机数，格式为时间戳+随机数
export const COLORATTR = `data-darkmode-color-${RANDOM}`; // dm color，即算法生成的已mix新色值
export const BGCOLORATTR = `data-darkmode-bgcolor-${RANDOM}`; // dm bg-color，即算法生成的已mix新色值
export const ORIGINAL_COLORATTR = `data-darkmode-original-color-${RANDOM}`; // lm color，即原色值
export const ORIGINAL_BGCOLORATTR = `data-darkmode-original-bgcolor-${RANDOM}`; // lm bg-color，即原色值
export const BGIMAGEATTR = `data-darkmode-bgimage-${RANDOM}`; // 是否有背景图片的标记
export const BGGRADIENT_MIXCOLORATTR = `data-darkmode-bggradient-mix-color-${RANDOM}`; // 背景渐变进行mix混合后的色值
export const COMPLEMENTARY_BGIMAGECOLORATTR = `data-darkmode-complementary-bgimagecolor-${RANDOM}`; // 背景图片的补色色值

export const DEFAULT_LIGHT_WEBVIEWCOLOR = '#fff'; // Light Mode下webView颜色
export const DEFAULT_LIGHT_BGCOLOR = '#fff'; // Light Mode下背景颜色
export const DEFAULT_LIGHT_TEXTCOLOR = '#191919'; // Light Mode下字体颜色
export const DEFAULT_DARK_WEBVIEWCOLOR = '#191919'; // Dark Mode下webView颜色
export const DEFAULT_DARK_BGCOLOR = '#191919'; // Dark Mode下背景颜色
export const DEFAULT_DARK_TEXTCOLOR = 'rgba(255,255,255,0.6)'; // Dark Mode下字体颜色

export const WHITE_LIKE_COLOR_BRIGHTNESS = 250; // 接近白色的感知亮度阈值
export const MAX_LIMIT_BGCOLOR_BRIGHTNESS = 190;
export const MIN_LIMIT_OFFSET_BRIGHTNESS = 65;
export const HIGH_BGCOLOR_BRIGHTNESS = 100;
export const HIGH_BLACKWHITE_HSL_BRIGHTNESS = 40;
export const LOW_BLACKWHITE_HSL_BRIGHTNESS = 22;
export const IGNORE_ALPHA = 0.05; // 忽略的透明度阈值

export const PAGE_HEIGHT = window.getInnerHeight?.() || window.innerHeight || document.documentElement.clientHeight;

export const CSS_PROP_SERIES = { // 支持的css属性，按类型做分类
  BG_COLOR: [
    'background-color',
    'background-image',
    'background',
  ],
  TEXT_SHADOW: [
    'text-shadow',
  ],
  TEXT_COLOR: [
    '-webkit-text-stroke',
    '-webkit-text-stroke-color',
    'text-decoration',
    'text-decoration-color',
    'text-emphasis-color',
    'color',
    '-webkit-text-fill-color',
  ],
  BORDER_COLOR: [
    'border-image',
    '-webkit-border-image',
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
    'border-block-color',
    'border-block-start-color',
    'border-block-end-color',
    'border-inline-color',
    'border-inline-start-color',
    'border-inline-end-color',
    'outline',
    'outline-color',
    'box-shadow', // TODO: 不知道为啥之前没处理，后面需要留意下
    'column-rule',
    'column-rule-color',
  ],
  // SVG_COLOR: [ // TODO: SVG后面再处理
  //   'fill',
  //   'stroke',
  //   'stop-color',
  //   'flood-color',
  //   'lighting-color',
  // ],
  // FILTER: [ // TODO: filter后面再考虑要不要处理
  //   'filter'
  // ],
};
export const CSS_PROP_LIST = Object.keys(CSS_PROP_SERIES).map(key => CSS_PROP_SERIES[key as keyof typeof CSS_PROP_SERIES].join('|')).join('|').split('|'); // 支持的css属性平铺列表
export const TABLE_NAME = ['TABLE', 'TR', 'TD', 'TH']; // 支持bgcolor属性的table标签列表

export const IMPORTANT_REGEXP = / !important$/; // !important

export const SEMICOLON_PLACEHOLDER = '<$#_SEMICOLON_#$>'; // 分号占位符
export const SEMICOLON_PLACEHOLDER_REGEXP = /<\$#_SEMICOLON_#\$>/g;

export const COLOR_REGEXP = /\brgba?\([^)]+\)/i;
export const COLOR_REGEXP_GLOBAL = /\brgba?\([^)]+\)/ig;

export const URL_REGEXP = /url\([^)]*\)/i;

export enum PLUGIN_PAGE_STYLE_ATTR { // 插件页面样式属性
  FIRST_PAGE_STYLE = 'firstPageStyle', // 首屏样式
  OTHER_PAGE_STYLE = 'otherPageStyle', // 非首屏样式
  FIRST_PAGE_STYLE_NO_MQ = 'firstPageStyleNoMQ', // 首屏样式（不需要加媒体查询）
  OTHER_PAGE_STYLE_NO_MQ = 'otherPageStyleNoMQ', // 非首屏样式（不需要加媒体查询）
}
