/**
 * @name Darkmode配置
 *
 * @attr {boolean}      hasInit               是否初始化过配置
 * @attr {Function}     begin                 开始处理时触发的回调
 * @attr {Function}     showFirstPage         首屏处理完成时触发的回调
 * @attr {Function}     error                 发生error时触发的回调
 * @attr {string}       mode                  强制指定的颜色模式(dark|light), 指定了就不监听系统颜色
 * @attr {Object}       whitelist             节点白名单
 * @attr {string Array} whitelist.tagName     标签名列表
 * @attr {string Array} whitelist.attribute   属性列表
 * @attr {boolean}      needJudgeFirstPage    是否需要判断首屏
 * @attr {boolean}      delayBgJudge          是否延迟背景判断
 * @attr {DOM Object}   container             延迟运行js时使用的容器
 * @attr {string}       cssSelectorsPrefix    css选择器前缀
 * @attr {string}       defaultLightTextColor 非Dark Mode下字体颜色
 * @attr {string}       defaultLightBgColor   非Dark Mode下背景颜色
 * @attr {string}       defaultDarkTextColor  Dark Mode下字体颜色
 * @attr {string}       defaultDarkBgColor    Dark Mode下背景颜色
 *
 * @method set 设置配置
 * @param {string} type 要处理的节点
 * @param {Object} opt  传入的配置对象
 * @param {string} key  配置名
 * @return void
 *
 */

// 常量
import {
  DEFAULT_LIGHT_TEXTCOLOR,
  DEFAULT_LIGHT_BGCOLOR,
  DEFAULT_DARK_TEXTCOLOR,
  DEFAULT_DARK_BGCOLOR
} from './constant';

const config = {
  hasInit: false, // 是否初始化过配置

  // hooks
  begin: null, // 开始处理时触发的回调
  showFirstPage: null, // 首屏处理完成时触发的回调
  error: null, // 发生error时触发的回调

  mode: '', // 强制指定的颜色模式(dark|light), 指定了就不监听系统颜色
  whitelist: { // 节点白名单
    tagName: ['MPCPS', 'IFRAME'], // 标签名列表
    attribute: [], // 属性列表
  },
  needJudgeFirstPage: true, // 是否需要判断首屏
  delayBgJudge: false, // 是否延迟背景判断
  container: null, // 延迟运行js时使用的容器
  cssSelectorsPrefix: '', // css选择器前缀
  defaultLightTextColor: DEFAULT_LIGHT_TEXTCOLOR, // 非Dark Mode下字体颜色
  defaultLightBgColor: DEFAULT_LIGHT_BGCOLOR, // 非Dark Mode下背景颜色
  defaultDarkTextColor: DEFAULT_DARK_TEXTCOLOR, // Dark Mode下字体颜色
  defaultDarkBgColor: DEFAULT_DARK_BGCOLOR, // Dark Mode下背景颜色

  // 设置配置
  set(type, opt, key) {
    const value = opt[key];
    switch (type) {
      case 'boolean':
        typeof value === 'boolean' && (this[key] = value);
        break;
      case 'string':
        typeof value === 'string' && value !== '' && (this[key] = value);
        break;
      case 'function':
        typeof value === 'function' && (this[key] = value);
        break;
      case 'dom':
        value instanceof HTMLElement && (this[key] = value);
        break;
      default:
    }
  }
};

export default config;
