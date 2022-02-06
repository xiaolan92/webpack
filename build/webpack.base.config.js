const Webpack = require("webpack"),
    Htmlwebpackplugin = require("html-webpack-plugin"),
    AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin"),
    path = require("path"),
    HappyPack = require("happypack"),
    HardSourceWebpackPlugin = require("hard-source-webpack-plugin"),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
    CompressionPlugin = require('compression-webpack-plugin');







webpackconfig = {

    entry: {
        main: path.resolve(__dirname, "../src/main.js")
    },

    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "js/[name].bundle.[hash:8].js",
        chunkFilename: "js/[name].chunk.[hash:8].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "happypack/loader?id=babel",
                exclude: /node_modules/
            },
            // {
            //     test: /\.ts$/,
            //     exclude: /node_modules/,
            //     enforce: 'pre',
            //     loader: 'tslint-loader'
            // },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },


            // {
            //     test: /\.(js|jsx)$/,
            //     use:{
            //         loader: "eslint-loader",
            //         options: {
            //             formatter: require("eslint-friendly-formatter"),
            //         }
            //     },
            //     enforce: "pre",
            //     include:path.resolve(__dirname,"../src")
            // },

            {
                test: /\.css$/,
                use: [
                    process.env.NODE_ENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2
                        }
                    },
                    "postcss-loader",
                ],
            },

            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ],
            },


            {
                test: /\.html/,
                use: {
                    loader: "html-loader",
                    options: {
                        attrs: ["img:src", ":data-src", "link:href"]
                    }
                }
            },


            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 500,
                            name: "[hash:8].[ext]",
                            outputPath: "./images/"
                        }
                    }
                ],
                include: path.resolve(__dirname, "../src"),
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'svg-sprite-loader',
                    options: {
                        symbolId: 'icon-[name]'
                    }

                }],

                include: path.resolve(__dirname, '../src/components/icon/icons'),
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
            "@": path.resolve(__dirname, "../src"),
        },

        extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".less", ".scss", ".sass"]

    },
    plugins: [
        new Webpack.DllReferencePlugin({
            context: path.resolve(__dirname),
            manifest: require("../dist/lib/lib.manifest.json")
        }),
        new Webpack.ProvidePlugin({
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash:8].css",
            chunkFilename: "css/[id].[hash:8].css"
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "../dist"), "**/*", "!lib/lib.dll.js", "!lib.manifest.json"],
            verbose: true,
            dry: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new HappyPack({
            id: "babel",
            loaders: ["babel-loader"]

        }),

        // new BundleAnalyzerPlugin(),
        /**
     *  缓存
     */
        // new HardSourceWebpackPlugin()

        // gzip 压缩
        new CompressionPlugin({
            test: /\.(js|scss)$/i,
            exclude: /\/excludes/,
        }),


    ],
},

    /**
 *  将第三方动态链接库打包到html页面
 *
 */
    AddAsset = new AddAssetHtmlPlugin({
        filepath: path.resolve(__dirname, "../dist/lib/*.dll.js"),
        outputPath: "./lib",
        publicPath: "./lib",
        includeSourcemap: false,
        typeOfAsset: "js",
        /**
         * 设置hash:true清除缓存,
         */
        hash: true
    });

let plugin = new Htmlwebpackplugin({
    template: "./src/index.html",
    filename: "index.html",
    inject: "body",
    showErrors: true,
    cache: true,
    hash: true,

    /** html压缩 */

    minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeScriptTypeAttributes: true

    },
    chunks: ["main"],

});
/**
 * plugin必须在addAsset的前面,否则报错,
 * 因为只有html页面形成，才能打包第三方动态链接库
 *
 */
webpackconfig.plugins.push(plugin, AddAsset);



module.exports = webpackconfig;