[English](../en/upgrade-to-v2.md) | 简体中文

# 升级到 2.0.0

本文面向从 **`1.2.2`（最后一个 1.x 正式版）** 升级到 **`2.0.0`** 的业务方。

2.0.0 是一次底层重构：整个项目用 TypeScript 重写、颜色库从 `color` 换成 `colorjs.io`、透明度 / 渐变 / 图片补色的转换规则重做，并开放校验、重置、颜色转换与 DOM 钩子等能力。完整的 21 项变更见 [Release Notes](./v2.0.0.html) 与 GitHub Releases；本文只列**会导致现有代码报错或转换结果变化**的部分，以及对应适配方案。

> 如果直接从 `1.2.3-alpha.*` / `2.0.0-alpha.*` 升级，见文末「从预发布版本升级」。

## 升级检查清单

1. `npm i mp-darkmode@2.0.0`
2. 全局搜索 `.rgb().array()`、`.hex()`、`.alpha()`、`from 'color'`，按 **B1 / B2** 改
3. TypeScript 项目按 **B5** 调整导入方式，删除自己写的 `declare module 'mp-darkmode'`
4. 如果依赖 1.x 的默认深色字色，按 **B3** 显式配置
5. 按 **B4** 重跑真实文章回归、重做截图基线、清理缓存的转换结果
6. 评估是否要接入新增能力（文末「新增能力」）

## Breaking Changes

### B1. 颜色对象从 `color` 库实例变成 `colorjs.io` 实例

**影响面**：插件钩子 `afterConvertTextColor(el, opt)` 的 `opt.fontColor` / `opt.bgColor`；通过自定义 `getAttr` / `setAttr` 钩子读到的 `data-darkmode-*` expando 值。

1.x 里这些值是 `color` 库实例，常见写法在 2.0.0 会直接抛错：

```javascript
// 1.x：2.0.0 中这些方法都不存在
opt.fontColor.rgb().array();
opt.fontColor.hex();
opt.fontColor.alpha();
opt.fontColor.toString(); // colorjs.io 可能输出 hsl() / 百分比等老 webview 不支持的写法
```

**适配**：统一用新增的 `Darkmode.colorToCssString()` 转成 `rgb()` / `rgba()` 字符串，不要依赖颜色对象的内部字段。

```javascript
export default function (Plugin) {
  return class extends Plugin {
    afterConvertTextColor(el, opt) {
      if (!opt.fontColor) return; // 算法算不出前景色时为 null
      const fontColor = Darkmode.colorToCssString(opt.fontColor); // 'rgb(128, 127, 127)'
      const bgColor = Darkmode.colorToCssString(opt.bgColor);
      // 后续逻辑基于 css 字符串处理
    }
  };
}
```

如果需要 RGB 数值，解析这个字符串即可；也可以自行引入 `colorjs.io` 处理，但**不要**假设对象上还有 `color` 库的方法。详见 [插件文档](./plugins.md)。

### B2. 移除 `color` 依赖

1.x 的 `dependencies` 里有 `"color": "^3.1.2"`，2.0.0 移除后改为：

| 依赖 | 1.2.2 | 2.0.0 |
| --- | --- | --- |
| `color` | `^3.1.2` | 移除 |
| `color-name` | `^1.1.4` | `^2.1.0` |
| `colorjs.io` | — | `^0.6.1` |
| `color-blend` | `^4.0.0` | `^4.0.0` |
| `object.hasown` | — | `^1.1.4` |

如果业务代码曾经依赖 npm 的依赖提升、直接 `import Color from 'color'`，升级后会找不到模块。

**适配**：显式安装 `npm i color@^3`，或改用 `Darkmode.colorToCssString()` / 自行引入 `colorjs.io`。

> 两个版本的 `files` 都只发布 `dist` / `doc`，不含 `src`，因此不存在「deep import `mp-darkmode/src/modules/color.js`」这种受支持用法。若 fork 了仓库自行构建，内部模块已由 `.js` 改为 `.ts`，需要一并调整构建脚本。

### B3. 默认深色前景色变化，且新增 webview 色参与默认色混合

| 配置 | 1.2.2 | 2.0.0 |
| --- | --- | --- |
| `defaultDarkTextColor` | `#a3a3a3` | `rgba(255,255,255,0.6)` |
| `defaultLightWebviewColor` | — | `#fff` |
| `defaultDarkWebviewColor` | — | `#191919` |

