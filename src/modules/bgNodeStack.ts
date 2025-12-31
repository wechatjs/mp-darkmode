/**
 * @name 需要判断位置的背景节点堆栈
 *
 * @class BgNodeStack
 * @attr {RegExp} classNameReg 类名正则表达式
 *
 * @constructor
 * @param {string} prefix 类名前缀
 *
 * @method push 背景节点入栈
 * @param {HTMLElement} el    背景节点对象
 * @param {string}      cssKV css键值对
 * @param {Callback}    [cb]  如果在背景节点区域内，则执行该回调函数
 * @return void
 *
 * @method contains 判断节点是否在背景节点的区域
 * @param {HTMLElement} el       要判断的节点对象（非背景节点）
 * @param {Callback}    callback 如果在背景节点区域内，则执行该回调函数
 * @return void
 *
 * @method update 更新堆栈的节点对象，主要解决前后节点不一致的问题
 * @param {HTMLElement[]} els 要更新的节点对象列表
 * @return void
 *
 */

// Darkmode配置
import config from './config';

type Callback = (item: StackItem) => void;

interface StackItem {
  el: HTMLElement;
  className: string;
  cssKV: string;
  updated: boolean;
  cb?: Callback;
  rect?: DOMRect;
}

export default class BgNodeStack {
  classNameReg: RegExp;
  _prefix: string;

  _stack: StackItem[] = []; // 需要判断位置的背景堆栈
  _idx = 0; // 索引值

  constructor(prefix: string) {
    this._prefix = prefix;
    this.classNameReg = new RegExp(`${this._prefix}\\d+`);
  }

  // 背景节点入栈
  push(el: HTMLElement, cssKV: string, cb?: Callback) {
    const className = `${this._prefix}${this._idx++}`;
    el.classList.add(className);
    this._stack.unshift({
      el,
      className,
      cssKV,
      updated: !config.delayBgJudge,
      cb
    });
  }

  // 判断节点是否在背景节点的区域
  contains(el: HTMLElement, callback: Callback) {
    const rect = el.getBoundingClientRect();
    const idxStack: number[] = [];

    this._stack.forEach((item, i) => {
      if (item.updated) {
        if (!item.rect) item.rect = item.el.getBoundingClientRect();

        const bgRect = item.rect;
        if (!(
          rect.top >= bgRect.bottom
          || rect.bottom <= bgRect.top
          || rect.left >= bgRect.right
          || rect.right <= bgRect.left
        )) { // 表示节点在背景图内
          idxStack.unshift(i);
        }
      }
    });

    while (idxStack.length) {
      const idx = idxStack.shift();
      if (idx === undefined) continue;
      const item = this._stack.splice(idx, 1)[0];
      callback(item);
    }
  }

  // 更新堆栈的节点对象，主要解决前后节点不一致的问题
  update(els: HTMLElement[]) {
    this._stack.forEach(item => {
      if (!item.updated) {
        Array.prototype.some.call(els, (el: HTMLElement) => {
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
