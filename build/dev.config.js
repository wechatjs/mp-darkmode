const ESLintPlugin = require('eslint-webpack-plugin');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const { mergeWithCustomize, customizeArray } = require('webpack-merge');
const baseConfig = require('./base.config');
const eslintConfig = require('../eslint.config');

// dev 常驻 --watch，lint 规则统一降级为 warning：只提示，不中断构建
const rules = eslintConfig.reduce((all, config) => ({ ...all, ...(config.rules || {}) }), {});
const warnRules = Object.fromEntries(
  Object.entries(rules).map(([name, rule]) => {
    if (rule === 'error' || rule === 2) return [name, 'warn'];
    if (Array.isArray(rule) && (rule[0] === 'error' || rule[0] === 2)) {
      return [name, ['warn', ...rule.slice(1)]];
    }
    return [name, rule];
  })
);

// 替换 base 中默认的 ESLintPlugin：默认配置会把 lint error 记入 compilation.errors 导致构建失败
module.exports = mergeWithCustomize({
  customizeArray: customizeArray({ plugins: 'replace' })
})(baseConfig, {
  devtool: 'source-map',
  mode: 'development',
  output: {
    filename: 'darkmode.js',
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['.ts'],
      overrideConfig: [{
        plugins: { '@typescript-eslint': tsPlugin },
        rules: warnRules
      }],
      emitWarning: true,
      // 兜底：ESLint 自身的解析/内部错误也只提示，不让编译失败
      failOnError: false,
      failOnWarning: false
    })
  ]
});
