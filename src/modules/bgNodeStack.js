/**
 * @name 需要判断位置的背景节点堆栈
 *
 * @class BgNodeStack
 *
 * @constructor
 * @param {Object} config Darkmode配置
 * @param {string} prefix 类名前缀
 *
 * @method push 背景节点入栈
 * @param {Dom Object} el    背景节点对象
 * @param {string}     cssKV css键值对
 *
 * @method contains 判断节点是否在背景节点的区域
 * @param {Dom Object} el       要判断的节点对象（非背景节点）
 * @param {function}   callback 如果在背景节点区域内，则执行该回调函数
 *
 * @method update 更新堆栈的节点对象，主要解决前后节点不一致的问题
 * @param {Dom Object Array} nodes 要更新的节点对象列表
 *
 */

export default class BgNodeStack {
  _stack = []; // 需要判断位置的背景堆栈，{ el, className, cssKV, updated, rect }
  _idx = 0; // 索引值

  constructor(config, prefix) {
    this._config = config;
    this._prefix = prefix;
  }

  push(el, cssKV) {
    const className = `${this._prefix}${this._idx++}`;
    el.classList.add(className);
    this._stack.unshift({
      el,
      className,
      cssKV,
      updated: !this._config.delayBgJudge
    });
  }

  contains(el, callback) {
    const rect = el.getBoundingClientRect();
    const idxStack = [];

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
      const item = this._stack.splice(idxStack.shift(), 1)[0];
      typeof callback === 'function' && callback(item);
    }
  }

  update(nodes) {
    this._stack.forEach(item => {
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
