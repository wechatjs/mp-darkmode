/**
 * @name Darkmode主入口
 *
 * @function run 配置并处理
 * @param {Dom Object Array} nodes 要处理的节点列表
 * @param {Object}           opt   Dark Mode配置，详见init配置说明
 *
 * @function init 初始化Dark Mode配置
 * @param {Function}   opt.begin                 开始处理时触发的回调
 * @param {Function}   opt.showFirstPage         首屏处理完成时触发的回调
 * @param {Function}   opt.error                 发生error时触发的回调
 * @param {string}     opt.mode                  强制指定的颜色模式(dark|light), 指定了就不监听系统颜色
 * @param {Object}     opt.whitelist             节点白名单
 * @param {Array}      opt.whitelist.tagName     标签名列表
 * @param {boolean}    opt.needJudgeFirstPage    是否需要判断首屏
 * @param {boolean}    opt.delayBgJudge          是否延迟背景判断
 * @param {DOM Object} opt.container             延迟运行js时使用的容器
 * @param {string}     opt.cssSelectorsPrefix    css选择器前缀
 * @param {string}     opt.defaultLightTextColor 非Dark Mode下字体颜色
 * @param {string}     opt.defaultLightBgColor   非Dark Mode下背景颜色
 * @param {string}     opt.defaultDarkTextColor  Dark Mode下字体颜色
 * @param {string}     opt.defaultDarkBgColor    Dark Mode下背景颜色
 *
 * @function convertBg 处理背景
 * @param {Dom Object Array} nodes 要处理的节点列表
 *
 * @function extend 挂载插件
 * @param {Array} pluginList 插件列表
 *
 */

import {
  MEDIA_QUERY,
  CLASS_PREFIX,
  HTML_CLASS,
  PAGE_HEIGHT
} from './modules/constant';
const classReg = new RegExp(`${CLASS_PREFIX}[^ ]+`, 'g');

// Darkmode配置
import config from './modules/config';

import {
  plugins, // 插件系统
  tnQueue, // 文本节点队列
  bgStack, // 需要判断位置的背景节点堆栈
  cssUtils, // 样式相关操作工具对象
  domUtils, // 节点相关操作工具对象
  sdk
} from './modules/global';

// Dark Mode切换
let mql = null;
const switchToDarkmode = (mqlObj, opt = {
  type: 'dom'
}) => {
  opt.force && (cssUtils.isFinish = false); // 如果是强制运行Dark Mode处理逻辑，则重置为未运行

  if (cssUtils.isFinish) return; // 已运行过Dark Mode处理逻辑则不再运行

  try {
    sdk.isDarkmode = config.mode ? (config.mode === 'dark') : mqlObj.matches;

    if (opt.type === 'dom') { // 处理节点
      sdk.isDarkmode && typeof config.begin === 'function' && config.begin(domUtils.hasDelay());

      Array.prototype.forEach.call(domUtils.get(), node => {
        if (sdk.isDarkmode && node.className && typeof node.className === 'string') {
          node.className = node.className.replace(classReg, ''); // 过滤掉原有的Dark Mode class，避免外部复制文章时把文章内的Dark Mode class也复制过去导致新文章在Dark Mode下样式错乱
        }

        if (sdk.isDarkmode || plugins.length) {
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
              typeof config.showFirstPage === 'function' && config.showFirstPage(); // 执行首屏回调

              cssUtils.addCss(sdk.convert(node), false); // 写入非首屏样式
            }
          }
        }
      });

      plugins.loopTimes++;
    } else if (opt.type === 'bg') { // 处理背景
      sdk.isDarkmode && tnQueue.forEach(text => bgStack.contains(text, bg => {
        cssUtils.addCss(cssUtils.genCss(bg.className, bg.cssKV), false); // 写入非首屏样式
      }));
    }

    if (config.needJudgeFirstPage || (!config.needJudgeFirstPage && !domUtils.showFirstPage)) {
      // config.needJudgeFirstPage === ture，表示需要判断首屏但是正文长度没超过一屏
      // config.needJudgeFirstPage === false && domUtils.showFirstPage === false，表示不需要判断首屏且没有做首屏优化
      typeof config.showFirstPage === 'function' && config.showFirstPage(); // 执行首屏回调
    }
    cssUtils.writeStyle(); // 写入非首屏样式表
    domUtils.emptyFirstPageNodes(); // 清空记录的首屏节点

    if (!sdk.isDarkmode) { // 非Dark Mode
      // 首次加载页面时为非Dark Mode，标记为不需要判断首屏
      config.needJudgeFirstPage = false;

      // 首次加载页面时为非Dark Mode，标记为不延迟判断背景
      config.delayBgJudge = false;

      if (config.container === null && opt.type === 'dom' && domUtils.length) {
        domUtils.delay(); // 将节点转移到延迟处理队列里
      }
    }
  } catch (e) {
    console.log('An error occurred when running the dark mode conversion algorithm\n', e);
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
  opt.whitelist && opt.whitelist.tagName instanceof Array && opt.whitelist.tagName.forEach(item => {
    item = item.toUpperCase();
    tagName.indexOf(item) === -1 && tagName.push(item);
  });

  if (['dark', 'light'].indexOf(opt.mode) > -1) {
    config.set('string', opt, 'mode');
    document.getElementsByTagName('html')[0].classList.add(HTML_CLASS);
  }

  config.set('function', opt, 'begin');
  config.set('function', opt, 'showFirstPage');
  config.set('function', opt, 'error');
  config.set('boolean', opt, 'needJudgeFirstPage');
  config.set('boolean', opt, 'delayBgJudge');
  config.set('dom', opt, 'container');
  config.set('string', opt, 'cssSelectorsPrefix');
  config.set('string', opt, 'defaultLightTextColor');
  config.set('string', opt, 'defaultLightBgColor');
  config.set('string', opt, 'defaultDarkTextColor');
  config.set('string', opt, 'defaultDarkBgColor');

  if (!config.mode && mql === null && window.matchMedia) {
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

export function extend(pluginList) {
  pluginList.forEach(plugin => plugins.extend(plugin));
};
