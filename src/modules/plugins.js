/**
 * @name 插件基类
 *
 * @class Plugin
 *
 * @attr {number}  loopTimes  已遍历次数（全部节点遍历结束算一次）
 * @attr {boolean} isDarkmode 是否为Dark Mode
 *
 * @method addCss 添加样式
 * @param {string}  className       DOM节点类名
 * @param {Array}   kvList          css键值对列表
 * @param {string}  kvList[0].key   css属性
 * @param {string}  kvList[0].value css值
 * @param {boolean} needMediaQuery  是否需要添加Dark Mode媒体查询
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

  // 遍历次数（全部节点遍历结束算一次）
  get loopTimes() {
    return plugins.loopTimes;
  }

  // 是否为Dark Mode
  get isDarkmode() {
    return sdk.isDarkmode;
  }

  // 添加样式
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
 * @attr {number} length             已挂载的插件数量
 * @attr {number} loopTimes          已遍历次数（全部节点遍历结束算一次）
 * @attr {string} firstPageStyle     首屏样式
 * @attr {string} otherPageStyle     非首屏样式
 * @attr {string} firstPageStyleNoMQ 首屏样式（不需要加媒体查询）
 * @attr {string} otherPageStyleNoMQ 非首屏样式（不需要加媒体查询）
 *
 * @method extend 挂载插件
 * @param {Function} plugin 插件构造函数
 * @return void
 *
 * @method emit 执行插件钩子
 * @param {string} name 钩子名称
 * @param {Any}    args 钩子参数
 * @return void
 *
 * @method addCss 写入插件样式
 * @param {boolean} isFirstPageStyle 是否首屏样式
 * @return void
 *
 * @method resetCss 重置插件样式
 * @return void
 *
 */

export default class Plugins {
  _plugins = []; // 已挂载的插件列表

  length = 0; // 已挂载的插件数量
  loopTimes = 0; // 已遍历次数（全部节点遍历结束算一次）
  firstPageStyle = ''; // 首屏样式
  otherPageStyle = ''; // 非首屏样式
  firstPageStyleNoMQ = ''; // 首屏样式（不需要加媒体查询）
  otherPageStyleNoMQ = ''; // 非首屏样式（不需要加媒体查询）

  constructor() {}

  // 挂载插件
  extend(plugin) {
    this._plugins.push(new (plugin(Plugin))());
    this.length++;
  }

  // 执行插件钩子
  emit(name, ...args) {
    this._plugins.forEach(plugin => {
      typeof plugin[name] === 'function' && plugin[name](...args);
    });
  }

  // 写入插件样式
  addCss(isFirstPageStyle) {
    if (isFirstPageStyle) {
      this.firstPageStyle += cssNeedMQ.join('');
      this.firstPageStyleNoMQ += cssNoMQ.join('');
    } else {
      this.otherPageStyle += cssNeedMQ.join('');
      this.otherPageStyleNoMQ += cssNoMQ.join('');
    }
  }

  // 重置插件样式
  resetCss() {
    cssNeedMQ = [];
    cssNoMQ = [];
  }
};
