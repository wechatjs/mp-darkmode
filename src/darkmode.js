/**
 * @name Darkmode主入口
 *
 * @function run 配置并处理
 * @param {Dom Object Array} nodes 要处理的节点列表
 * @param {Object}           opt   Dark Mode配置，详见init配置说明
 *
 * @function init 初始化Dark Mode配置
 * @param {Function}   opt.error                 发生error时触发的回调
 * @param {String}     opt.mode                  强制指定的颜色模式(dark|light), 指定了就不监听系统颜色
 * @param {Object}     opt.whitelist             节点白名单
 * @param {Array}      opt.whitelist.tagName     标签名列表
 * @param {Boolean}    opt.needJudgeFirstPage    是否需要判断首屏
 * @param {Boolean}    opt.delayBgJudge          是否延迟背景判断
 * @param {DOM Object} opt.container             延迟运行js时使用的容器
 * @param {String}     opt.cssSelectorsPrefix    css选择器前缀
 * @param {String}     opt.defaultLightTextColor 非Dark Mode下字体颜色
 * @param {String}     opt.defaultLightBgColor   非Dark Mode下背景颜色
 * @param {String}     opt.defaultDarkTextColor  Dark Mode下字体颜色
 * @param {String}     opt.defaultDarkBgColor    Dark Mode下背景颜色
 *
 * @function convertBg 处理背景
 * @param {Dom Object Array} nodes 要处理的节点列表
 *
 */

import {
  MEDIA_QUERY,
  CLASS_PREFIX,
  HTML_CLASS,
  PAGE_HEIGHT,
  DEFAULT_LIGHT_TEXTCOLOR,
  DEFAULT_LIGHT_BGCOLOR,
  DEFAULT_DARK_TEXTCOLOR,
  DEFAULT_DARK_BGCOLOR
} from './modules/constant';
const classReg = new RegExp(`${CLASS_PREFIX}[^ ]+`, 'g');

// Darkmode配置
const config = {
  hasInit: false, // 是否初始化过配置

  error: null, // 发生error时触发的回调
  mode: '', // 强制指定的颜色模式(dark|light), 指定了就不监听系统颜色
  whitelist: { // 节点白名单
    tagName: ['MPCPS', 'IFRAME'] // 标签名列表
  },
  needJudgeFirstPage: true, // 需要判断首屏
  delayBgJudge: false, // 是否延迟背景判断
  container: null, // 延迟运行js时使用的容器
  cssSelectorsPrefix: '', // css选择器前缀
  defaultLightTextColor: DEFAULT_LIGHT_TEXTCOLOR, // 非Dark Mode下字体颜色
  defaultLightBgColor: DEFAULT_LIGHT_BGCOLOR, // 非Dark Mode下背景颜色
  defaultDarkTextColor: DEFAULT_DARK_TEXTCOLOR, // Dark Mode下字体颜色
  defaultDarkBgColor: DEFAULT_DARK_BGCOLOR // Dark Mode下背景颜色
};

// 文本节点队列
import TextNodeQueue from './modules/textNodeQueue';
const tnQueue = new TextNodeQueue(config, `${CLASS_PREFIX}text__`);

// 需要判断位置的背景节点堆栈
import BgNodeStack from './modules/bgNodeStack';
const bgStack = new BgNodeStack(config, `${CLASS_PREFIX}bg__`);

// 样式相关操作工具对象
import CssUtils from './modules/cssUtils';
const cssUtils = new CssUtils(config);

// 节点相关操作工具对象
import {
  DomUtils
} from './modules/domUtils';
const domUtils = new DomUtils(config);

import SDK from './modules/sdk';
const sdk = new SDK({
  config,
  tnQueue,
  bgStack,
  cssUtils
});

