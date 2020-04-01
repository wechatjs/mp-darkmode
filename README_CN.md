[English](./README.md) | 简体中文

mp-darkmode
==============================
[![NPM version][npm-image]][npm-url]

微信公众平台图文 Dark Mode 转换算法。

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

## 基本用法

### `Darkmode.run(nodes[, options])`

- `nodes` &lt;DOM Object Array&gt; 要进行Dark Mode转换的DOM节点数组。
- `options` &lt;Object&gt; Dark Mode转换算法配置项。
  - `options.error` &lt;Function&gt; 发生error时触发的回调。
    - `err` &lt;Error&gt; 错误对象。
  - `options.mode` &lt;string&gt; 强制指定的颜色模式（dark | light），指定了就不监听系统颜色。

运行Dark Mode转换算法。

```javascript
Darkmode.run(document.body.querySelectorAll('*'), {
  mode: 'dark' // 强制指定深色模式
});
```

更多详细用法可参考[API](./doc/cn/API.md)。

## 处理原则

详见[图文富文本内容 Dark Mode 处理原则](./doc/cn/principle.md)。

## 贡献

算法持续更新优化中，如果你有好的想法，可以 Fork 本项目后提交你的代码，具体开发可参考[开发手册](./doc/cn/develop.md)。

[npm-url]: https://www.npmjs.com/package/mp-darkmode
[npm-image]: https://img.shields.io/npm/v/mp-darkmode.svg
