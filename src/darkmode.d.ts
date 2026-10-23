// getStyle 的 prop 取值：
// - 'cssText'：读取整串内联样式（算法从内联样式提取 cssKVList 时使用）
// - 单个样式属性，统一为【驼峰】写法，如 'color' / 'visibility' / 'display' / 'backgroundImage' / 'webkitBorderImage' / 'borderImage'
// 自定义 getStyle 时必须同时支持 'cssText' 整串与上述驼峰单属性，否则会导致样式提取失败、转换静默失效
export type GetStyleProp = 'cssText' | (string & {});
export type GetStyle = (node: HTMLElement, prop: GetStyleProp) => string;
export type SetStyle = (node: HTMLElement, styles: Record<string, string>) => void;
export type GetClass = (node: HTMLElement) => string;
export type SetClass = (node: HTMLElement, className: string) => void;
export type GetAttr = (node: HTMLElement, attr: string) => any;
export type SetAttr = (node: HTMLElement, attr: string, value: any) => void;

export interface ConfigOption {
  begin?: ((isSwitch: boolean) => void) | null;
  showFirstPage?: (() => void) | null;
  error?: ((err: Error) => void) | null;
  mode?: string;
  whitelist?: {
    tagName?: string[];
    attribute?: string[];
  };
  needJudgeFirstPage?: boolean;
  delayBgJudge?: boolean;
  noEmit?: boolean;
  container?: HTMLElement | null;
  cssSelectorsPrefix?: string;
  defaultLightWebviewColor?: string;
  defaultLightBgColor?: string;
  defaultLightTextColor?: string;
  defaultDarkWebviewColor?: string;
  defaultDarkBgColor?: string;
  defaultDarkTextColor?: string;
  getStyle?: GetStyle | null;
  setStyle?: SetStyle | null;
  getClass?: GetClass | null;
  setClass?: SetClass | null;
  getAttr?: GetAttr | null;
  setAttr?: SetAttr | null;
}

export type KvList = {
  key: string;
  value: string;
}[];

export abstract class PluginBaseAbstract {
  constructor();

  get loopTimes(): number;
  get isDarkmode(): boolean;

  addCss(className: string, kvList: KvList, needMediaQuery?: boolean): void;
}

export enum PLUGIN_HOOK { // 插件钩子
  BEFORE_CONVERT_NODE = 'beforeConvertNode',
  AFTER_CONVERT_TEXT_COLOR = 'afterConvertTextColor',
  AFTER_CONVERT_NODE = 'afterConvertNode',
  BEFORE_CONVERT_NODE_BY_UPDATE_STYLE = 'beforeConvertNodeByUpdateStyle',
  AFTER_CONVERT_TEXT_COLOR_BY_UPDATE_STYLE = 'afterConvertTextColorByUpdateStyle',
  AFTER_CONVERT_NODE_BY_UPDATE_STYLE = 'afterConvertNodeByUpdateStyle',
  BEFORE_CONVERT_NODE_BY_RESET = 'beforeConvertNodeByReset',
  AFTER_CONVERT_TEXT_COLOR_BY_RESET = 'afterConvertTextColorByReset',
  AFTER_CONVERT_NODE_BY_RESET = 'afterConvertNodeByReset',
}

export abstract class PluginAbstract extends PluginBaseAbstract {
  constructor();

  [PLUGIN_HOOK.BEFORE_CONVERT_NODE](...args: any[]): void;
  [PLUGIN_HOOK.AFTER_CONVERT_TEXT_COLOR](...args: any[]): void;
  [PLUGIN_HOOK.AFTER_CONVERT_NODE](...args: any[]): void;
  [PLUGIN_HOOK.BEFORE_CONVERT_NODE_BY_UPDATE_STYLE](...args: any[]): void;
  [PLUGIN_HOOK.AFTER_CONVERT_TEXT_COLOR_BY_UPDATE_STYLE](...args: any[]): void;
  [PLUGIN_HOOK.AFTER_CONVERT_NODE_BY_UPDATE_STYLE](...args: any[]): void;
  [PLUGIN_HOOK.BEFORE_CONVERT_NODE_BY_RESET](...args: any[]): void;
  [PLUGIN_HOOK.AFTER_CONVERT_TEXT_COLOR_BY_RESET](...args: any[]): void;
  [PLUGIN_HOOK.AFTER_CONVERT_NODE_BY_RESET](...args: any[]): void;
}

export type PluginConstructor = (plugin: typeof PluginBaseAbstract) => new () => PluginAbstract;

export interface ValidateOption {
  minContrast?: number;
}
export type ValidateFilter = (node: HTMLElement) => boolean;
export interface ValidateResult {
  dom: HTMLElement;
  key: string;
  violateRules: string;
}

export interface DarkMode {
  run: (nodes: HTMLElement[], opt?: ConfigOption, container?: HTMLElement) => void;
  init: (opt?: ConfigOption) => void;
  convertBg: (nodes: HTMLElement[]) => void;
  updateStyle: (node: HTMLElement, styles: Record<string, string>) => void;
  getContrast: (color1: string, color2: string) => number;
  getDmBgColor: (lmBgColor: string, dmBgColorExist?: string) => string | null;
  getDmFontColor: (lmFontColor: string, dmBgColor?: string) => string | null;
  extend: (pluginList: PluginConstructor[]) => void;
  reset: (nodes: HTMLElement[]) => void;
  validate: (container: HTMLElement, opt: ValidateOption, filter?: ValidateFilter) => ValidateResult[];
  htmlClass: string;
}
