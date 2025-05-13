/**
 * @name 文本节点队列
 *
 * @class TextNodeQueue
 *
 * @constructor
 * @param {string} prefix 类名前缀
 *
 * @method push 文本节点入队
 * @param {DOM Object} el 文本节点对象
 * @return void
 *
 * @method forEach 遍历，遍历过的文本节点出队
 * @param {Function} callback 回调
 * @return void
 *
 * @method update 更新队列的节点对象，主要解决前后节点不一致的问题
 * @param {DOM Object Array} els 要更新的节点对象列表
 * @return void
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

  // 文本节点入队
  push(el) {
    const className = `${this._prefix}${this._idx++}`;
    el.classList.add(className);
    this._queue.push({
      el,
      className,
      updated: !config.delayBgJudge
    });
  }

  // 遍历，遍历过的文本节点出队
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

  // 更新队列的节点对象，主要解决前后节点不一致的问题
  update(els) {
    this._queue.forEach(item => {
      if (!item.updated) {
        Array.prototype.some.call(els, el => {
          if (el.nodeType === 1 && el.classList.contains(item.className)) {
            item.el = el;
            item.updated = true;
            return true;
          }
          return false;
        });
      }
    });
  }
};
