/**
 * @name 校验器
 *
 * @function validate 校验
 * @param {HTMLElement}    container 要校验的容器节点
 * @param {ValidateOption} opt       校验配置
 * @param {ValidateFilter} [filter]  过滤器
 * @return {ValidateResult[]} 校验结果
 *
 */

import type {
  ValidateOption,
  ValidateFilter,
  ValidateResult
} from '../darkmode.d';

// 常量
import {
  COLORATTR,
  BGCOLORATTR,
  ORIGINAL_COLORATTR,
  ORIGINAL_BGCOLORATTR,
  BGGRADIENT_MIXCOLORATTR,

  URL_REGEXP,

  VALIDATE_IGNORE_RULES
} from './constant';

// Darkmode配置
import config, {
  getStyle,
  getAttr,
} from './config';

import {
  sdk
} from './global';

export function validate(container: HTMLElement, opt: ValidateOption = {}, filter?: ValidateFilter): ValidateResult[] {
  // 全文级忽略规则：取值与节点级 data-ignore-dm 一致（空格分隔），两者取并集
  const globalIgnoreRules = (opt.ignoreRules || '').split(/\s+/).filter(Boolean);
  const treeWalker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, node => {
    if (!(node instanceof HTMLElement)) return NodeFilter.FILTER_REJECT; // 忽略非元素节点
    if (getStyle(node, 'display') === 'none') return NodeFilter.FILTER_REJECT; // 忽略不可见节点以及其所有子节点
    if (URL_REGEXP.test(getStyle(node, 'backgroundImage') || '') || URL_REGEXP.test(getStyle(node, 'webkitBorderImage') || getStyle(node, 'borderImage') || '')) return NodeFilter.FILTER_REJECT; // 忽略有背景图片的节点以及其所有子节点
    if (node instanceof SVGElement) return NodeFilter.FILTER_REJECT; // 忽略SVG节点以及其所有子节点
    if (filter?.(node)) return NodeFilter.FILTER_SKIP; // 忽略filter(node)返回true的节点
    return NodeFilter.FILTER_ACCEPT;
  });
  const cases: ValidateResult[] = [];
  while (treeWalker.nextNode()) {
    const currentNode = treeWalker.currentNode;
    if (currentNode instanceof HTMLElement) {
      const ignoreRules = globalIgnoreRules.concat((currentNode.dataset.ignoreDm || '').split(/\s+/).filter(Boolean));

      if (!ignoreRules.includes(VALIDATE_IGNORE_RULES.LOW_CONTRAST) && Array.prototype.some.call(currentNode.childNodes, child => child.nodeType === 3 && child.nodeValue.replace(/\s/g, '').length)) { // 有文本内容，校验对比度
        const dmContrast = sdk.getContrast(getAttr(currentNode, COLORATTR) || config.defaultDarkTextColor, getAttr(currentNode, BGCOLORATTR) || config.defaultDarkBgColor);
        // 只报「转换后对比度不达标且比 Light Mode 更差」的节点：原文自身就低对比度时，
        // 说明问题来自内容而非算法，不该算作 Dark Mode 转换的违规
        if (dmContrast < (opt.minContrast || 1.5)) {
          const lmContrast = sdk.getContrast(getAttr(currentNode, ORIGINAL_COLORATTR) || config.defaultLightTextColor, getAttr(currentNode, ORIGINAL_BGCOLORATTR) || config.defaultLightBgColor);
          if (dmContrast < lmContrast) {
            cases.push({
              dom: currentNode,
              key: 'darkmode-low-contrast',
              violateRules: '文字与背景色对比度太低（参考文档#4.1.1使用对比度适中的颜色）',
            });
          }
        }
      }

      if (!ignoreRules.includes(VALIDATE_IGNORE_RULES.TEXT_BG_GRADIENT) && getAttr(currentNode, BGGRADIENT_MIXCOLORATTR)) {
        cases.push({
          dom: currentNode,
          key: 'darkmode-no-gradient',
          violateRules: '文字背景尽量不要使用渐变（参考文档#4.1.2如非必要，文字背景尽量不要使用渐变）',
        });
      }

      if (config.whitelist.attribute.some(attribute => currentNode.hasAttribute(attribute))) {
        cases.push({
          dom: currentNode,
          key: 'darkmode-whitelist',
          violateRules: '注意，此处包含白名单属性，会跳过darkmode算法转换（参考文档#4.5.1 指定节点跳过算法转换）',
        });
      }
    }
  }
  return cases;
};
