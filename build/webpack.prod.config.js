const Webpack = require("webpack"),
    path = require("path"),
    UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
    Merge = require("webpack-merge"),
    OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
    Baseconfig = require("./webpack.base.config");

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
            name:true,
            cacheGroups:{
                /**
                 *  提取公共js模块
                 */
                commons:{
                    test:path.resolve(__dirname,"../src/js/common"),
                    name:"js/commons",
                    priority: 10,
                    enforce: true,
                    reuseExistingChunk:true,
                    chunks:"initial"
                },
                vendor: {
                    name: "js/vendor",
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    priority: 20
                },
                /**
                 * 提取css|sass|scss到单一文件
                 */
                styles: {
                    name: "css/styles",
                    test: /\.(c|sa|sc)ss$/,
                    chunks: "all",
                    enforce: true,
                    priority: 30
                }

            }

        },
        minimizer:[
            /**
             *  js压缩
             */
            new UglifyJsPlugin({
                /**
                 *  设置sourceMap:true来启用对 source map的支持
                 */
                sourceMap: true,
                parallel: true,
                cache:true,
                uglifyOptions: {
                    ecma:8,
                    warnings:false,
                    ie8:false,
                    output:{
                        beautify: false
                    },
                    compress:{
                        drop_console:true
                    }
                }
            }),
            /**
             *   css优化压缩
             */
            new OptimizeCSSAssetsPlugin({
                cssProcessor:require("cssnano"),
                cssProcessorOptions:{
                    discardComments: {
                        /**
                         * 去除所有注释
                         */
                        removeAll: true
                    }
                }
            })

        ]

    },
    plugins:[
        new Webpack.HashedModuleIdsPlugin(),

    ],

});