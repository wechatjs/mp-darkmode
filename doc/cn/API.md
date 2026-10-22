[English](../en/API.md) | 简体中文

API
==============================

### `Darkmode.run(nodes[, options])`

- `nodes` &lt;HTMLElement[]&gt; 要进行 Dark Mode 转换的 DOM 节点数组。
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
  - `options.noEmit` &lt;boolean&gt; 是否不产出&lt;style&gt;，默认 `false`。
  - `options.container` &lt;HTMLElement&gt; 延迟运行 js 时使用的容器，默认 `null`。
  - `options.cssSelectorsPrefix` &lt;string&gt; css 选择器前缀，默认 `''`。
  - `options.defaultLightWebviewColor` &lt;string&gt; Light Mode 下 webview 颜色，默认 `#fff`。
  - `options.defaultLightBgColor` &lt;string&gt; Light Mode 下背景颜色，默认 `#fff`。
  - `options.defaultLightTextColor` &lt;string&gt; Light Mode 下字体颜色，默认 `#191919`。
  - `options.defaultDarkWebviewColor` &lt;string&gt; Dark Mode 下 webview 颜色，默认 `#000`。
  - `options.defaultDarkBgColor` &lt;string&gt; Dark Mode 下背景颜色，默认 `#191919`。
  - `options.defaultDarkTextColor` &lt;string&gt; Dark Mode 下字体颜色，默认 `#a3a3a3`。
  - `options.getStyle` &lt;Function&gt; 自定义「读取节点内联样式」的方法，默认 `null`（使用原生 DOM）。
  - `options.setStyle` &lt;Function&gt; 自定义「设置节点内联样式」的方法，默认 `null`（使用原生 DOM）。
  - `options.getClass` &lt;Function&gt; 自定义「读取节点 class」的方法，默认 `null`（使用原生 DOM）。
  - `options.setClass` &lt;Function&gt; 自定义「设置节点 class」的方法，默认 `null`（使用原生 DOM）。
  - `options.getAttr` &lt;Function&gt; 自定义「读取节点属性」的方法，默认 `null`（使用原生 DOM）。
  - `options.setAttr` &lt;Function&gt; 自定义「设置节点属性」的方法，默认 `null`（使用原生 DOM）。

> 以上 6 个钩子用于在**非标准浏览器环境**（如自定义渲染器、虚拟 DOM、SSR、编辑器等「类 DOM」对象）中接管算法对 DOM 的读写；不配置时全部走原生 DOM，行为不变。

初始化并运行 Dark Mode 转换算法。**注意：可多次运行转换算法，但配置只可设置一次。**

```javascript
Darkmode.run(document.body.querySelectorAll('*'), {
  mode: 'dark', // 强制指定深色模式
  ... // 其它配置项
});
```

### `Darkmode.init(options)`

- `options` 和 `Darkmode.run()` 中的 `options` 参数一致。

