English | [简体中文](../cn/develop.md)

Development Guide
==============================

## Requirements

- **Node.js** ≥ `23.11.0` (see the `engines` field in `package.json`)
- **npm** `10.9.2` (see the `packageManager` field in `package.json`; check it with `npm -v`)

The `dev` / `build` / `genDemo` scripts all run `npx check-fe-env` first, which fails when the versions do not match.

## Clone

```shell
git clone repo
npm i
```

## Develop

```shell
npm run dev
```

This watches the files in the `src` directory and regenerates `dist/darkmode.js` on every change. You can then open `test/demo.html` via the `file://` protocol to see the result.

## Generate the demo

```shell
npm run genDemo
```

`test/demo.html` is **generated from templates, do not edit it directly** (your changes would be overwritten by the next generation):

- `test/tpl/layout.tpl`: the page skeleton, including the three columns (Light / online Dark / local Dark), styles and interactive scripts; `<cases />` in it is a placeholder.
- `test/tpl/cases.tpl`: the HTML fragments of all cases.

`genDemo` replaces `<cases />` in `layout.tpl` with the content of `cases.tpl` and writes the result to `test/demo.html`. So:

- add / modify a case → edit `cases.tpl`;
- change the page structure, styles or interactions → edit `layout.tpl`;

then run `npm run genDemo` to regenerate and open `test/demo.html` through the `file://` protocol to see the result.

## Check a live article

```shell
npm run dm-check -- "https://mp.weixin.qq.com/s/xxxx"
```

Opens a live article with a mobile viewport, runs the current `dist` bundle on it, and writes Light / Dark split screenshots plus a quantified report (remaining light background blocks, per-node contrast, the algorithm's own `validate()` result) as `report.html` / `report.json` in the output directory. Useful for regressing real articles after changing the algorithm.

| Option | Description | Default |
| --- | --- | --- |
| `-o, --out <dir>` | Output directory | `./dm-check-output` (already in `.gitignore`) |
| `-s, --selector <sel>` | Content container selector | `#js_content` |
| `-w, --width <px>` | Viewport width | `390` (iPhone) |
| `-b, --bundle <path>` | Bundle to inject | `dist/darkmode.min.js` |
| `--no-dark-css` | Do not inject `test/dark.css` + `article_dark`, i.e. run the algorithm bare | — |
| `--keep-open` | Keep the browser open when done (for debugging) | — |

```shell
npm run dm-check -- "https://mp.weixin.qq.com/s/xxxx" -o ./out -w 414 --no-dark-css
```

It **requires Playwright**, which is deliberately **not listed in `package.json`** (so that not every developer has to download a browser). It prints install instructions when missing; you can also install it up front:

```shell
npm i -D playwright
npx playwright install chromium
```

## Build

```shell
npm run build
```

When development is done, run this command to produce the final `dist/darkmode.min.js` (it also copies `src/darkmode.d.ts` to `dist`).
