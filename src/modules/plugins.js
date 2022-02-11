/**
 * @name 插件基类
 *
 * @class Plugin
 *
 * @attr {Number}  loopTimes  遍历次数（全部节点遍历结束算一次）
 * @attr {Boolean} isDarkmode 是否为Dark Mode
 *
 * @method addCss 添加样式
 * @param {String}  className       DOM节点类名
 * @param {Array}   kvList          css键值对列表
 * @param {String}  kvList[0].key   css属性
 * @param {String}  kvList[0].value css值
 * @param {Boolean} needMediaQuery  是否需要Dark Mode媒体查询
 *
 */

import {
  cssUtils, // 样式相关操作工具对象
  plugins, // 插件系统
  sdk
} from './global';

let cssNeedMQ = [];
let cssNoMQ = [];

class Plugin {
  constructor() {}

  get loopTimes() {
    return plugins.loopTimes;
  }

  get isDarkmode() {
    return sdk.isDarkmode;
  }

  addCss(className, kvList, needMediaQuery = true) {
    (needMediaQuery ? cssNeedMQ : cssNoMQ).push(cssUtils.genCss(className, kvList.map(({
      key,
      value
    }) => cssUtils.genCssKV(key, value)).join('')));
  }
}

/**
 * @name 插件系统
 *
 * @class Plugins
 *
 * @attr {Number} length             已挂载的插件数量
 * @attr {String} firstPageStyle     首屏样式
 * @attr {String} otherPageStyle     非首屏样式
 * @attr {String} firstPageStyleNoMQ 首屏样式（不需要加媒体查询）
 * @attr {String} otherPageStyleNoMQ 非首屏样式（不需要加媒体查询）
 *
 * @method extend 挂载插件
 * @param {Function} plugin 插件构造函数
 *
 * @method emit 执行插件钩子
 * @param {String} name 钩子名称
 * @param {Any}    args 钩子参数
 *
 * @method addCss 写入插件样式
 * @param {Boolean} isFirstPageStyle 是否首屏样式
 *
 * @method resetCss 重置插件样式
 *
 */

export default class Plugins {
  _plugins = []; // 已挂载的插件列表

  length = 0; // 已挂载的插件数量
  loopTimes = 0; // 已遍历次数
  firstPageStyle = ''; // 首屏样式
  otherPageStyle = ''; // 非首屏样式
  firstPageStyleNoMQ = ''; // 首屏样式（不需要加媒体查询）
  otherPageStyleNoMQ = ''; // 非首屏样式（不需要加媒体查询）

  constructor() {}

  extend(plugin) {
    this._plugins.push(new (plugin(Plugin))());
    this.length++;
  }

  emit(name, ...args) {
    this._plugins.forEach(plugin => {
      typeof plugin[name] === 'function' && plugin[name](...args);
    });
  }

  addCss(isFirstPageStyle) {
    if (isFirstPageStyle) {
      this.firstPageStyle += cssNeedMQ.join('');
      this.firstPageStyleNoMQ += cssNoMQ.join('');
    } else {
      this.otherPageStyle += cssNeedMQ.join('');
      this.otherPageStyleNoMQ += cssNoMQ.join('');
    }
  }

  resetCss() {
    cssNeedMQ = [];
    cssNoMQ = [];
  }
};
