const Webpack = require('webpack'),
  Htmlwebpackplugin = require('html-webpack-plugin'),
  AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin'),
  path = require('path'),
  HappyPack = require('happypack'),
  HardSourceWebpackPlugin = require('hard-source-webpack-plugin'),
  CompressionPlugin = require('compression-webpack-plugin');


const fs = require('fs')

const NODE_ENV = process.env.NODE_ENV

// 根据环境来读取配置文件（本地环境和对应的环境）
const dotenvFiles = [`.env.${NODE_ENV}`].filter(Boolean)
// 遍历文件注入所有环境变量（这里就把配置文件的变量注入到process.env中了，只是node环境可访问）
dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv').config({
      path: dotenvFile
    })
  }
});

webpackconfig = {
  entry: {
    main: path.resolve(__dirname, '../src/main.tsx')
  },

  cache: {
    type: 'filesystem' // 使用文件缓存
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].bundle.[chunkhash:8].js',
    chunkFilename: 'js/[name].chunk.[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'happypack/loader?id=babel',
        exclude: /node_modules/
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },

      {
        test: /\.css$/,
        include: [path.resolve(__dirname, '../src')],
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: "[path][name]__[local]--[hash:5]",
              },
            }
          },
          'postcss-loader'
        ]
      },

      {
        test: /\.less$/,
        include: [path.resolve(__dirname, '../src')],
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                // 定制ant的主题
                modifyVars: {
                  'primary-color': '#1890ff',
                  'link-color': '#1890ff',
                  'border-radius-base': '2px'
                },
                javascriptEnabled: true
              }
            }
          }
        ]
      },

      {
        test: /\.html/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src', ':data-src', 'link:href']
          }
        }
      },

      {
        test: /.(png|jpg|jpeg|gif)$/, // 匹配图片文件
        type: 'asset', // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 小于10kb转base64位
          }
        },
        generator: {
          filename: './images/[hash][ext][query]'
        },
        include: path.resolve(__dirname, '../src')
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]'
            }
          }
        ],

        include: path.resolve(__dirname, '../src/components/icon/icons')
      },

      {
        test: /.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
        type: 'asset', // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 小于10kb转base64位
          }
        },
        generator: {
          filename: './fonts/[hash][ext][query]' // 文件输出目录和命名
        }
      },
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
        type: 'asset', // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 小于10kb转base64位
          }
        },
        generator: {
          filename: './media/[hash][ext][query]' // 文件输出目录和命名
        }
      }
    ]
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },

    extensions: ['.js', '.ts', '.tsx', '.css', '.less']
  },
  plugins: [
    new Webpack.DllReferencePlugin({
      context: path.resolve(__dirname),
      manifest: require('../dist/lib/lib.manifest.json')
    }),
    new Webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
    new Webpack.ProvidePlugin({}),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.resolve(__dirname, '../dist/js/*'),
        path.resolve(__dirname, '../dist/images/*'),
        path.resolve(__dirname, '../dist/font/*')
      ],
      verbose: true,
      dry: false,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false
    }),
    new HappyPack({
      id: 'babel',
      loaders: ['babel-loader']
    }),

    /**
     *  缓存
     */
    // new HardSourceWebpackPlugin()

    // gzip 压缩
    new CompressionPlugin({
      test: /\.(js|css)$/i,
      filename: '[path][base].gz',
      algorithm: 'gzip',
      threshold: 10240,
      minRatio: 0.8,
      exclude: /\/excludes/
    }),
  ]
};
  /**
   *  将第三方动态链接库打包到html页面
   *
   */
  AddAsset = new AddAssetHtmlPlugin({
    filepath: path.resolve(__dirname, '../dist/lib/*.dll.js'),
    outputPath: './lib',
    publicPath: './lib',
    includeSourcemap: false,
    typeOfAsset: 'js',
    /**
     * 设置hash:true清除缓存,
     */
    hash: true
  });

let plugin = new Htmlwebpackplugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
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
  chunks: ['main']
})
/**
 * plugin必须在addAsset的前面,否则报错,
 * 因为只有html页面形成，才能打包第三方动态链接库
 *
 */
webpackconfig.plugins.push(plugin, AddAsset)

module.exports = webpackconfig
