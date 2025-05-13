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
 * @param {string}  css              css样式
 * @param {boolean} isFirstPageStyle 是否首屏样式
 * @return void
 *
 * @method writeStyle 写入样式表
 * @param {boolean} isFirstPageStyle 是否首屏样式
 * @return void
 *
 */

// 常量
import {
  MEDIA_QUERY,
  HTML_CLASS,
} from './constant';

// Darkmode配置
import config from './config';

import {
  plugins, // 插件系统
  sdk
} from './global';

export default class CssUtils {
  _firstPageStyle = ''; // 首屏样式
  _otherPageStyle = ''; // 非首屏样式

  isFinish = false; // 是否运行过Dark Mode处理逻辑（写入过非首屏样式表则表示已运行过）

  constructor() {}

  // 生成css键值对
  genCssKV(key, val) {
    return `${key}: ${val} !important;`;
  }

  // 生成css，包括css选择器
  genCss(className, cssKV) {
    return `${config.mode === 'dark' ? `html.${HTML_CLASS} ` : ''}${config.cssSelectorsPrefix && `${config.cssSelectorsPrefix} `}.${className}{${cssKV}}`;
  }

  // 加入css
  addCss(css, isFirstPageStyle = false) {
    this[isFirstPageStyle ? '_firstPageStyle' : '_otherPageStyle'] += css;
    plugins.addCss(isFirstPageStyle);
  }

  // 写入样式表
  writeStyle(isFirstPageStyle = false) {
    !isFirstPageStyle && sdk.isDarkmode && (this.isFinish = true); // 在Dark Mode下一旦写入了非首屏样式表，则认为已经运行过Dark Mode处理逻辑

    // 获取样式表内容
    const styles = (sdk.isDarkmode ? [{
      target: this,
      key: ['_firstPageStyle', '_otherPageStyle'],
      needMediaQuery: true
    }] : []).concat([{
      target: plugins,
      key: ['firstPageStyle', 'otherPageStyle'],
      needMediaQuery: true
    }, {
      target: plugins,
      key: ['firstPageStyleNoMQ', 'otherPageStyleNoMQ'],
      needMediaQuery: false
    }]).map(({
      target,
      key: [first, other],
      needMediaQuery
    }) => {
      let styleKey = '';
      if (!isFirstPageStyle) { // 如果是写入非首屏样式表，则连同首屏样式一起写入
        target[other] = target[first] + target[other];
        target[first] = '';
        styleKey = other;
      } else {
        styleKey = first;
      }

      const style = target[styleKey];
      if (style) {
        target[styleKey] = ''; // 写入样式表后清空内存中的数据
        return (config.mode === 'dark' || !needMediaQuery) ? style : `@media ${MEDIA_QUERY} {${style}}`;
      }
      return '';
    }).join('');

    // 写入样式表
    styles && document.head.insertAdjacentHTML('beforeend', `<style type="text/css">${styles}</style>`);
  }
};
