English | [简体中文](../cn/API.md)

API
==============================

### `Darkmode.run(nodes[, options, container])`

- `nodes` &lt;HTMLElement[]&gt; The DOM to be converted.
- `options` &lt;Object&gt; Configuration.
  - `options.begin` &lt;Function&gt; Callback triggered when Dark Mode conversion starts.
    - `isSwitch` &lt;boolean&gt; Whether to switch to Dark Mode.
  - `options.showFirstPage` &lt;Function&gt; Callback triggered when the first page has finished rendering.
  - `options.error` &lt;Function&gt; Callback triggered when an error occurs.
    - `err` &lt;Error&gt; Error object.
  - `options.mode` &lt;string&gt; The color mode to force (`dark` or `light`). If set, the system color scheme is not monitored.
  - `options.whitelist` &lt;Object&gt; The DOM in whitelist will not be processed.
    - `options.whitelist.tagName` &lt;string Array&gt; The whitelist for tag name.
    - `options.whitelist.attribute` &lt;string Array&gt; The whitelist for attributes.
  - `options.needJudgeFirstPage` &lt;boolean&gt; Whether to judge the first screen. Default `true`.
  - `options.delayBgJudge` &lt;boolean&gt; Whether to delay background judgment. Default `false`.
  - `options.noEmit` &lt;boolean&gt; Whether to skip generating &lt;style&gt;. Default `false`.
  - `options.container` &lt;HTMLElement&gt; The container to use when the conversion is delayed. Default `null`.
  - `options.cssSelectorsPrefix` &lt;string&gt; CSS selector prefix. Default `''`.
  - `options.defaultLightWebviewColor` &lt;string&gt; Webview color in Light Mode. Default `#fff`.
  - `options.defaultLightBgColor` &lt;string&gt; Background color in Light Mode. Default `#fff`.
  - `options.defaultLightTextColor` &lt;string&gt; Font color in Light Mode. Default `#191919`.
  - `options.defaultDarkWebviewColor` &lt;string&gt; Webview color in Dark Mode. Default `#000`.
  - `options.defaultDarkBgColor` &lt;string&gt; Background color in Dark Mode. Default `#191919`.
  - `options.defaultDarkTextColor` &lt;string&gt; Font color in Dark Mode. Default `#a3a3a3`.
  - `options.getStyle` &lt;Function&gt; Custom method to read a node's inline style. Default `null` (use native DOM).
  - `options.setStyle` &lt;Function&gt; Custom method to set a node's inline style. Default `null` (use native DOM).
  - `options.getClass` &lt;Function&gt; Custom method to read a node's class. Default `null` (use native DOM).
  - `options.setClass` &lt;Function&gt; Custom method to set a node's class. Default `null` (use native DOM).
  - `options.getAttr` &lt;Function&gt; Custom method to read a node's attribute. Default `null` (use native DOM).
  - `options.setAttr` &lt;Function&gt; Custom method to set a node's attribute. Default `null` (use native DOM).
- `container` &lt;HTMLElement&gt; The container the newly added nodes belong to. When provided, the style inheritance context is rebuilt from this container's ancestor chain (for incremental / paste scenarios).

> The 6 hooks above let you take over how the algorithm reads/writes the DOM in **non-standard browser environments** (e.g. custom renderers, virtual DOM, SSR, editors and other "DOM-like" objects). When not configured, everything falls back to native DOM and behaves as before.

Initialize and run the Dark Mode conversion algorithm. **Note: the conversion can be run multiple times, but initialization can only happen once.**

```javascript
Darkmode.run(document.body.querySelectorAll('*'), {
  mode: 'dark', // force dark mode
  ... // other configuration items
});
```

### `Darkmode.init(options)`

- `options` Same as the `options` parameter in `Darkmode.run()`.

You can also simply initialize the Dark Mode configuration, and run the conversion later. **Note: To avoid differences in conversion output due to different configurations, the configuration can only be set once.**