2.0.0 的 `setDefaultColor()` 会把 **webview 色 → 背景色 → 字色** 逐级混合，且所有颜色配置项都支持透明度写法。因此未显式配置时，默认色与 1.x 不同。

**适配**：如需对齐 1.x 的输入默认值，显式传入：

```javascript
Darkmode.run(nodes, {
  defaultDarkTextColor: '#a3a3a3',
  defaultLightWebviewColor: '#fff',
  defaultDarkWebviewColor: '#191919'
});
```

**注意**：这只能对齐「输入」，**无法完全恢复 1.x 的视觉输出** —— 转换算法本身已重做（见 B4），且半透明色值仍会参与 webview / 背景色混合。

### B4. 转换结果发生变化（视觉层面的 breaking）

以下规则重做，同一段内容在 2.0.0 下产生的 CSS 会与 1.x 不同：

- 全链路改造透明度计算规则
- 渐变底色改用「实际写进样式」的色值参与计算；渐变各 color stop 的转换结果统一，渐变被拍平为纯色
- 图片补色区分黑白灰与彩色（前者用 Light Mode 原色，后者用转换后的 Dark Mode 色），且背景图上方的节点不再跳过 Dark Mode 转换
- 新增 `lch()` / `oklch()` / `lab()` / `oklab()` / `color()` 颜色模型支持

**影响**：

- 缓存了 1.x 转换结果（HTML / CSS / class 名）的业务需重新生成
- 截图对比、视觉回归基线要重做
- 依赖 `Darkmode.getContrast()` 精确数值的断言需要留容差（2.0.0 改为按 WCAG 相对亮度自行实现，不再走 `color` 库的 `.contrast()`；常规色值结果基本一致，非法入参仍返回 `0`）

**适配**：用真实文章跑一轮回归，工具用法见 [开发手册](./develop.md)：

```shell
npm run dm-check -- "https://mp.weixin.qq.com/s/xxxx"
```

### B5. 类型声明随包发布，需要调整 TS 集成方式

2.0.0 新增 `types: dist/darkmode.d.ts`（`package.json` 的 `files` 含 `dist`），不再需要 `@types` 包。

- 如果项目里自己写过 `declare module 'mp-darkmode'`，会与官方声明冲突，**删除自定义声明**
- 产物是 UMD 且入口没有 `__esModule` 标记，`import Darkmode from 'mp-darkmode'` 需要开启 `esModuleInterop` / `allowSyntheticDefaultImports`；未开启时改用命名空间或具名导入：

```typescript
import * as Darkmode from 'mp-darkmode';
// 或
import { run, type ConfigOption } from 'mp-darkmode';

const opt: ConfigOption = { mode: 'dark' };
run([], opt);
```

## 新增能力（非 breaking，无需改代码）

| 类别 | 内容 |
| --- | --- |
| 新 API | `validate()`、`reset()`、`getDmBgColor()`、`getDmFontColor()`、`colorToCssString()`、`htmlClass` |
| `run` 第三参数 | `run(nodes, opt, container)`：往 `container` 插入新节点时重建样式继承关系（粘贴等增量场景） |
| DOM 钩子 | `getStyle`、`setStyle`、`getClass`、`setClass`、`getAttr`、`setAttr`，默认 `null` 走原生 DOM |
| 新配置 | `noEmit`；颜色配置支持透明度写法 |
| 校验豁免 | 节点级 `data-ignore-dm="low-contrast text-bg-gradient"`；全文级 `validate()` 的 `opt.ignoreRules` |

**构建环境**：`package.json` 新增 `engines.node >= 23.11.0`、`packageManager: npm@10.9.2`，且 `build` / `dev` / `genDemo` 前会校验环境。这**只影响从源码构建**（fork / 贡献者），消费 npm 包的项目不受影响。

## 从预发布版本升级

`1.2.3-alpha.*` 与 `2.0.0-alpha.*` 属于开发版本，不保证兼容性，请以本文和 [API 文档](./API.md) 为准。与较晚的 alpha 相比，正式版还应留意：

- `validate()` 的 `darkmode-low-contrast` 现在只在**转换后对比度低于 `opt.minContrast` 且比 Light Mode 更差**时告警；原文自身就低对比度的内容不再算算法违规
- `validate()` 新增 `opt.ignoreRules`，与节点级 `data-ignore-dm` 取值一致、对全文生效，两者取并集
- `validate()` 的 `darkmode-whitelist` / `darkmode-no-gradient` 规则在部分 alpha 中曾被临时关闭，正式版已恢复
