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
}

export abstract class PluginAbstract extends PluginBaseAbstract {
  constructor();

  [PLUGIN_HOOK.BEFORE_CONVERT_NODE](...args: any[]): void;
  [PLUGIN_HOOK.AFTER_CONVERT_TEXT_COLOR](...args: any[]): void;
  [PLUGIN_HOOK.AFTER_CONVERT_NODE](...args: any[]): void;
  [PLUGIN_HOOK.BEFORE_CONVERT_NODE_BY_UPDATE_STYLE](...args: any[]): void;
  [PLUGIN_HOOK.AFTER_CONVERT_TEXT_COLOR_BY_UPDATE_STYLE](...args: any[]): void;
  [PLUGIN_HOOK.AFTER_CONVERT_NODE_BY_UPDATE_STYLE](...args: any[]): void;
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
  run: (nodes: HTMLElement[], opt?: ConfigOption) => void;
  init: (opt?: ConfigOption) => void;
  convertBg: (nodes: HTMLElement[]) => void;
  updateStyle: (node: HTMLElement, styles: Record<string, string>) => void;
  getContrast: (color1: string, color2: string) => number;
  extend: (pluginList: PluginConstructor[]) => void;
  reset: (nodes: HTMLElement[]) => void;
  validate: (container: HTMLElement, opt: ValidateOption, filter?: ValidateFilter) => ValidateResult[];
}
