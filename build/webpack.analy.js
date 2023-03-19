const prodConfig = require('./webpack.prod.config.js') // 引入打包配置
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin'); // 引入webpack打包速度分析插件
const  {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const smp = new SpeedMeasurePlugin();
const { merge } = require('webpack-merge')

// 使用smp.wrap方法,把生产环境配置传进去,由于后面可能会加分析配置,所以先留出合并空位
module.exports = smp.wrap(merge(prodConfig, {
  plugins: [
    new BundleAnalyzerPlugin() // 配置分析打包结果插件
  ]
}))
