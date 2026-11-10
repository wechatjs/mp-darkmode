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

(1) In a non-AMD/CMD environment, insert mp-darkmode into `<head>`.

```html
<script src="path/to/darkmode.min.js"></script>
<script>
  // run dark mode conversion algorithm
  Darkmode.run(document.body.querySelectorAll('*')); // process all DOM nodes under body
</script>
```

(2) In an AMD/CMD environment, use `require()` to import mp-darkmode.

```javascript
var Darkmode = require('path/to/darkmode.min.js');

// run dark mode conversion algorithm
Darkmode.run(document.body.querySelectorAll('*')); // process all DOM nodes under body
```

### 3. TypeScript

The package ships its own type declarations (`dist/darkmode.d.ts`), so no `@types` package is needed:

```typescript
import Darkmode, { run, type ConfigOption } from 'mp-darkmode';
// without esModuleInterop, use `import * as Darkmode from 'mp-darkmode'` instead

const opt: ConfigOption = { mode: 'dark' };
Darkmode.run([], opt);
run([]);
```

> The bundle is UMD without the `__esModule` marker. If `esModuleInterop`/`allowSyntheticDefaultImports` are off,
> use `import * as Darkmode` or named imports.

## Usage

### `Darkmode.run(nodes[, options, container])`

- `nodes` &lt;HTMLElement[]&gt; The DOM to be converted.
- `options` &lt;Object&gt; Configuration.
  - `options.error` &lt;Function&gt; Callback triggered when an error occurs.
    - `err` &lt;Error&gt; Error object.
  - `options.mode` &lt;string&gt; The color mode to force (`dark` or `light`). If set, the system color scheme is not monitored.
  - ...
  - ...
  - ...
- `container` &lt;HTMLElement&gt; Optional. The container of the newly added nodes; when provided, style inheritance is rebuilt from its ancestor chain.

Run Dark Mode conversion algorithm.

```javascript
Darkmode.run(document.body.querySelectorAll('*'), {
  mode: 'dark', // force dark mode
  ... // other configuration items
});
```

See the [API documentation](./doc/en/API.md) for more details.

## Plugins

Plugins are supported since `v1.1.0`. They let you run custom actions during the conversion, for example filtering DOM attributes:

```javascript
Darkmode.extend([pluginA, pluginB, pluginC]);
```

If you want to write your own Dark Mode plugin, see the [plugin guide](./doc/en/plugins.md).

## Principles

See [Dark Mode Principles](./doc/en/principle.md).

## Best Practices

See [Dark Mode Best Practices](./doc/en/bestPractices.md).

## Upgrading to 2.0.0

Upgrading from `1.x`? Read the [upgrade guide](./doc/en/upgrade-to-v2.md) first — it lists the breaking changes and how to adapt.

## Contribution

The algorithm is constantly updated and optimized. If you have an idea, feel free to fork the repo and open a pull request. For specific development, please refer to [Development Guide](./doc/en/develop.md).

[npm-url]: https://www.npmjs.com/package/mp-darkmode
[npm-image]: https://img.shields.io/npm/v/mp-darkmode.svg
