const path = require('path');

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: path.resolve(__dirname, '../src/darkmode.ts'),
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'darkmode.js',
    library: 'Darkmode',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-typescript'],
          plugins: [
            '@babel/plugin-proposal-class-properties'
          ]
        }
      }
    }]
  }
};
