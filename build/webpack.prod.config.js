const Webpack = require("webpack"),
    path = require("path"),
    UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
    Merge = require("webpack-merge");
    const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"),
    Baseconfig = require("./webpack.base.config");
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = Merge(Baseconfig,{
    mode:"production",
    devtool:"hidden-source-map",
    optimization:{
        /**
         *   分割公共模块
         */
        splitChunks:{
            chunks:"all",
            minSize:30000,
            minChunks:2,
            maxAsyncRequests: 10,
            maxInitialRequests:10,
            name:false,
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
        minimizer:[
            /**
             *   css优化压缩
             */
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                      "default",
                      {
                        discardComments: { removeAll: true },
                      },
                    ],
                  },
            }),

        ],
    },
    plugins:[
        new Webpack.ids.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({})

    ],

});