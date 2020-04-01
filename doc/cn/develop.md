[English](../en/develop.md) | 简体中文

开发手册
==============================

## 准备工作

```shell
git clone repo
npm i
```

## 开发

```shell
npm run dev
```

此时会监听 `src` 目录里的文件变化，并实时生成 `dist/darkmode.js` 文件，可通过 `file://` 协议访问 `test/demo.html` 来看效果。

## 打包

```shell
npm run build
```

开发完成后可通过打包命令生成最终目标文件 `dist/darkmode.min.js`。
