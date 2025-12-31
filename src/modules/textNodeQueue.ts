/**
 * @name 文本节点队列
 *
 * @class TextNodeQueue
 *
 * @constructor
 * @param {string} prefix 类名前缀
 *
 * @method push 文本节点入队
 * @param {HTMLElement} el 文本节点对象
 * @return void
 *
 * @method forEach 遍历，遍历过的文本节点出队
 * @param {Callback} callback 回调
 * @return void
 *
 * @method update 更新队列的节点对象，主要解决前后节点不一致的问题
 * @param {HTMLElement[]} els 要更新的节点对象列表
 * @return void
 *
 */

// Darkmode配置
import config from './config';

type Callback = (el: HTMLElement) => void;

interface QueueItem {
  el: HTMLElement;
  className: string;
  updated: boolean;
}

export default class TextNodeQueue {
  _prefix: string;
  _queue: QueueItem[] = []; // 文本节点队列
  _idx = 0; // 索引值

  constructor(prefix: string) {
    this._prefix = prefix;
  }

  // 文本节点入队
  push(el: HTMLElement) {
    const className = `${this._prefix}${this._idx++}`;
    el.classList.add(className);
    this._queue.push({
      el,
      className,
      updated: !config.delayBgJudge
    });
  }

  // 遍历，遍历过的文本节点出队
  forEach(callback: Callback) {
    const idxStack: number[] = [];

    this._queue.forEach((item, idx) => {
      if (item.updated) {
        idxStack.unshift(idx);
        typeof callback && callback(item.el);
      }
    });

    while (idxStack.length) { // 处理完之后删除部分节点
      const idx = idxStack.shift();
      if (idx === undefined) continue;
      this._queue.splice(idx, 1);
    }
  }

  // 更新队列的节点对象，主要解决前后节点不一致的问题
  update(els: HTMLElement[]) {
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