你也可以只初始化 Dark Mode 配置，后续等某个时间再运行转换算法。**注意：为了避免因不同配置而导致转换产出的差异，配置只可设置一次。**

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
  defaultLightWebviewColor: '#fff', // Light Mode 下 webview 颜色
  defaultLightBgColor: '#fff', // Light Mode 下背景颜色
  defaultLightTextColor: '#191919', // Light Mode 下字体颜色
  defaultDarkWebviewColor: '#000', // Dark Mode 下 webview 颜色
  defaultDarkBgColor: '#191919', // Dark Mode 下背景颜色
  defaultDarkTextColor: '#a3a3a3', // Dark Mode 下字体颜色
});
```

### `Darkmode.convertBg(nodes)`

- `nodes` &lt;HTMLElement[]&gt; 要处理的背景节点列表（可包含非背景节点）。

处理背景。当配置项中的 `delayBgJudge = true` 时，可手动指定运行背景判断的时机。

```javascript
Darkmode.convertBg(document.body.querySelectorAll('*'));
```

### `Darkmode.updateStyle(node, styles)`

- `node` &lt;HTMLElement&gt; 要更新的节点。
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

### `Darkmode.getDmBgColor(lmBgColor[, dmBgColorExist]) => dmBgColor`

- `lmBgColor` &lt;string&gt; 要转换的 Light Mode 背景色，支持 css 颜色格式。
- `dmBgColorExist` &lt;string&gt; 已有的 Dark Mode 背景底色，支持 css 颜色格式，默认为配置的 `defaultDarkBgColor`。
- return `dmBgColor` &lt;string | null&gt; 转换后的 Dark Mode 背景色；传入非法颜色时返回 `null`。

根据 Light Mode 背景色计算出 Dark Mode 背景色。**注意：需先调用 `Darkmode.init()` 或 `Darkmode.run()` 完成初始化，否则会打印警告并返回 `null`。**

```javascript
Darkmode.getDmBgColor('#fff'); // 由白色背景算出 Dark Mode 背景色
```

### `Darkmode.getDmFontColor(lmFontColor[, dmBgColor]) => dmFontColor`

- `lmFontColor` &lt;string&gt; 要转换的 Light Mode 字体色，支持 css 颜色格式。
- `dmBgColor` &lt;string&gt; 作为计算字体对比度的 Dark Mode 背景底色，支持 css 颜色格式，默认为配置的 `defaultDarkBgColor`。
- return `dmFontColor` &lt;string | null&gt; 转换后的 Dark Mode 字体色；传入非法颜色时返回 `null`。

根据 Light Mode 字体色和 Dark Mode 背景色计算出合适的 Dark Mode 字体色。**注意：需先调用 `Darkmode.init()` 或 `Darkmode.run()` 完成初始化，否则会打印警告并返回 `null`。**

```javascript
Darkmode.getDmFontColor('#191919'); // 由深色字体算出 Dark Mode 字体色
```

### `Darkmode.extend(pluginList)`

- `pluginList` &lt;Plugin Array&gt; 要挂载的插件列表。

挂载插件。

```javascript
Darkmode.extend([pluginA, pluginB, pluginC]);
```

### `Darkmode.reset(nodes)`

- `nodes` &lt;HTMLElement[]&gt; 已进行 Dark Mode 转换的 DOM 节点数组。

重置，会移除算法添加的 Dark Mode 样式，并卸载已挂载的插件。

```javascript
Darkmode.reset(document.body.querySelectorAll('*'));
```

### `Darkmode.validate(container[, options, filter])`

- `container` &lt;HTMLElement&gt; 要校验的容器节点。
- `options` &lt;Object&gt; 校验配置。
  - `options.minContrast` &lt;number&gt; 文字与背景色的最小对比度。
- `filter` &lt;Function&gt; 过滤器，返回 `true` 则跳过该节点。
  - `node` &lt;HTMLElement&gt; 被校验的节点。
- return `result` &lt;Object Array&gt; 校验不通过的结果列表。
  - `reselt[].dom` &lt;HTMLElement&gt; 校验不通过的节点。
  - `reselt[].key` &lt;string&gt; 校验不通过的原因。
  - `reselt[].violateRules` &lt;string&gt; 校验不通过的描述。

校验 Dark Mode 算法转换后的效果。

```javascript
const result = Darkmode.validate(document.body, {
  minContrast: 1.5
}, node => node.classList.has('dm-ignore'));
```

### `Darkmode.htmlClass`

- &lt;string&gt; 强制 Dark Mode（`mode: 'dark'`）时给 `<html>` 节点添加的 class 名。

对外暴露该常量，供调用方在需要自行控制 Dark Mode 开关时机时使用（例如编辑器场景，配合 `setClass` 钩子由调用方决定何时给 `<html>` 加/删该 class）。

```javascript
document.getElementsByTagName('html')[0].classList.add(Darkmode.htmlClass);
```
