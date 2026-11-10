[English](./README.md) | 简体中文

mp-darkmode
==============================
[![NPM version][npm-image]][npm-url]

微信公众平台 Dark Mode 转换算法。

## 安装

### 1. 下载模块

下载[最新版本](https://github.com/wechatjs/mp-darkmode/releases)。

或者通过 `npm` 安装：

```shell
npm i mp-darkmode
```

### 2. 引入模块

(1) 如果未使用 AMD/CMD 规范，可直接在 HTML 中以 `<script>` 方式引入模块：

```html
<script src="path/to/darkmode.min.js"></script>
<script>
  // 运行Dark Mode转换算法
  Darkmode.run(document.body.querySelectorAll('*')); // 处理body下的所有DOM节点
</script>
```

(2) 如果使用了 AMD/CMD 规范，可使用 `require()` 方式引入模块：

```javascript
var Darkmode = require('path/to/darkmode.min.js');

// 运行Dark Mode转换算法
Darkmode.run(document.body.querySelectorAll('*')); // 处理body下的所有DOM节点
```

### 3. TypeScript 类型

包内自带类型声明（`dist/darkmode.d.ts`），安装后无需额外安装 `@types` 即可获得类型提示：

```typescript
import Darkmode, { run, type ConfigOption } from 'mp-darkmode';
// 未开启 esModuleInterop 时改用：`import * as Darkmode from 'mp-darkmode'` 或具名导入

const opt: ConfigOption = { mode: 'dark' };
Darkmode.run([], opt);
run([]);
```

> 产物为 UMD 且不带 `__esModule` 标记，若未开启 `esModuleInterop`（或 `allowSyntheticDefaultImports`），
> `import Darkmode from 'mp-darkmode'` 在编译期可用、运行期需走 interop，请改用 `import * as Darkmode` 或具名导入。

## 基本用法

### `Darkmode.run(nodes[, options, container])`

- `nodes` &lt;HTMLElement[]&gt; 要进行 Dark Mode 转换的 DOM 节点数组。
- `options` &lt;Object&gt; Dark Mode 转换算法配置项。
  - `options.error` &lt;Function&gt; 发生 error 时触发的回调。
    - `err` &lt;Error&gt; 错误对象。
  - `options.mode` &lt;string&gt; 强制指定的颜色模式（`dark` | `light`），指定后不再监听系统颜色。
  - ...
  - ...
  - ...
- `container` &lt;HTMLElement&gt; 新增节点所属的容器节点，传入时会从该容器的祖先链重建样式继承关系。

运行 Dark Mode 转换算法。

```javascript
Darkmode.run(document.body.querySelectorAll('*'), {
  mode: 'dark', // 强制指定深色模式
  ... // 其它配置项
});
```

更多详细用法可参考 [API](./doc/cn/API.md)。

## 插件

从 `v1.1.0` 开始支持插件，可以在转换过程中进行自定义操作，比如过滤 DOM 属性。插件的使用方法如下：

```javascript
Darkmode.extend([pluginA, pluginB, pluginC]);
```

如果你想编写自己的 Dark Mode 插件，可以参考[这里](./doc/cn/plugins.md)。

## 处理原则

详见[Dark Mode 处理原则](./doc/cn/principle.md)。

## 最佳实践

详见[Dark Mode 最佳实践](./doc/cn/bestPractices.md)。

## 升级到 2.0.0

从 `1.x` 升级前请阅读[升级指南](./doc/cn/upgrade-to-v2.md)，其中列出了 breaking changes 与适配方案。

## 贡献

算法持续更新优化中，如果你有好的想法，可以 Fork 本项目后提交你的代码，具体开发可参考[开发手册](./doc/cn/develop.md)。

[npm-url]: https://www.npmjs.com/package/mp-darkmode
[npm-image]: https://img.shields.io/npm/v/mp-darkmode.svg
