[English](../en/develop.md) | 简体中文

开发手册
==============================

## 准备工作

### 环境要求

- **Node.js** ≥ `23.11.0`（见 `package.json` 的 `engines` 字段）
- **npm** `10.9.2`（见 `package.json` 的 `packageManager` 字段，可用 `npm -v` 核对）

`dev` / `build` / `genDemo` 三个命令都会先跑 `npx check-fe-env` 做环境校验，版本不满足时会直接报错。

```shell
git clone repo
npm i
```

## 开发

```shell
npm run dev
```

此时会监听 `src` 目录里的文件变化，并实时生成 `dist/darkmode.js` 文件，可通过 `file://` 协议访问 `test/demo.html` 来看效果。

## 生成 demo

```shell
npm run genDemo
```

`test/demo.html` 是**由模板拼装生成的，不要直接编辑它**（改了也会被下次生成覆盖）：

- `test/tpl/layout.tpl`：页面骨架，包含三列（Light / 线上 Dark / 本地 Dark）对比、样式和交互脚本，其中的 `<cases />` 是占位符。
- `test/tpl/cases.tpl`：各个 case 的 HTML 片段。

`genDemo` 会把 `layout.tpl` 里的 `<cases />` 替换成 `cases.tpl` 的内容，再输出到 `test/demo.html`。因此：

- 新增 / 修改 case → 改 `cases.tpl`；
- 改页面结构、样式或交互 → 改 `layout.tpl`；

改完执行 `npm run genDemo` 重新生成，再用 `file://` 打开 `test/demo.html` 查看效果。

## 体检线上文章

```shell
npm run dm-check -- "https://mp.weixin.qq.com/s/xxxx"
```

用真机视口打开一篇线上文章，跑一遍当前的 `dist` 产物，输出浅色 / 深色分屏截图和量化报告（残留浅色底块、逐节点对比度、算法自带 `validate()` 结果），结果写在输出目录的 `report.html` / `report.json` 里。改完算法后拿真实文章回归时很有用。

| 选项 | 说明 | 默认 |
| --- | --- | --- |
| `-o, --out <dir>` | 输出目录 | `./dm-check-output`（已加入 `.gitignore`） |
| `-s, --selector <sel>` | 正文容器选择器 | `#js_content` |
| `-w, --width <px>` | 视口宽度 | `390`（iPhone） |
| `-b, --bundle <path>` | 注入的转换算法产物 | `dist/darkmode.min.js` |
| `--no-dark-css` | 不注入 `test/dark.css` + `article_dark`，模拟"算法裸跑" | — |
| `--keep-open` | 跑完不关闭浏览器（调试用） | — |

```shell
npm run dm-check -- "https://mp.weixin.qq.com/s/xxxx" -o ./out -w 414 --no-dark-css
```

**依赖 Playwright**，但**没有写进 `package.json`**（避免给所有开发者强塞浏览器下载）。缺失时会提示安装；也可以先装好再用：

```shell
npm i -D playwright
npx playwright install chromium
```

## 打包

```shell
npm run build
```

开发完成后可通过打包命令生成最终目标文件 `dist/darkmode.min.js`（同时把 `src/darkmode.d.ts` 复制到 `dist`）。
