/**
 * @name Darkmode配置
 *
 * @attr {boolean}      hasInit                  是否初始化过配置
 * @attr {Function}     begin                    开始处理时触发的回调
 * @attr {Function}     showFirstPage            首屏处理完成时触发的回调
 * @attr {Function}     error                    发生error时触发的回调
 * @attr {string}       mode                     强制指定的颜色模式(dark|light), 指定了就不监听系统颜色
 * @attr {Object}       whitelist                节点白名单
 * @attr {string Array} whitelist.tagName        标签名列表
 * @attr {string Array} whitelist.attribute      属性列表
 * @attr {boolean}      needJudgeFirstPage       是否需要判断首屏
 * @attr {boolean}      delayBgJudge             是否延迟背景判断
 * @attr {boolean}      noEmit                   是否不产出style标签
 * @attr {HTMLElement}  container                延迟运行js时使用的容器
 * @attr {string}       cssSelectorsPrefix       css选择器前缀
 * @attr {string}       defaultLightWebviewColor Light Mode下webview颜色
 * @attr {string}       defaultLightBgColor      Light Mode下背景颜色
 * @attr {string}       defaultLightTextColor    Light Mode下字体颜色
 * @attr {string}       defaultDarkWebviewColor  Dark Mode下webview颜色
 * @attr {string}       defaultDarkBgColor       Dark Mode下背景颜色
 * @attr {string}       defaultDarkTextColor     Dark Mode下字体颜色
 * @attr {Function}     setStyle                 使用自定义的设置样式的方法
 * @attr {Function}     setClass                 使用自定义的设置类的方法
 * @attr {Function}     setAttr                  使用自定义的设置属性的方法
 * @attr {Function}     getAttr                  使用自定义的获取属性的方法
 *
 * @method set 设置配置
 * @param {ConfigType}   type 配置类型，'boolean' | 'string' | 'function' | 'dom'
 * @param {ConfigOption} opt  传入的配置对象
 * @param {ConfigKey}    key  配置名
 * @return void
 *
 * @method setDefaultColor 设置默认颜色
 * @param {ConfigOption} opt 传入的配置对象
 * @return void
 *
 * @method reset 重置配置
 * @return void
 *
 */

import type {
  SetStyle,
  SetClass,
  SetAttr,
  GetAttr,
  ConfigOption,
} from '../darkmode.d';

// 常量
import {
  DEFAULT_LIGHT_WEBVIEWCOLOR,
  DEFAULT_LIGHT_TEXTCOLOR,
  DEFAULT_LIGHT_BGCOLOR,
  DEFAULT_DARK_WEBVIEWCOLOR,
  DEFAULT_DARK_TEXTCOLOR,
  DEFAULT_DARK_BGCOLOR
} from './constant';

import {
  mixColors,
} from './color';

type ConfigType = 'boolean' | 'string' | 'function' | 'dom';
type ConfigKey = keyof ConfigOption;

interface DefaultConfig extends Required<ConfigOption> {
  whitelist: Required<Required<ConfigOption>['whitelist']>;
}

interface Config extends DefaultConfig {
  hasInit: boolean;
  set: (type: ConfigType, opt: ConfigOption, key: ConfigKey) => void;
  setDefaultColor: (opt: ConfigOption) => void;
  reset: () => void;
}

// 默认配置
const defaultConfig: DefaultConfig = {
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
  noEmit: false, // 是否不产出style标签
  container: null, // 延迟运行js时使用的容器
  cssSelectorsPrefix: '', // css选择器前缀
  defaultLightWebviewColor: DEFAULT_LIGHT_WEBVIEWCOLOR, // Light Mode下webview颜色
  defaultLightBgColor: DEFAULT_LIGHT_BGCOLOR, // Light Mode下背景颜色
  defaultLightTextColor: DEFAULT_LIGHT_TEXTCOLOR, // Light Mode下字体颜色
  defaultDarkWebviewColor: DEFAULT_DARK_WEBVIEWCOLOR, // Dark Mode下webview颜色
  defaultDarkBgColor: DEFAULT_DARK_BGCOLOR, // Dark Mode下背景颜色
  defaultDarkTextColor: DEFAULT_DARK_TEXTCOLOR, // Dark Mode下字体颜色
  setStyle: null, // 使用自定义的设置样式的方法
  setClass: null, // 使用自定义的设置类的方法
  setAttr: null, // 使用自定义的设置属性的方法
  getAttr: null, // 使用自定义的获取属性的方法
};

