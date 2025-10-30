/**
 * @name 校验器
 *
 * @class Validator
 *
 * @constructor
 * @param {DOM} prefix 类名前缀
 *
 * @attr {string} className 类名
 *
 * @method set 设置要处理的节点列表
 * @param {DOM Object Array} nodes 要处理的节点列表
 * @return {DOM Object Array} 要处理的节点列表
 *
 */

// 常量
import {
  COLORATTR,
  BGCOLORATTR,

  URL_REGEXP
} from './constant';

// Darkmode配置
import config from './config';

import {
  sdk
} from './global';

export function validate(container, filter) {
  const treeWalker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, node => {
    if (node.style.display === 'none') return NodeFilter.FILTER_REJECT; // 忽略不可见节点以及其所有子节点
    if (URL_REGEXP.test(node.style.backgroundImage || '') || URL_REGEXP.test(node.style.webkitBorderImage || node.style.borderImage || '')) return NodeFilter.FILTER_REJECT; // 忽略有背景图片的节点以及其所有子节点
    if (filter?.(node)) return NodeFilter.FILTER_SKIP; // 忽略filter(node)返回true的节点
    return NodeFilter.FILTER_ACCEPT;
  });
  while (treeWalker.nextNode()) {
    const currentNode = treeWalker.currentNode;
    if (Array.prototype.some.call(currentNode.childNodes, child => child.nodeType === 3 && child.nodeValue.replace(/\s/g, '').length)) {
      // console.log(currentNode[COLORATTR] || config.defaultDarkTextColor, currentNode[BGCOLORATTR] || config.defaultDarkBgColor);
      // const contrast = sdk.getContrast(currentNode[COLORATTR] || config.defaultDarkTextColor, currentNode[BGCOLORATTR] || config.defaultDarkBgColor);
      // console.log(currentNode, contrast, currentNode[COLORATTR] || config.defaultDarkTextColor, currentNode[BGCOLORATTR] || config.defaultDarkBgColor);
      const contrast = sdk.getContrast(window.getComputedStyle(currentNode).color, currentNode[BGCOLORATTR] || config.defaultDarkBgColor);
      if (contrast < 3) {
        console.log(currentNode, contrast, currentNode[BGCOLORATTR], config.defaultDarkBgColor);
      }
    }
  }
};
