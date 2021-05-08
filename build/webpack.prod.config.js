const Webpack = require("webpack"),
    path = require("path"),
    TerserPlugin = require("terser-webpack-plugin");
const  { merge } = require("webpack-merge"),
    CssMinimizerPlugin = require('css-minimizer-webpack-plugin'),
    Baseconfig = require("./webpack.base.config");

module.exports = merge(Baseconfig,{
    mode:"production",
    devtool:"hidden-source-map",
    optimization:{
        /**
         *   分割公共模块
         */
        runtimeChunk: 'single',
        splitChunks:{
            cacheGroups:{
                /**
                 *  提取第三方库
                 */
                vendors: {
                    name: "js/vendor",
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    priority: 20
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }

            }

        },
        sideEffects: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                extractComments:false,
                terserOptions:{
                    ecma:8,
                    compress: {
                        drop_console: false,
                        drop_debugger: false
                    },
                },
                exclude: /\/excludes/,
        }),
            // css 优化压缩
            new CssMinimizerPlugin({
                test: /\.(scss|css)(\?.*)?$/i,
                exclude: /\/excludes/,
                minimizerOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }],
                },
            }),
    ]

    },
    plugins:[
        new Webpack.ids.HashedModuleIdsPlugin({
            context: path.resolve(__dirname, "../dist"),
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20,
        }),
        new Webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),

        }),

    ],

});