/**
 * @name 文本节点队列
 *
 * @class TextNodeQueue
 *
 * @constructor
 * @param {String} prefix 类名前缀
 *
 * @method push 文本节点入队
 * @param {Dom Object} el 文本节点对象
 *
 * @method forEach 遍历，遍历过的文本节点出队
 * @param {Function} callback 回调
 *
 * @method update 更新队列的节点对象，主要解决前后节点不一致的问题
 * @param {Dom Object Array} nodes 要更新的节点对象列表
 *
 */

// Darkmode配置
import config from './config';

export default class TextNodeQueue {
  _queue = []; // 文本节点队列，{ el, className, updated }
  _idx = 0; // 索引值

  constructor(prefix) {
    this._prefix = prefix;
  }

  push(el) {
    const className = `${this._prefix}${this._idx++}`;
    el.classList.add(className);
    this._queue.push({
      el,
      className,
      updated: !config.delayBgJudge
    });
  }

  forEach(callback) {
    const idxStack = [];

    this._queue.forEach((item, idx) => {
      if (item.updated) {
        idxStack.unshift(idx);
        typeof callback && callback(item.el);
      }
    });

    while (idxStack.length) { // 处理完之后删除部分节点
      this._queue.splice(idxStack.shift(), 1);
    }
  }

  update(nodes) {
    this._queue.forEach(item => {
      if (!item.updated) {
        Array.prototype.some.call(nodes, node => {
          if (node.nodeType === 1 && node.classList.contains(item.className)) {
            item.el = node;
            item.updated = true;
            return true;
          }
          return false;
        });
      }
    });
  }
};
