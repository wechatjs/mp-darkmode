[English](../en/API.md) | 简体中文

API
==============================

### `Darkmode.run(nodes[, options])`

- `nodes` &lt;DOM Object Array&gt; 要进行Dark Mode转换的DOM节点数组。
- `options` &lt;Object&gt; Dark Mode转换算法配置项。
  - `options.error` &lt;Function&gt; 发生error时触发的回调。
    - `err` &lt;Error&gt; 错误对象。
  - `options.mode` &lt;string&gt; 强制指定的颜色模式（dark | light），指定了就不监听系统颜色。
  - `options.whitelist` &lt;Object&gt; 节点白名单，在白名单内的DOM将不会被转换。
    - `options.whitelist.tagName` &lt;string Array&gt; 标签名列表。
  - `options.needJudgeFirstPage` &lt;boolean&gt; 是否需要判断首屏，默认 `true`。
  - `options.delayBgJudge` &lt;boolean&gt; 是否延迟背景判断，默认 `false`。
  - `options.container` &lt;DOM Object&gt; 延迟运行js时使用的容器，默认 `null`。
  - `options.cssSelectorsPrefix` &lt;string&gt; css选择器前缀，默认 `''`。
  - `opt.defaultLightTextColor` &lt;string&gt; 非Dark Mode下字体颜色，默认 `#191919`。
  - `opt.defaultLightBgColor` &lt;string&gt; 非Dark Mode下背景颜色，默认 `#fff`。
  - `opt.defaultDarkTextColor` &lt;string&gt; Dark Mode下字体颜色，默认 `#a3a3a3`。
  - `opt.defaultDarkBgColor` &lt;string&gt; Dark Mode下背景颜色，默认 `#191919`。

运行Dark Mode转换算法。**注意：可多次运行转换，但配置只可设置一次。**

```javascript
Darkmode.run(document.body.querySelectorAll('*'), {
  mode: 'dark' // 强制指定深色模式
});
```

### `Darkmode.init(options)`

- `options` 和 `Darkmode.run` 中的 `options` 参数一致。

初始化Dark Mode配置。**注意：配置只可设置一次。**

```javascript
Darkmode.init({
  error: e => { // 发生error时
    console.log(e);
  },
  whitelist: {
    tagName: ['a'] // 不转换a标签
  }
});
```

### `Darkmode.convertBg(nodes)`

- `nodes` &lt;DOM Object Array&gt; 要处理的背景节点列表（可包含非背景节点）。

处理背景。当配置项中的 `delayBgJudge = true` 时，可手动指定运行背景判断的时机。

```javascript
Darkmode.convertBg(document.body.querySelectorAll('*'));
```
