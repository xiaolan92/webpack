const { merge } = require('webpack-merge'),
  Baseconfig = require('./webpack.base.config'),
  path = require('path'),
  ESLintPlugin = require('eslint-webpack-plugin')

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = merge(Baseconfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  cache: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 1500,
    poll: 1000
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'ts', 'tsx']
    }),
    new ReactRefreshWebpackPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    port: 4090,
    hot: true,
    host: '127.0.0.1',
    open: true,
    compress: true,
    static: {
      directory: path.join(__dirname, '../dist')
    }
  }
})
