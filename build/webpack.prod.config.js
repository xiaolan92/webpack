const Webpack = require('webpack'),
  path = require('path')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'),
  Baseconfig = require('./webpack.base.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { merge } = require('webpack-merge')

module.exports = merge(Baseconfig, {
  mode: 'production',
  devtool: 'hidden-source-map',
  optimization: {
    /**
     *   分割公共模块
     */
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 2,
      maxAsyncRequests: 10,
      maxInitialRequests: 10,
      name: false,
      cacheGroups: {
        /**
         *  提取第三方库
         */
        vendors: {
          name: 'js/vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 20
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      /**
       *   css优化压缩
       */
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true }
            }
          ]
        }
      })
    ]
  },
  plugins: [
    new Webpack.ids.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({}),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/assets'), // 复制public下文件
          to: path.resolve(__dirname, '../dist'), // 复制到dist目录中
          filter: source => {
            return !source.includes('index.html') // 忽略index.html
          }
        }
      ]
    })
  ]
})
