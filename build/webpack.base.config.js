const Webpack = require("webpack"),
    Htmlwebpackplugin = require("html-webpack-plugin"),
    AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin");

  const {  CleanWebpackPlugin } = require("clean-webpack-plugin"),
    path = require("path"),
    VueLoaderPlugin = require("vue-loader/lib/plugin"),
    HappyPack = require("happypack"),
    HardSourceWebpackPlugin = require("hard-source-webpack-plugin"),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
    CompressionPlugin = require('compression-webpack-plugin');







    webpackconfig = {

        entry:{
            main: path.resolve(__dirname, "../src/main.ts")
        },

        output:{
            path:path.resolve(__dirname,"../dist"),
            filename:"js/[name].bundle.[hash:8].js",
            chunkFilename: "js/[name].chunk.[hash:8].js"
        },
        module:{
            rules: [
                {
                    test: /\.js$/,
                    use:"happypack/loader?id=babel",
                    exclude:/node_modules/
                },
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    enforce: 'pre',
                    loader: 'tslint-loader'
                },
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                },


                {
                    test:/\.vue$/,
                    use:"vue-loader",
                },


                {
                    test: /\.(js|vue|jsx)$/,
                    use:{
                        loader: "eslint-loader",
                        options: {
                            formatter: require("eslint-friendly-formatter"),
                        }
                    },
                    enforce: "pre",
                    include:path.resolve(__dirname,"../src")
                },

                {
                    test: /\.css$/,
                    use:[
                        process.env.NODE_ENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options:{
                                importLoaders: 2
                            }
                        },
                        "postcss-loader",
                        "sass-loader"
                    ],
                },

                {
                    test: /\.scss$/,
                    use:[
                        process.env.NODE_ENV !== "production" ? "vue-style-loader" : MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options:{
                                importLoaders: 2
                            }
                        },
                        "postcss-loader",
                        "sass-loader"
                    ],
                    include:path.resolve(__dirname,"../src"),
                    exclude:/node_modules/
                },


                {
                    test:/\.html/,
                    use:{
                        loader: "html-loader",
                        options:{
                            attrs:["img:src",":data-src","link:href"]
                        }
                    }
                },


                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                limit: 500,
                                name: "[hash:8].[ext]",
                                outputPath:"./images/"
                            }
                        }
                    ],
                    include:path.resolve(__dirname,"../src")
                },


                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[hash:8].[ext]",
                                outputPath: "./fonts/",
                            }
                        }
                    ]
                }

            ]
        },



        resolve: {
            alias: {
                "@":path.resolve(__dirname,"../src"),
                "vue$": "vue/dist/vue.esm.js",
            },

            extensions: [".js",".ts",".tsx",".json",".vue",".css",".scss",".sass"]

        },
        plugins:[

            new VueLoaderPlugin(),
            new Webpack.DllReferencePlugin({
                context:path.resolve(__dirname),
                manifest:require("../dist/lib/lib.manifest.json")
            }),
            new Webpack.ProvidePlugin({
            }),
            new MiniCssExtractPlugin({
                filename: "css/[name].[hash:8].css",
                chunkFilename:"css/[id].[hash:8].css"
            }),
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns:[ path.resolve(__dirname,"../dist"),"**/*","!lib/lib.dll.js","!lib.manifest.json"],
                verbose: true,
                dry: true,
                cleanStaleWebpackAssets:true,
                protectWebpackAssets: false
            }),
            new HappyPack({
                id:"babel",
                loaders:["babel-loader"]

            }),

            // new BundleAnalyzerPlugin(),
            /**
         *  缓存
         */
            // new HardSourceWebpackPlugin()

            // gzip 压缩
            new CompressionPlugin({
                test:/\.(js|scss)$/i,
                exclude: /\/excludes/,
                cache: true,
            }),


        ],
    },

    /**
 *  将第三方动态链接库打包到html页面
 *
 */
    AddAsset = new AddAssetHtmlPlugin({
        filepath:path.resolve(__dirname,"../dist/lib/*.dll.js"),
        outputPath:"./lib",
        publicPath:"./lib",
        includeSourcemap: false,
        typeOfAsset: "js",
        /**
         * 设置hash:true清除缓存,
         */
        hash:true
    });


/**
    * 此段代码为多页面配置,当只需要单页面时,注释掉这段代码.
    * 然后在webpackconfig.plugins中new Htmlwebpackplugin
    * 然后改变chunks
    *
    * */
    let plugin = new Htmlwebpackplugin({
        template:"./src/index.html",
        filename:"index.html",
        inject:"body",
        showErrors:true,
        cache:true,
        hash:true,

        /** html压缩 */

        minify:{
            removeComments:true,
            collapseWhitespace:true,
            removeRedundantAttributes:true,
            useShortDoctype:true,
            removeEmptyAttributes:true,
            removeStyleLinkTypeAttributes:true,
            keepClosingSlash:true,
            minifyCSS:true,
            minifyJS:true,
            minifyURLs:true,
            removeScriptTypeAttributes:true

        },
        /**
         * 当需要单文件多入口时,可通过配置chunks来
         * 实现.
         */
        chunks:["main"],
        chunksSortMode: "dependency",

    });
    /**
     * plugin必须在addAsset的前面,否则报错,
     * 因为只有html页面形成，才能打包第三方动态链接库
     *
     */
    webpackconfig.plugins.push(plugin,AddAsset);



module.exports = webpackconfig;