const config: Config = {
  hasInit: false, // 是否初始化过配置

  ...defaultConfig,

  // 设置配置
  set(type, opt, key) {
    const value = opt[key];
    switch (type) {
      case 'boolean':
        typeof value === 'boolean' && ((this[key] as boolean) = value);
        break;
      case 'string':
        typeof value === 'string' && value !== '' && ((this[key] as string) = value);
        break;
      case 'function':
        typeof value === 'function' && ((this[key] as Function) = value);
        break;
      case 'dom':
        value instanceof HTMLElement && ((this[key] as HTMLElement) = value);
        break;
      default:
    }
  },

  // 设置默认颜色
  setDefaultColor(opt) {
    this.set('string', opt, 'defaultLightWebviewColor');
    this.set('string', opt, 'defaultDarkWebviewColor');

    const newDefaultLightBgColor = mixColors([this.defaultLightWebviewColor, opt.defaultLightBgColor || this.defaultLightBgColor]);
    if (newDefaultLightBgColor) this.defaultLightBgColor = newDefaultLightBgColor.hex();

    const newDefaultDarkBgColor = mixColors([this.defaultDarkWebviewColor, opt.defaultDarkBgColor || this.defaultDarkBgColor]);
    if (newDefaultDarkBgColor) this.defaultDarkBgColor = newDefaultDarkBgColor.hex();

    const newDefaultLightTextColor = mixColors([this.defaultLightWebviewColor, this.defaultLightBgColor, opt.defaultLightTextColor || this.defaultLightTextColor]);
    if (newDefaultLightTextColor) this.defaultLightTextColor = newDefaultLightTextColor.hex();

    const newDefaultDarkTextColor = mixColors([this.defaultDarkWebviewColor, this.defaultDarkBgColor, opt.defaultDarkTextColor || this.defaultDarkTextColor]);
    if (newDefaultDarkTextColor) this.defaultDarkTextColor = newDefaultDarkTextColor.hex();
  },

  // 重置配置
  reset() {
    this.hasInit = false;
    Object.assign(this, defaultConfig);
  }
};

export const setStyle: SetStyle = (node, styles) => {
  if (config.setStyle === null) {
    Object.assign(node.style, styles);
  } else {
    config.setStyle(node, styles);
  }
}

const filterClass = (node: HTMLElement, className: string) => {
  return node.className.split(/\s+/).filter(cls => cls !== className);
}

export const setClass: SetClass = (node, className) => {
  if (config.setClass === null) {
    node.className = className;
  } else {
    config.setClass(node, className);
  }
}

export const addClass: SetClass = (node, className) => {
  if (config.setClass === null) {
    node.classList.add(className);
  } else {
    const clsArr = filterClass(node, className);
    clsArr.push(className);
    config.setClass(node, clsArr.join(' '));
  }
}

export const removeClass: SetClass = (node, className) => {
  if (config.setClass === null) {
    node.classList.remove(className);
  } else {
    config.setClass(node, filterClass(node, className).join(' '));
  }
}

export const setAttr: SetAttr = (node, attr, value) => {
  if (config.setAttr === null) {
    (node as any)[attr] = value;
  } else {
    config.setAttr(node, attr, value);
  }
}

export const removeAttr = (node: HTMLElement, attr: string) => {
  if (config.setAttr === null) {
    delete (node as any)[attr];
  } else {
    config.setAttr(node, attr, null);
  }
}

export const getAttr: GetAttr = (node, attr) => {
  return config.getAttr === null ? (node as any)[attr] : config.getAttr(node, attr);
}

export default config;
