/**
 * @name 全局作用域
 *
 */

// 常量
import {
  CLASS_PREFIX
} from './constant';

// 插件系统
import Plugins from './plugins';
export const plugins = new Plugins();

// 文本节点队列
import TextNodeQueue from './textNodeQueue';
export const tnQueue = new TextNodeQueue(`${CLASS_PREFIX}text__`);

// 需要判断位置的背景节点堆栈
import BgNodeStack from './bgNodeStack';
export const bgStack = new BgNodeStack(`${CLASS_PREFIX}bg__`);

// 样式相关操作工具对象
import CssUtils from './cssUtils';
export const cssUtils = new CssUtils();

// 节点相关操作工具对象
import {
  DomUtils
} from './domUtils';
export const domUtils = new DomUtils();

// sdk
import SDK from './sdk';
export const sdk = new SDK();
