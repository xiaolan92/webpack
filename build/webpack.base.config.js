const Webpack = require("webpack"),
    Htmlwebpackplugin = require("html-webpack-plugin"),
    AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    ESLintPlugin = require('eslint-webpack-plugin'),
    StylelintPlugin = require('stylelint-webpack-plugin');

const { CleanWebpackPlugin } = require("clean-webpack-plugin"),
    path = require("path"),
    { VueLoaderPlugin }= require('vue-loader'),
    HappyPack = require("happypack"),
    HardSourceWebpackPlugin = require("hard-source-webpack-plugin"),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
    CompressionPlugin = require('compression-webpack-plugin');

webpackconfig = {

    entry: path.resolve(__dirname, "../src/main.js"),

    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "js/[name].bundle.[fullhash:8].js",
        chunkFilename: "js/[name].chunk.[fullhash:8].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "happypack/loader?id=babel",
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                ),
            },
            {
                test:/\.ts$/,
                loader:"ts-loader",
                options: { 
                    transpileOnly:true,
                    appendTsSuffixTo: ['\\.vue$']
                 }
            },


            {
                test: /\.vue$/,
                use: "vue-loader",
            },
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
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('postcss-preset-env')({
                                        autoprefixer: { grid: true },
                                        stage: 3,
                                        features: {
                                            'nesting-rules': true
                                        }
                                    })
                                ]
                            }

                        }
                    },
                    {
                        loader: "sass-loader"
                    }

                ],
            },

            {
                test: /\.scss$/,
                use: [
                    process.env.NODE_ENV !== "production" ? "vue-style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('postcss-preset-env')({
                                        autoprefixer: { grid: true },
                                        stage: 3,
                                        features: {
                                            'nesting-rules': true
                                        }
                                    })
                                ]
                            }

                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ],
                include: path.resolve(__dirname, "../src"),
                exclude: /node_modules/
            },


            {
                test: /\.html/,
                use: "html-loader"
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "svg-sprite-loader",
                        options: {
                            symbolId: "icon-[name]"
                        }

                    },
                    "svgo-loader"
                ],
                include: path.resolve(__dirname, "../src/icons"),

            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 500,
                            name: "[fullhash:8].[ext]",
                            outputPath: "./images/"
                        }
                    }
                ],
                exclude: path.resolve(__dirname, "../src/icons")
            },


            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[fullhash:8].[ext]",
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
             "@components": path.resolve(__dirname, "../src/components"),
             "@common": path.resolve(__dirname, "../src/common"),
             "@images": path.resolve(__dirname, "../src/images"),
             "@icons": path.resolve(__dirname, "../src/icons"),
        },

        extensions: [".js", ".vue", ".ts"]

    },
    plugins: [
        new ESLintPlugin({
            fix:true,
            exclude: ["node_modules"]

        }),
        new StylelintPlugin({
            fix: true,
            files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
        }),
        new VueLoaderPlugin(),
        new Webpack.DllReferencePlugin({
            context: path.resolve(__dirname),
            manifest: require("../dist/lib/manifest.json")
        }),
        new Webpack.ProvidePlugin({
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[fullhash:8].css",
            chunkFilename: "css/[id].[fullhash:8].css"
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
            exclude: /\/excludes/
        }),
        new Htmlwebpackplugin({
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
            chunks: "main",
            chunksSortMode: "auto",

        }),
        // 将第三方动态链接库打包到html页面
        new AddAssetHtmlPlugin({
            filepath: path.resolve(__dirname, "../dist/lib/*.dll.js"),
            outputPath: "./lib",
            publicPath: "./lib",
            includeSourcemap: false,
            typeOfAsset: "js",
            /**
             * 设置hash:true清除缓存,
             */
            hash: true
        }),


    ],
},
    module.exports = webpackconfig;