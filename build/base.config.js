const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // 让 webpack 生成的 UMD 包装 / runtime 代码也保持 ES5 语法
  target: ['web', 'es5'],
  // polyfills 必须先于业务代码执行；webpack 会把数组最后一个入口的导出作为 UMD 导出
  entry: [
    path.resolve(__dirname, 'polyfills.js'),
    path.resolve(__dirname, '../src/darkmode.ts')
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    library: 'Darkmode',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      // 源码是 TS，但 colorjs.io / color-blend 等依赖是带 ES2015+ 语法的 JS，
      // 必须一起过 babel，否则降级会漏在第三方代码里
      test: /\.[cm]?[jt]sx?$/,
      // core-js 的模块本身就是 ES5 实现，跳过 babel 转译
      exclude: /core-js/,
      use: {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          configFile: false,
          presets: [
            ['@babel/preset-env', {
              // 以 ES5 引擎为下限，产物可同时被 ES5 / ES2015 / ES2020 / ES2021 解析
              targets: { ie: '11' },
              modules: false,
              // 内建 API 由 build/polyfills.js 在入口统一补齐；不用 usage 模式，
              // 否则会给 node_modules 里的 CommonJS 文件注入 ESM import 导致 webpack 解析失败
              useBuiltIns: false
            }],
            '@babel/preset-typescript'
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties'
          ]
        }
      }
    }]
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['.ts']
    })
  ]
};