// Dark Mode切换
let mql = null;
const switchToDarkmode = (mqlObj, opt = {
  type: 'dom'
}) => {
  opt.force && (cssUtils.isFinish = false); // 如果是强制运行Dark Mode处理逻辑，则重置为未运行

  if (cssUtils.isFinish) return; // 已运行过Dark Mode处理逻辑则不再运行

  try {
    if (config.mode ? (config.mode === 'dark') : mqlObj.matches) { // Dark Mode
      if (opt.type === 'dom') { // 处理节点
        domUtils.get().forEach(node => {
          if (node.className && typeof node.className === 'string') {
            node.className = node.className.replace(classReg, ''); // 过滤掉原有的Dark Mode class，避免外部复制文章时把文章内的Dark Mode class也复制过去导致新文章在Dark Mode下样式错乱
          }

          if (!config.needJudgeFirstPage) { // 不需要判断首屏
            cssUtils.addCss(sdk.convert(node), false); // 写入非首屏样式
          } else { // 判断首屏
            const rect = node.getBoundingClientRect();
            const top = rect.top;
            const bottom = rect.bottom;
            if (top <= 0 && bottom <= 0) { // 首屏前面
              cssUtils.addCss(sdk.convert(node), false); // 写入非首屏样式
            } else if ((top > 0 && top < PAGE_HEIGHT) || (bottom > 0 && bottom < PAGE_HEIGHT)) { // 首屏
              domUtils.addFirstPageNode(node); // 记录首屏节点
              cssUtils.addCss(sdk.convert(node), true); // 写入首屏样式
            } else { // 首屏后面，理论上，这里最多只会进来一次
              config.needJudgeFirstPage = false; // 至此，不需要再判断首屏了

              // 显示首屏
              cssUtils.writeStyle(true); // 写入首屏样式表
              domUtils.showFirstPageNodes(); // 显示首屏节点

              cssUtils.addCss(sdk.convert(node), false); // 写入非首屏样式
            }
          }
        });
      } else if (opt.type === 'bg') { // 处理背景
        tnQueue.forEach(text => bgStack.contains(text, bg => {
          cssUtils.addCss(cssUtils.genCss(bg.className, bg.cssKV), false); // 写入非首屏样式
        }));
      }

      cssUtils.writeStyle(); // 写入非首屏样式表
    } else {
      // 首次加载页面时为非Dark Mode，标记为不需要判断首屏
      config.needJudgeFirstPage = false;

      // 首次加载页面时为非Dark Mode，标记为不延迟判断背景
      config.delayBgJudge = false;

      if (config.container === null && opt.type === 'dom' && domUtils.len()) {
        domUtils.delay(); // 将节点转移到延迟处理队列里
      }
    }
  } catch (e) {
    console.error(e);
    typeof config.error === 'function' && config.error(e);
  }
};

export function run(nodes, opt) {
  init(opt); // 初始化配置

  domUtils.set(nodes);

  switchToDarkmode(mql, {
    force: true,
    type: 'dom'
  });
};

export function init(opt = {}) {
  if (config.hasInit) return; // 只可设置一次配置

  config.hasInit = true; // 记录为配置已设置

  const tagName = config.whitelist.tagName;

  typeof opt.error === 'function' && (config.error = opt.error);
  if (['dark', 'light'].indexOf(opt.mode) > -1) {
    config.mode = opt.mode;
    document.getElementsByTagName('html')[0].classList.add(HTML_CLASS);
  }
  opt.whitelist && opt.whitelist.tagName instanceof Array && opt.whitelist.tagName.forEach(item => {
    item = item.toUpperCase();
    tagName.indexOf(item) === -1 && tagName.push(item);
  });
  typeof opt.needJudgeFirstPage === 'boolean' && (config.needJudgeFirstPage = opt.needJudgeFirstPage);
  typeof opt.delayBgJudge === 'boolean' && (config.delayBgJudge = opt.delayBgJudge);
  opt.container instanceof HTMLElement && (config.container = opt.container);
  typeof opt.cssSelectorsPrefix === 'string' && (config.cssSelectorsPrefix = opt.cssSelectorsPrefix);
  typeof opt.defaultLightTextColor === 'string' && opt.defaultLightTextColor !== '' && (config.defaultLightTextColor = opt.defaultLightTextColor);
  typeof opt.defaultLightBgColor === 'string' && opt.defaultLightBgColor !== '' && (config.defaultLightBgColor = opt.defaultLightBgColor);
  typeof opt.defaultDarkTextColor === 'string' && opt.defaultDarkTextColor !== '' && (config.defaultDarkTextColor = opt.defaultDarkTextColor);
  typeof opt.defaultDarkBgColor === 'string' && opt.defaultDarkBgColor !== '' && (config.defaultDarkBgColor = opt.defaultDarkBgColor);

  if (!config.mode && mql === null) {
    // 匹配媒体查询
    mql = window.matchMedia(MEDIA_QUERY);
    mql.addListener(switchToDarkmode); // 监听
  }
};

export function convertBg(nodes) {
  domUtils.set(nodes);

  if (config.container !== null) {
    bgStack.update(nodes); // 更新背景堆栈
    tnQueue.update(nodes); // 更新文字队列
  }

  switchToDarkmode(mql, {
    force: true,
    type: 'bg'
  });
};