// getStyle 的 prop 取值：
// - 'cssText'：读取整串内联样式（算法从内联样式提取 cssKVList 时使用）
// - 单个样式属性，统一为【驼峰】写法，如 'color' / 'visibility' / 'display' / 'backgroundImage' / 'webkitBorderImage' / 'borderImage'
// 自定义 getStyle 时必须同时支持 'cssText' 整串与上述驼峰单属性，否则会导致样式提取失败、转换静默失效
export type GetStyleProp = 'cssText' | (string & {});

// 算法内部的颜色对象（结构由内部颜色库决定，对外只作透传，不建议业务依赖其字段）
export type ColorObject = object;
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
  // 全文生效的忽略规则，取值与节点的 data-ignore-dm 一致（low-contrast / text-bg-gradient），空格分隔
  ignoreRules?: string;
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
  colorToCssString: (color: ColorObject) => string;
  extend: (pluginList: PluginConstructor[]) => void;
  reset: (nodes: HTMLElement[]) => void;
  validate: (container: HTMLElement, opt?: ValidateOption, filter?: ValidateFilter) => ValidateResult[];
  htmlClass: string;
}

// --- 以下为运行时导出声明（与 src/darkmode.ts 的 export 一一对应） ---
// 说明：dist 产物为 UMD，且入口处没有 __esModule 标记，因此：
// 1. `import Darkmode from 'mp-darkmode'` 仅在开启 esModuleInterop / allowSyntheticDefaultImports 时可用；
// 2. 未开启时请用 `import * as Darkmode from 'mp-darkmode'` 或具名导入。

// 具名导出：import { run, init, ConfigOption } from 'mp-darkmode'
export declare function run(nodes: HTMLElement[], opt?: ConfigOption, container?: HTMLElement): void;
export declare function init(opt?: ConfigOption): void;
export declare function convertBg(nodes: HTMLElement[]): void;
export declare function updateStyle(node: HTMLElement, styles: Record<string, string>): void;
export declare function getContrast(color1: string, color2: string): number;
export declare function getDmBgColor(lmBgColor: string, dmBgColorExist?: string): string | null;
export declare function getDmFontColor(lmFontColor: string, dmBgColor?: string): string | null;
export declare function colorToCssString(color: ColorObject): string;
export declare function extend(pluginList: PluginConstructor[]): void;
export declare function reset(nodes: HTMLElement[]): void;
export declare function validate(container: HTMLElement, opt?: ValidateOption, filter?: ValidateFilter): ValidateResult[];
export declare const htmlClass: string;

// 默认导出：import Darkmode from 'mp-darkmode'
declare const Darkmode: DarkMode;
export default Darkmode;

// UMD 全局：直接以 <script> 引入 dist/darkmode.min.js 时挂到 window 上的变量
declare global {
  const Darkmode: DarkMode;
}
