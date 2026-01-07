/**
 * @name 样式相关操作工具对象
 *
 * @class CssUtils
 *
 * @attr {boolean} isFinish 是否运行过Dark Mode处理逻辑（写入过非首屏样式表则表示已运行过）
 *
 * @method genCssKV 生成css键值对
 * @param {string} key css属性
 * @param {string} val css值
 * @return {string} css键值对
 *
 * @method genCss 生成css，包括css选择器
 * @param {string} className DOM节点类名
 * @param {string} cssKV     css键值对
 * @return {string} css
 *
 * @method addCss 加入css
 * @param {string}  css                      css样式
 * @param {boolean} [isFirstPageStyle=false] 是否首屏样式
 * @return void
 *
 * @method writeStyle 写入样式表
 * @param {boolean} [isFirstPageStyle=false] 是否首屏样式
 * @return void
 *
 */

// 常量
import {
  MEDIA_QUERY,
  HTML_CLASS,
  PLUGIN_PAGE_STYLE_ATTR,
} from './constant';

// Darkmode配置
import config from './config';

import {
  plugins, // 插件系统
  sdk
} from './global';

enum CssUtilsPrivateAttr {
  FIRST_PAGE_STYLE = '_firstPageStyle',
  OTHER_PAGE_STYLE = '_otherPageStyle',
}

type StyleItem = {
  target: CssUtils | typeof plugins;
  key: (PLUGIN_PAGE_STYLE_ATTR | CssUtilsPrivateAttr)[];
  needMediaQuery: boolean;
};

export default class CssUtils {
  [CssUtilsPrivateAttr.FIRST_PAGE_STYLE] = ''; // 首屏样式
  [CssUtilsPrivateAttr.OTHER_PAGE_STYLE] = ''; // 非首屏样式

  isFinish = false; // 是否运行过Dark Mode处理逻辑（写入过非首屏样式表则表示已运行过）

  constructor() {}

  // 生成css键值对
  genCssKV(key: string, val: string): string {
    return `${key}: ${val} !important;`;
  }

  // 生成css，包括css选择器
  genCss(className: string, cssKV: string): string {
    return `${config.mode === 'dark' ? `html.${HTML_CLASS} ` : ''}${config.cssSelectorsPrefix && `${config.cssSelectorsPrefix} `}.${className}{${cssKV}}`;
  }

  // 加入css
  addCss(css: string, isFirstPageStyle = false) {
    this[isFirstPageStyle ? CssUtilsPrivateAttr.FIRST_PAGE_STYLE : CssUtilsPrivateAttr.OTHER_PAGE_STYLE] += css;
    plugins.addCss(isFirstPageStyle);
  }

  // 写入样式表
  writeStyle(isFirstPageStyle = false) {
    !isFirstPageStyle && sdk.isDarkmode && (this.isFinish = true); // 在Dark Mode下一旦写入了非首屏样式表，则认为已经运行过Dark Mode处理逻辑

    // 获取样式表内容
    const styles = [
      ...(sdk.isDarkmode ? [{
        target: this,
        key: [CssUtilsPrivateAttr.FIRST_PAGE_STYLE, CssUtilsPrivateAttr.OTHER_PAGE_STYLE],
        needMediaQuery: true
      }] : []),
      {
        target: plugins,
        key: [PLUGIN_PAGE_STYLE_ATTR.FIRST_PAGE_STYLE, PLUGIN_PAGE_STYLE_ATTR.OTHER_PAGE_STYLE],
        needMediaQuery: true
      }, {
        target: plugins,
        key: [PLUGIN_PAGE_STYLE_ATTR.FIRST_PAGE_STYLE_NO_MQ, PLUGIN_PAGE_STYLE_ATTR.OTHER_PAGE_STYLE_NO_MQ],
        needMediaQuery: false
      }
    ].map(({
      target,
      key: [first, other],
      needMediaQuery
    }: StyleItem) => {
      let style = '';
      if (!isFirstPageStyle) { // 如果是写入非首屏样式表，则连同首屏样式一起写入
        if (target instanceof CssUtils) {
          style = target[other as CssUtilsPrivateAttr] = target[first as CssUtilsPrivateAttr] + target[other as CssUtilsPrivateAttr];
          // 清空内存中的数据
          target[first as CssUtilsPrivateAttr] = '';
          target[other as CssUtilsPrivateAttr] = '';
        } else {
          style = target[other as PLUGIN_PAGE_STYLE_ATTR] = target[first as PLUGIN_PAGE_STYLE_ATTR] + target[other as PLUGIN_PAGE_STYLE_ATTR];
          // 清空内存中的数据
          target[first as PLUGIN_PAGE_STYLE_ATTR] = '';
          target[other as PLUGIN_PAGE_STYLE_ATTR] = '';
        }
      } else {
        if (target instanceof CssUtils) {
          style = target[first as CssUtilsPrivateAttr];
          // 清空内存中的数据
          target[first as CssUtilsPrivateAttr] = '';
        } else {
          style = target[first as PLUGIN_PAGE_STYLE_ATTR];
          // 清空内存中的数据
          target[first as PLUGIN_PAGE_STYLE_ATTR] = '';
        }
      }

      if (style) return (config.mode === 'dark' || !needMediaQuery) ? style : `@media ${MEDIA_QUERY} {${style}}`;
      return '';
    }).join('');

    // 写入样式表
    styles && document.head.insertAdjacentHTML('beforeend', `<style type="text/css">${styles}</style>`);
  }
};
