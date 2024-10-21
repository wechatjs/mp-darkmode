/**
 * @name 节点相关操作工具API
 *
 * @function getChildrenAndIt 获取某个节点及它的所有子节点
 * @param {DOM Object} el 节点对象
 * @return {DOM Object Array} 节点对象列表
 *
 * @function hasTextNode 判断某个节点里是否包含文字节点
 * @param {DOM Object} el 节点对象
 * @return {boolean} 判断结果
 *
 * @function hasTableClass 判断table相关元素有没有指定class
 * @param {DOM Object} el 节点对象
 * @return {string | null} 判断结果，如果有，返回class对应的lm色值，否则返回null
 *
 */

// Darkmode配置
import config from './config';

import {
  sdk
} from './global';

export function getChildrenAndIt(el) {
  return [el].concat(...el.querySelectorAll('*'));
};

export function hasTextNode(el) {
  let cnt = '';
  Array.prototype.forEach.call(el.childNodes, child => {
    if (child.nodeType === 3) {
      cnt += child.nodeValue.replace(/\s/g, ''); // 不考虑空白字符
    }
  });
  return cnt.length > 0;
};

// table的内部样式类对应的lm背景色
const tableClassObj = {
  'ue-table-interlace-color-single': '#fcfcfc',
  'ue-table-interlace-color-double': '#f7faff'
};
export function hasTableClass(el) {
  let color = null;

  Array.prototype.some.call(el.classList, className => {
    if (tableClassObj[className]) {
      color = tableClassObj[className];
      return true;
    }
    return false;
  });

  return color;
};

/**
 * @name 节点相关操作工具对象
 *
 * @class DomUtils
 *
 * @attr {number} length 要处理的节点列表长度
 * @attr {boolean} showFirstPage 是否已显示首屏
 *
 * @method set 设置要处理的节点列表
 * @param {DOM Object Array} els 要处理的节点列表
 *
 * @method get 获取要处理的节点列表（包含延迟节点、容器节点等逻辑）
 * @return {DOM Object Array} 要处理的节点列表
 *
 * @method delay 将所有要处理的节点转移到延迟处理队列里
 *
 * @method hasDelay 判断是否包含延迟处理的节点
 * @return {boolean} 判断结果
 *
 * @method addFirstPageNode 添加首屏节点
 * @param {DOM Object} el 要添加的首屏节点
 *
 * @method showFirstPageNodes 显示所有首屏节点
 *
 * @method emptyFirstPageNodes 清空记录的首屏节点
 *
 */

export class DomUtils {
  _els = []; // 要处理的节点列表
  _firstPageEls = []; // 首屏节点列表
  _delayEls = []; // 延迟处理的节点列表

  showFirstPage = false; // 是否已显示首屏

  constructor() {}

  get length() {
    return this._els.length;
  }

  set(els = []) {
    this._els = els;
  }

  get() {
    let res = [];

    if (this._els.length) { // 有节点
      res = this._els;
      sdk.isDarkmode && (this._els = []);
    } else { // 如果没有节点
      if (this._delayEls.length) { // 有延迟节点，则使用延迟节点
        res = this._delayEls;
        this._delayEls = [];
      } else if (config.container) { // 没有延迟节点，但有容器，重新获取容器内的节点
        res = config.container.querySelectorAll('*');
      }
    }

    return res;
  }

  delay() {
    Array.prototype.forEach.call(this._els, el => this._delayEls.push(el)); // 转移到延迟处理的节点里
    this._els = []; // 转移后清空列表
  }

  hasDelay() {
    return this._delayEls.length > 0;
  }

  addFirstPageNode(el) {
    this._firstPageEls.push(el);
  }

  showFirstPageNodes() {
    this._firstPageEls.forEach(el => !el.style.visibility && (el.style.visibility = 'visible')); // 显示首屏节点
    this.showFirstPage = true; // 记录为已显示首屏
  }

  emptyFirstPageNodes() {
    this._firstPageEls = [];
  }
};
