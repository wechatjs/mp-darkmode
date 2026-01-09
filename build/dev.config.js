const { merge } = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
  devtool: 'source-map',
  mode: 'development',
  output: {
    filename: 'darkmode.js',
  }
});
