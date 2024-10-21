English | [简体中文](./README_CN.md)

mp-darkmode
==============================
[![NPM version][npm-image]][npm-url]

The Dark Mode conversion algorithm for WeChat Official Accounts Platform.

## Start

### 1. Download

Download the [latest release](https://github.com/wechatjs/mp-darkmode/releases).

Or, install via `npm`:

```shell
npm i mp-darkmode
```

### 2. Import

(1) Under non-AMD/CMD rule, insert mp-darkmode into `<head>`.

```html
<script src="path/to/darkmode.min.js"></script>
<script>
  // run dark mode conversion algorithm
  Darkmode.run(document.body.querySelectorAll('*')); // process all DOM nodes under body
</script>
```

(2) Under AMD/CMD rule, use `require()` to import mp-darkmode.

```javascript
var Darkmode = require('path/to/darkmode.min.js');

// run dark mode conversion algorithm
Darkmode.run(document.body.querySelectorAll('*')); // process all DOM nodes under body
```

## Usage

### `Darkmode.run(nodes[, options])`

- `nodes` &lt;DOM Object Array&gt; The DOM to be converted.
- `options` &lt;Object&gt; Configuration.
  - `options.error` &lt;Function&gt; Callback triggered when an error occurs.
    - `err` &lt;Error&gt; Error object.
  - `options.mode` &lt;string&gt; The specified color mode (dark | light), if specified, the system color will not be monitored.
  - ...
  - ...
  - ...

Run Dark Mode conversion algorithm.

```javascript
Darkmode.run(document.body.querySelectorAll('*'), {
  mode: 'dark', // force dark mode
  ... // other configuration items
});
```

More detailed usage can refer to [API](./doc/en/API.md).

## Plugins

Plugins are supported since `v1.1.0`. Custom actions can be performed during transformation, such as filtering DOM attributes. How to use the plugin is as follows:

```javascript
Darkmode.extend([pluginA, pluginB, pluginC]);
```

If you want to write your own Dark Mode plugin, you can refer to [here](./doc/en/plugins.md)。

## Contribution

The algorithm is constantly updated and optimized. If you have a good idea, you can fork and submit your code. For specific development, please refer to [Development Guide](./doc/en/develop.md).

[npm-url]: https://www.npmjs.com/package/mp-darkmode
[npm-image]: https://img.shields.io/npm/v/mp-darkmode.svg
