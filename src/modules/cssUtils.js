/**
 * @name 样式相关操作工具对象
 *
 * @class CssUtils
 *
 * @constructor
 * @param {Object} config Darkmode配置
 *
 * @attr {boolean} isFinish 是否运行过Dark Mode处理逻辑（写入过非首屏样式表则表示已运行过）
 *
 * @method genCssKV 生成css键值对
 * @param {string} key css属性
 * @param {string} val css值
 * @returns {string} css键值对
 *
 * @method genCss 生成css，包括css选择器
 * @param {string} className DOM节点类名
 * @param {string} cssKV     css键值对
 * @returns {string} css
 *
 * @method addCss 加入css
 * @param {string}  css              css样式
 * @param {boolean} isFirstPageStyle 是否首屏样式
 *
 * @method writeStyle 写入样式表
 * @param {boolean} isFirstPageStyle 是否首屏样式
 *
 */

import {
  MEDIA_QUERY,
  HTML_CLASS,
} from './constant';

export default class CssUtils {
  _firstPageStyle = ''; // 首屏样式
  _otherPageStyle = ''; // 非首屏样式

  isFinish = false;

  constructor(config) {
    this._config = config;
  }

  genCssKV(key, val) {
    return `${key}: ${val} !important;`;
  }

  genCss(className, cssKV) {
    return `${this._config.mode === 'dark' ? `html.${HTML_CLASS} ` : ''}${this._config.cssSelectorsPrefix && `${this._config.cssSelectorsPrefix} `}.${className}{${cssKV}}`;
  }

  addCss(css, isFirstPageStyle) {
    this[isFirstPageStyle ? '_firstPageStyle' : '_otherPageStyle'] += css;
  }

  writeStyle(isFirstPageStyle) {
    let styleKey = '';

    if (!isFirstPageStyle) { // 如果是写入非首屏样式表，则连同首屏样式一起写入
      this._otherPageStyle = this._firstPageStyle + this._otherPageStyle;
      this._firstPageStyle = '';
      styleKey = '_otherPageStyle';
      this.isFinish = true;
    } else {
      styleKey = '_firstPageStyle';
    }

    const style = this[styleKey];

    if (style) {
      document.head.insertAdjacentHTML('beforeend', `<style type="text/css">${this._config.mode === 'dark' ? style : `@media ${MEDIA_QUERY} {${style}}`}</style>`);
      this[styleKey] = ''; // 写入样式表后清空内存中的数据
    }
  }
};
