/**
 * @name 校验器
 *
 * @function validate 校验
 * @param {HTMLElement}    container 要校验的容器节点
 * @param {ValidateFilter} [filter]  过滤器
 * @return void
 *
 */

import type { ValidateFilter } from '../darkmode.d';

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

export function validate(container: HTMLElement, filter?: ValidateFilter) {
  const treeWalker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, node => {
    if (!(node instanceof HTMLElement)) return NodeFilter.FILTER_REJECT; // 忽略非元素节点
    if (node.style.display === 'none') return NodeFilter.FILTER_REJECT; // 忽略不可见节点以及其所有子节点
    if (URL_REGEXP.test(node.style.backgroundImage || '') || URL_REGEXP.test((node.style as any).webkitBorderImage || node.style.borderImage || '')) return NodeFilter.FILTER_REJECT; // 忽略有背景图片的节点以及其所有子节点
    if (node instanceof SVGElement) return NodeFilter.FILTER_REJECT; // 忽略SVG节点以及其所有子节点
    if (filter?.(node)) return NodeFilter.FILTER_SKIP; // 忽略filter(node)返回true的节点
    return NodeFilter.FILTER_ACCEPT;
  });
  while (treeWalker.nextNode()) {
    const currentNode = treeWalker.currentNode;
    if (currentNode instanceof HTMLElement && Array.prototype.some.call(currentNode.childNodes, child => child.nodeType === 3 && child.nodeValue.replace(/\s/g, '').length)) {
      // console.log(currentNode[COLORATTR] || config.defaultDarkTextColor, currentNode[BGCOLORATTR] || config.defaultDarkBgColor);
      // const contrast = sdk.getContrast(currentNode[COLORATTR] || config.defaultDarkTextColor, currentNode[BGCOLORATTR] || config.defaultDarkBgColor);
      // console.log(currentNode, contrast, currentNode[COLORATTR] || config.defaultDarkTextColor, currentNode[BGCOLORATTR] || config.defaultDarkBgColor);
      const contrast = sdk.getContrast(window.getComputedStyle(currentNode).color, (currentNode as any)[BGCOLORATTR] || config.defaultDarkBgColor);
      if (contrast < 3) {
        console.log(currentNode, contrast, (currentNode as any)[BGCOLORATTR], config.defaultDarkBgColor);
      }
    }
  }
};
