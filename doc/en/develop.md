English | [简体中文](../cn/develop.md)

Development Guide
==============================

## Clone

```shell
git clone repo
npm i
```

## Develop

```shell
npm run dev
```

At this time, it will monitor the file changes in the `src` directory and generate `dist/darkmode.js` files in real time. You can access `test/demo.html` through the `file://` protocol to see the effect.

## Build

```shell
npm run build
```

After the development is completed, the final target file `dist/darkmode.min.js` can be generated through the packaging command.
