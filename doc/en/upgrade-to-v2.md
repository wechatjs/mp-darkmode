English | [简体中文](../cn/upgrade-to-v2.md)

# Upgrading to 2.0.0

This guide is for projects upgrading from **`1.2.2` (the last stable 1.x release)** to **`2.0.0`**.

2.0.0 is a ground-up refactor: the project was rewritten in TypeScript, the color library moved from `color` to `colorjs.io`, transparency / gradient / background-image complementary color rules were reworked, and new capabilities (validation, reset, color conversion, DOM hooks) were added. For the full list of 21 changes see the [Release Notes](./v2.0.0.html) and [GitHub Releases](https://github.com/wechatjs/mp-darkmode/releases). This guide covers only changes that **break existing code or change the conversion output**, together with how to adapt.

> Upgrading directly from `1.2.3-alpha.*` / `2.0.0-alpha.*`? See [Upgrading from prereleases](#upgrading-from-prereleases).

## Upgrade checklist

1. `npm i mp-darkmode@2.0.0`
2. Search for `.rgb().array()`, `.hex()`, `.alpha()` and `from 'color'`, then apply **B1 / B2**
3. TypeScript projects: adjust imports per **B5** and remove any local `declare module 'mp-darkmode'`
4. If you depend on the 1.x default dark text color, configure it explicitly per **B3**
5. Re-run regressions on real articles, rebuild screenshot baselines and invalidate cached conversion results per **B4**
6. Review the new capabilities below

## Breaking Changes

### B1. Color objects are now `colorjs.io` instances instead of `color` instances

**Affected**: `opt.fontColor` / `opt.bgColor` in the `afterConvertTextColor(el, opt)` plugin hook, and `data-darkmode-*` expando values read through custom `getAttr` / `setAttr` hooks.

In 1.x these were `color` library instances. Common patterns below throw in 2.0.0:

```javascript
// 1.x: none of these methods exist in 2.0.0
opt.fontColor.rgb().array();
opt.fontColor.hex();
opt.fontColor.alpha();
opt.fontColor.toString(); // colorjs.io may emit hsl() or percentage notations unsupported by older webviews
```

**Adapt**: convert to a `rgb()` / `rgba()` string with the new `Darkmode.colorToCssString()` and do not rely on the object's internals.

```javascript
export default function (Plugin) {
  return class extends Plugin {
    afterConvertTextColor(el, opt) {
      if (!opt.fontColor) return; // null when the algorithm cannot compute a color
      const fontColor = Darkmode.colorToCssString(opt.fontColor); // 'rgb(128, 127, 127)'
      const bgColor = Darkmode.colorToCssString(opt.bgColor);
      // work with css strings below
    }
  };
}
```

If you need numeric channels, parse that string; or import `colorjs.io` yourself — but **do not** assume `color` library methods are available. See the [plugin guide](./plugins.md).

### B2. The `color` dependency was removed

1.x declared `"color": "^3.1.2"` in `dependencies`; 2.0.0 changed the dependency set:

| Dependency | 1.2.2 | 2.0.0 |
| --- | --- | --- |
| `color` | `^3.1.2` | removed |
| `color-name` | `^1.1.4` | `^2.1.0` |
| `colorjs.io` | — | `^0.6.1` |
| `color-blend` | `^4.0.0` | `^4.0.0` |
| `object.hasown` | — | `^1.1.4` |

If your code imported `color` directly (relying on npm hoisting of a transitive dependency), the module will no longer be found after upgrading.

**Adapt**: install it explicitly with `npm i color@^3`, or use `Darkmode.colorToCssString()` / import `colorjs.io` directly.

> Both versions publish only `dist` and `doc` via `files`, not `src`, so deep imports such as `mp-darkmode/src/modules/color.js` were never supported. If you forked the repo and build from source, internal modules changed from `.js` to `.ts` — update your build scripts accordingly.

### B3. Default dark text color changed; webview colors now participate in the default-color blending

| Option | 1.2.2 | 2.0.0 |
| --- | --- | --- |
| `defaultDarkTextColor` | `#a3a3a3` | `rgba(255,255,255,0.6)` |
| `defaultLightWebviewColor` | — | `#fff` |
| `defaultDarkWebviewColor` | — | `#191919` |

In 2.0.0, `setDefaultColor()` blends **webview color → background color → text color** step by step, and every color option accepts alpha notation. Defaults therefore differ from 1.x when not configured explicitly.

**Adapt**: to match the 1.x input defaults, pass them explicitly:

```javascript
Darkmode.run(nodes, {
  defaultDarkTextColor: '#a3a3a3',
  defaultLightWebviewColor: '#fff',
  defaultDarkWebviewColor: '#191919'
});
```

**Note**: this aligns only the **inputs**, not the 1.x visual output — the conversion algorithm itself was reworked (see B4), and semi-transparent values still blend with the webview / background color.

### B4. Conversion output changes (visual breaking change)

The following rules were reworked, so the same content produces different CSS in 2.0.0:

- Transparency handling was reworked end-to-end
- Gradient backgrounds now use the color value **actually written to the stylesheet**; gradient color stops are converted consistently and gradients are flattened into a solid color
- Background-image complementary color now distinguishes grayscale from chromatic colors (Light Mode original color vs. converted Dark Mode color), and nodes above background images are no longer skipped by the conversion
- Added support for `lch()` / `oklch()` / `lab()` / `oklab()` / `color()` color spaces

**Impact**:

- Regenerate any cached 1.x conversion output (HTML / CSS / class names)
- Rebuild screenshot and visual-regression baselines
- Allow tolerance in assertions on exact `Darkmode.getContrast()` values (2.0.0 implements WCAG relative luminance directly instead of the `color` library's `.contrast()`; results for normal colors are effectively the same, invalid inputs still return `0`)

**Adapt**: run a regression on a real article; see the [developer guide](./develop.md) for the tool:

```shell
npm run dm-check -- "https://mp.weixin.qq.com/s/xxxx"
```

### B5. Type declarations now ship with the package — adjust your TypeScript integration

2.0.0 adds `types: dist/darkmode.d.ts` (`dist` is included in `files`), so no `@types` package is needed.

- If you wrote your own `declare module 'mp-darkmode'`, it will conflict with the official declarations — **remove it**
- The bundle is UMD without an `__esModule` marker, so `import Darkmode from 'mp-darkmode'` requires `esModuleInterop` / `allowSyntheticDefaultImports`. Otherwise use a namespace import or named imports:

```typescript
import * as Darkmode from 'mp-darkmode';
// or
import { run, type ConfigOption } from 'mp-darkmode';

const opt: ConfigOption = { mode: 'dark' };
run([], opt);
```

## New capabilities (not breaking, no changes required)

| Category | Details |
| --- | --- |
| New APIs | `validate()`, `reset()`, `getDmBgColor()`, `getDmFontColor()`, `colorToCssString()`, `htmlClass` |
| Third `run` argument | `run(nodes, opt, container)` rebuilds style inheritance when new nodes are inserted into `container` (paste / incremental scenarios) |
| DOM hooks | `getStyle`, `setStyle`, `getClass`, `setClass`, `getAttr`, `setAttr`; all default to `null` (native DOM) |
| New options | `noEmit`; alpha notation for all color options |
| Validation exemptions | Per-node `data-ignore-dm="low-contrast text-bg-gradient"`; document-wide `opt.ignoreRules` in `validate()` |

**Build environment**: `package.json` now declares `engines.node >= 23.11.0` and `packageManager: npm@10.9.2`, and `build` / `dev` / `genDemo` validate the environment first. This **only affects building from source** (forks / contributors); projects that just consume the npm package are unaffected.

## Upgrading from prereleases

`1.2.3-alpha.*` and `2.0.0-alpha.*` were development versions with no compatibility guarantee — use this guide and the [API documentation](./API.md) as the reference. Compared with later alphas, also note:

- `darkmode-low-contrast` is now reported only when the converted contrast is **below `opt.minContrast` and worse than in Light Mode**; content that was already low-contrast in the original is no longer treated as a conversion issue
- `validate()` gained `opt.ignoreRules`, using the same values as per-node `data-ignore-dm` but applying document-wide; the two sources are combined
- The `darkmode-whitelist` / `darkmode-no-gradient` rules were temporarily disabled in some alphas and are restored in the stable release
