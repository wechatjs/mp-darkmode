/**
 * @name 节点相关操作工具API
 *
 * @function getChildrenAndIt 获取某个节点及它的所有子节点
 * @param {Dom Object} dom 节点对象
 * @returns {Dom Object Array} 节点对象列表
 *
 * @function hasTextNode 判断某个节点里是否包含文字节点
 * @param {Dom Object} dom 节点对象
 * @returns {boolean} 判断结果
 *
 * @function hasTableClass 判断table相关元素有没有指定class
 * @param {Dom Object} dom 节点对象
 * @returns {string | null} 判断结果，如果有，返回class对应的lm色值，否则返回null
 *
 */

export function getChildrenAndIt(dom) {
  return [dom].concat(...dom.querySelectorAll('*'));
};

export function hasTextNode(dom) {
  let cnt = '';
  dom.childNodes.forEach(node => {
    if (node.nodeType === 3) {
      cnt += node.nodeValue.replace(/\s/g, ''); // 不考虑空白字符
    }
  });
  return cnt.length > 0;
};

// table的内部样式类对应的lm背景色
const tableClassObj = {
  'ue-table-interlace-color-single': '#fcfcfc',
  'ue-table-interlace-color-double': '#f7faff'
};
export function hasTableClass(dom) {
  let color = null;

  Array.prototype.some.call(dom.classList, className => {
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
 * @constructor
 * @param {Object} config Darkmode配置
 *
 * @method set 设置要处理的节点列表
 * @param {Dom Object Array} nodes 要处理的节点列表
 *
 * @method len 获取要处理的节点列表长度
 * @returns {number} 长度
 *
 * @method get 获取要处理的节点列表长度（包含延迟节点、容器节点等逻辑）
 * @returns {Dom Object Array} 要处理的节点列表
 *
 * @method delay 将所有要处理的节点转移到延迟处理队列里
 *
 * @method addFirstPageNode 添加首屏节点
 * @param {Dom Object} node 要添加的首屏节点
 *
 * @method showFirstPageNodes 显示所有首屏节点
 *
 */

export class DomUtils {
  _nodes = []; // 要处理的节点列表
  _firstPageNodes = []; // 首屏节点列表
  _delayNodes = []; // 延迟处理的节点列表

  constructor(config) {
    this._config = config;
  }

  set(nodes = []) {
    this._nodes = nodes;
  }

  len() {
    return this._nodes.length;
  }

  get() {
    let res = [];

    if (this._nodes.length) { // 有节点
      res = this._nodes;
      this._nodes = [];
    } else { // 如果没有节点
      if (this._delayNodes.length) { // 有延迟节点，则使用延迟节点
        res = this._delayNodes;
        this._delayNodes = [];
      } else if (this._config.container) { // 没有延迟节点，但有容器，重新获取容器内的节点
        res = this._config.container.querySelectorAll('*');
      }
    }

    return res;
  }

  delay() {
    this._nodes.forEach(node => this._delayNodes.push(node)); // 转移到延迟处理的节点里
    this._nodes = []; // 转移后清空列表
  }

  addFirstPageNode(node) {
    this._firstPageNodes.push(node);
  }

  showFirstPageNodes() {
    this._firstPageNodes.forEach(node => node.style.visibility = 'visible'); // 显示首屏节点
    this._firstPageNodes = []; // 处理完之后清空列表
  }
};