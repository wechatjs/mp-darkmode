English | [简体中文](../cn/API.md)

API
==============================

### `Darkmode.run(nodes[, options])`

- `nodes` &lt;HTMLElement[]&gt; The DOM to be converted.
- `options` &lt;Object&gt; Configuration.
  - `options.begin` &lt;Function&gt; Callback triggered when Dark Mode conversion starts.
    - `isSwitch` &lt;boolean&gt; Whether to switch to Dark Mode.
  - `options.showFirstPage` &lt;Function&gt; Callback triggered when the first page render finish.
  - `options.error` &lt;Function&gt; Callback triggered when an error occurs.
    - `err` &lt;Error&gt; Error object.
  - `options.mode` &lt;string&gt; The specified color mode (dark | light), if specified, the system color will not be monitored.
  - `options.whitelist` &lt;Object&gt; The DOM in whitelist will not be processed.
    - `options.whitelist.tagName` &lt;string Array&gt; The whitelist for tag name.
    - `options.whitelist.attribute` &lt;string Array&gt; The whitelist for attributes.
  - `options.needJudgeFirstPage` &lt;boolean&gt; Whether to judge the first screen. Default `true`.
  - `options.delayBgJudge` &lt;boolean&gt; Whether to delay background judgment. Default `false`.
  - `options.container` &lt;HTMLElement&gt; The container to use when delaying running js. Default `null`.
  - `options.cssSelectorsPrefix` &lt;string&gt; Css selector prefix. Default `''`.
  - `opt.defaultLightWebviewColor` &lt;string&gt; Webview color in Light Mode. Default `#fff`.
  - `opt.defaultLightBgColor` &lt;string&gt; Background color in Light Mode. Default `#fff`.
  - `opt.defaultLightTextColor` &lt;string&gt; Font color in Light Mode. Default `#191919`.
  - `opt.defaultDarkWebviewColor` &lt;string&gt; Webview color in Dark Mode. Default `#000`.
  - `opt.defaultDarkBgColor` &lt;string&gt; Background color in Dark Mode. Default `#191919`.
  - `opt.defaultDarkTextColor` &lt;string&gt; Font color in Dark Mode. Default `#a3a3a3`.

Init and run Dark Mode conversion algorithm. **Note: The conversion can be run multiple times, but it can only be initialized once.**

```javascript
Darkmode.run(document.body.querySelectorAll('*'), {
  mode: 'dark', // force dark mode
  ... // other configuration items
});
```

### `Darkmode.init(options)`

- `options` Same as the `options` parameter in `Darkmode.run()`.

You can also simply initialize the Dark Mode configuration, and run the conversion at another time. **Note: To avoid differences in conversion output due to different configurations, the configuration can only be set once.**

```javascript
Darkmode.init({
  begin: isSwitch => { // callback triggered when Dark Mode conversion starts. The isSwitch means whether to switch to Dark Mode
    console.log('begin');
  },
  showFirstPage: () => { // callback triggered when the first page render finish
    console.log('showFirstPage');
  },
  error: err => { // an error occurred
    console.log(err);
  },
  mode: 'dark', // force dark mode
  whitelist: {
    tagName: ['a'], // ignore <a>
    attribute: ['data-no-dark'], // ignore data-no-dark attribute
  },
  needJudgeFirstPage: true, // whether to judge the first screen
  delayBgJudge: false, // whether to delay background judgment
  container: null, // the container to use when delaying running js
  cssSelectorsPrefix: '', // css selector prefix
  defaultLightWebviewColor: '#fff', // webview color in Light Mode
  defaultLightBgColor: '#fff', // background color in Light Mode
  defaultLightTextColor: '#191919', // font color in Light Mode
  defaultDarkWebviewColor: '#000', // webview color in Dark Mode
  defaultDarkBgColor: '#191919', // background color in Dark Mode
  defaultDarkTextColor: '#a3a3a3', // font color in Dark Mode
});
```

### `Darkmode.convertBg(nodes)`

- `nodes` &lt;HTMLElement[]&gt; List of background nodes to be processed (may contain non-background nodes).

Processing background. When `delayBgJudge = true` in the configuration item, you can manually specify the timing to run the background judgment.

```javascript
Darkmode.convertBg(document.body.querySelectorAll('*'));
```

### `Darkmode.updateStyle(node, styles)`

- `node` &lt;HTMLElement&gt; The node to be updated.
- `styles` &lt;Object&gt; The key-value pair object to be updated. eg: `{ color: '#ddd' }`.

Update the Dark Mode style of the specified node.

```javascript
Darkmode.updateStyle(node, {
  color: '#191919',
  backgroundColor: '#fff',
});
```

### `Darkmode.getContrast(color1, color2) => contrast`

- `color1` &lt;string&gt; The color used to calculate color contrast, supports CSS color format.
- `color2` &lt;string&gt; The color used to calculate color contrast, supports CSS color format.
- return `contrast` &lt;number&gt; The color contrast, its value range is `[1, 21]`.

Get the contrast between two colors.

```javascript
Darkmode.getContrast('#fff', '#000'); // return 21
```

### `Darkmode.extend(pluginList)`

- `pluginList` &lt;Plugin Array&gt; List of plugins to mount.

Mount the plugin.

```javascript
Darkmode.extend([pluginA, pluginB, pluginC]);
```