```javascript
Darkmode.init({
  begin: isSwitch => { // callback triggered when Dark Mode conversion starts. The isSwitch means whether to switch to Dark Mode
    console.log('begin');
  },
  showFirstPage: () => { // callback triggered when the first page has finished rendering
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

Process background areas. When `delayBgJudge` is `true`, you can decide yourself when the background judgment runs.

```javascript
Darkmode.convertBg(document.body.querySelectorAll('*'));
```

### `Darkmode.updateStyle(node, styles)`

- `node` &lt;HTMLElement&gt; The node to be updated.
- `styles` &lt;Object&gt; The styles to update, as a key-value object. e.g. `{ color: '#ddd' }`.

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
- return `contrast` &lt;number&gt; The color contrast, in the range `[1, 21]`.

Get the contrast between two colors.

```javascript
Darkmode.getContrast('#fff', '#000'); // returns 21
```

### `Darkmode.getDmBgColor(lmBgColor[, dmBgColorExist]) => dmBgColor`

- `lmBgColor` &lt;string&gt; The Light Mode background color to be converted, supports CSS color format.
- `dmBgColorExist` &lt;string&gt; The existing Dark Mode base background color, supports CSS color format. Defaults to the configured `defaultDarkBgColor`.
- return `dmBgColor` &lt;string | null&gt; The converted Dark Mode background color; returns `null` when an invalid color is passed in.

Calculate the Dark Mode background color from a Light Mode background color. **Note: `Darkmode.init()` or `Darkmode.run()` must be called first; otherwise it prints a warning and returns `null`.**

```javascript
Darkmode.getDmBgColor('#fff'); // calculate Dark Mode background color from white
```

### `Darkmode.getDmFontColor(lmFontColor[, dmBgColor]) => dmFontColor`

- `lmFontColor` &lt;string&gt; The Light Mode font color to be converted, supports CSS color format.
- `dmBgColor` &lt;string&gt; The Dark Mode base background color used to compute font contrast, supports CSS color format. Defaults to the configured `defaultDarkBgColor`.
- return `dmFontColor` &lt;string | null&gt; The converted Dark Mode font color; returns `null` when an invalid color is passed in.

Calculate a suitable Dark Mode font color from a Light Mode font color and a Dark Mode background color. **Note: `Darkmode.init()` or `Darkmode.run()` must be called first; otherwise it prints a warning and returns `null`.**

```javascript
Darkmode.getDmFontColor('#191919'); // calculate Dark Mode font color from a dark font color
```

### `Darkmode.colorToCssString(color) => cssColor`

- `color` &lt;object&gt; An internal color object: for example the values stored in a node's `data-darkmode-*` attributes, or the `fontColor` / `bgColor` passed to plugin hook callbacks.
- return `cssColor` &lt;string&gt; The converted CSS color, always in `rgb()` / `rgba()` form.

Convert a color object to a CSS color string. `toString()` on these objects may output `hsl()` or percentage notations that older webviews do not support; this method always returns `rgb()` / `rgba()`.

```javascript
// read the colors stored by the algorithm when debugging
Object.keys(el).forEach((key) => {
  if (key.indexOf('data-darkmode-color-') === 0) {
    console.log(Darkmode.colorToCssString(el[key])); // 'rgb(128, 127, 127)'
  }
});
```

### `Darkmode.extend(pluginList)`

- `pluginList` &lt;Plugin Array&gt; List of plugins to mount.

Mount the plugin.

```javascript
Darkmode.extend([pluginA, pluginB, pluginC]);
```

### `Darkmode.reset(nodes)`

- `nodes` &lt;HTMLElement[]&gt; The nodes that were converted.

Remove the stylesheets which were added by Dark Mode conversion, and unmount all plugins.

```javascript
Darkmode.reset(document.body.querySelectorAll('*'));
```

### `Darkmode.validate(container[, options, filter])`

- `container` &lt;HTMLElement&gt; The container to be validated.
- `options` &lt;Object&gt; Configuration.
  - `options.minContrast` &lt;number&gt; Minimum contrast ratio between text and background color.
  - `options.ignoreRules` &lt;string&gt; Rules to ignore for the whole document, using the same values as the per-node `data-ignore-dm` attribute, separated by spaces: `low-contrast` skips the contrast check, `text-bg-gradient` skips the gradient-background check. Per-node `data-ignore-dm` still applies; the two sources are combined.
- `filter` &lt;Function&gt; Filter, returning `true` will skip this node.
  - `node` &lt;HTMLElement&gt; The node to be validated.
- return `result` &lt;Object Array&gt; List of results that failed validation.
  - `result[].dom` &lt;HTMLElement&gt; The node that failed validation.
  - `result[].key` &lt;string&gt; The failed validation reason.
  - `result[].violateRules` &lt;string&gt; The failed validation description.

Validate the result of the Dark Mode conversion. A `darkmode-low-contrast` violation is reported only when the converted contrast is below `options.minContrast` **and worse than in Light Mode**; content that was already low-contrast in the original is not treated as a conversion issue.

```javascript
const result = Darkmode.validate(document.body, {
  minContrast: 1.5,
  ignoreRules: 'text-bg-gradient' // skip gradient-background checks for the whole document
}, node => node.classList.contains('dm-ignore'));
```

### `Darkmode.htmlClass`

- &lt;string&gt; The class name added to the `<html>` element when forcing Dark Mode (`mode: 'dark'`).

This constant is exposed so the caller can control the Dark Mode toggle timing themselves (e.g. in editor scenarios, together with the `setClass` hook, the caller decides when to add/remove this class on `<html>`).

```javascript
document.getElementsByTagName('html')[0].classList.add(Darkmode.htmlClass);
```
