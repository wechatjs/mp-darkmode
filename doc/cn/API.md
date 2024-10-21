[English](../en/API.md) | 简体中文

API
==============================

### `Darkmode.run(nodes[, options])`

- `nodes` &lt;DOM Object Array&gt; 要进行 Dark Mode 转换的 DOM 节点数组。
- `options` &lt;Object&gt; Dark Mode 转换算法配置项。
  - `options.begin` &lt;Function&gt; Dark Mode 转换开始时触发的回调。
    - `isSwitch` &lt;boolean&gt; 是否切换 Dark Mode 时进行转换。
  - `options.showFirstPage` &lt;Function&gt; 首屏处理完成时触发的回调。
  - `options.error` &lt;Function&gt; 发生 error 时触发的回调。
    - `err` &lt;Error&gt; 错误对象。
  - `options.mode` &lt;string&gt; 强制指定的颜色模式（ dark | light ），指定了就不监听系统颜色。
  - `options.whitelist` &lt;Object&gt; 节点白名单，在白名单内的 DOM 将不会被转换。
    - `options.whitelist.tagName` &lt;string Array&gt; 标签名列表。
    - `options.whitelist.attribute` &lt;string Array&gt; 属性列表。
  - `options.needJudgeFirstPage` &lt;boolean&gt; 是否需要判断首屏，默认 `true`。
  - `options.delayBgJudge` &lt;boolean&gt; 是否延迟背景判断，默认 `false`。
  - `options.container` &lt;DOM Object&gt; 延迟运行 js 时使用的容器，默认 `null`。
  - `options.cssSelectorsPrefix` &lt;string&gt; css 选择器前缀，默认 `''`。
  - `options.defaultLightTextColor` &lt;string&gt; 非 Dark Mode 下字体颜色，默认 `#191919`。
  - `options.defaultLightBgColor` &lt;string&gt; 非 Dark Mode 下背景颜色，默认 `#fff`。
  - `options.defaultDarkTextColor` &lt;string&gt; Dark Mode 下字体颜色，默认 `#a3a3a3`。
  - `options.defaultDarkBgColor` &lt;string&gt; Dark Mode 下背景颜色，默认 `#191919`。

运行 Dark Mode 转换算法。**注意：可多次运行转换，但配置只可设置一次。**

```javascript
Darkmode.run(document.body.querySelectorAll('*'), {
  mode: 'dark', // 强制指定深色模式
  ... // 其它配置项
});
```

### `Darkmode.init(options)`

- `options` 和 `Darkmode.run()` 中的 `options` 参数一致。

初始化 Dark Mode 配置。**注意：配置只可设置一次。**

```javascript
Darkmode.init({
  begin: isSwitch => { // Dark Mode 转换开始时触发的回调，isSwitch表示是否在切换 Dark Mode
    console.log('begin');
  },
  showFirstPage: () => { // 首屏处理完成时触发的回调
    console.log('showFirstPage');
  },
  error: err => { // 发生error时触发的回调，err为错误对象
    console.error(err);
  },
  mode: 'dark', // 强制指定深色模式
  whitelist: { // 节点白名单，在白名单内的 DOM 将不会被转换
    tagName: ['a'], // 不转换a标签节点
    attribute: ['data-no-dark'], // 不转换带data-no-dark属性的节点
  },
  needJudgeFirstPage: true, // 是否需要判断首屏
  delayBgJudge: false, // 是否延迟背景判断
  container: null, // 延迟运行 js 时使用的容器
  cssSelectorsPrefix: '', // css 选择器前缀
  defaultLightTextColor: '#191919', // 非 Dark Mode 下字体颜色
  defaultLightBgColor: '#fff', // 非 Dark Mode 下背景颜色
  defaultDarkTextColor: '#a3a3a3', // Dark Mode 下字体颜色
  defaultDarkBgColor: '#191919', // Dark Mode 下背景颜色
});
```

### `Darkmode.convertBg(nodes)`

- `nodes` &lt;DOM Object Array&gt; 要处理的背景节点列表（可包含非背景节点）。

处理背景。当配置项中的 `delayBgJudge = true` 时，可手动指定运行背景判断的时机。

```javascript
Darkmode.convertBg(document.body.querySelectorAll('*'));
```

### `Darkmode.updateStyle(node, styles)`

- `node` &lt;DOM Object&gt; 要更新的节点。
- `styles` &lt;Object&gt; 更新的样式键值对对象，如：`{ color: '#ddd' }`。

更新节点 Dark Mode 样式。

```javascript
Darkmode.updateStyle(node, {
  color: '#191919',
  backgroundColor: '#fff',
});
```

### `Darkmode.getContrast(color1, color2) => contrast`

- `color1` &lt;string&gt; 要计算颜色对比度的颜色1，支持css颜色格式。
- `color2` &lt;string&gt; 要计算颜色对比度的颜色2，支持css颜色格式。
- return `contrast` &lt;number&gt; 颜色对比度，取值范围为`[1, 21]`。

获取两个颜色的对比度。

```javascript
Darkmode.getContrast('#fff', '#000'); // return 21
```

### `Darkmode.extend(pluginList)`

- `pluginList` &lt;Plugin Array&gt; 要挂载的插件列表。

挂载插件。

```javascript
Darkmode.extend([pluginA, pluginB, pluginC]);
```
