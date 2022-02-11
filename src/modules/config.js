/**
 * @name Darkmode配置
 *
 * @attr {Boolean}      hasInit               是否初始化过配置
 * @attr {Function}     begin                 开始处理时触发的回调
 * @attr {Function}     showFirstPage         首屏处理完成时触发的回调
 * @attr {Function}     error                 发生error时触发的回调
 * @attr {String}       mode                  强制指定的颜色模式(dark|light), 指定了就不监听系统颜色
 * @attr {Object}       whitelist             节点白名单
 * @attr {String Array} whitelist.tagName     标签名列表
 * @attr {Boolean}      needJudgeFirstPage    是否需要判断首屏
 * @attr {Boolean}      delayBgJudge          是否延迟背景判断
 * @attr {DOM Object}   container             延迟运行js时使用的容器
 * @attr {String}       cssSelectorsPrefix    css选择器前缀
 * @attr {String}       defaultLightTextColor 非Dark Mode下字体颜色
 * @attr {String}       defaultLightBgColor   非Dark Mode下背景颜色
 * @attr {String}       defaultDarkTextColor  Dark Mode下字体颜色
 * @attr {String}       defaultDarkBgColor    Dark Mode下背景颜色
 *
 * @method set 设置配置
 * @param {String} type 要处理的节点
 * @param {Object} opt  传入的配置对象
 * @param {String} key  配置名
 *
 */

import {
  DEFAULT_LIGHT_TEXTCOLOR,
  DEFAULT_LIGHT_BGCOLOR,
  DEFAULT_DARK_TEXTCOLOR,
  DEFAULT_DARK_BGCOLOR
} from './constant';

const config = {
  hasInit: false,

  // hooks
  begin: null,
  showFirstPage: null,
  error: null,

  mode: '',
  whitelist: {
    tagName: ['MPCPS', 'IFRAME']
  },
  needJudgeFirstPage: true,
  delayBgJudge: false,
  container: null,
  cssSelectorsPrefix: '',
  defaultLightTextColor: DEFAULT_LIGHT_TEXTCOLOR,
  defaultLightBgColor: DEFAULT_LIGHT_BGCOLOR,
  defaultDarkTextColor: DEFAULT_DARK_TEXTCOLOR,
  defaultDarkBgColor: DEFAULT_DARK_BGCOLOR,

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
