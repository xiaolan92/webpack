const Merge = require("webpack-merge"),
    Baseconfig = require("./webpack.base.config"),
    Webpack = require("webpack"),
    path = require("path"),
    ESLintPlugin = require('eslint-webpack-plugin');

module.exports = Merge(Baseconfig,{
    mode:"development",
    devtool:"eval-source-map",
    cache:true,
    watchOptions:{
        ignored:/node_modules/,
        aggregateTimeout: 1500,
        poll: 1000
    },
    plugins:[
        new Webpack.HotModuleReplacementPlugin(),
        new ESLintPlugin({
            extensions:["js","ts","tsx"]
        }),

    ],
    devServer:{
        historyApiFallback: true,
        port:4090,
        host:"127.0.0.1",
        open:true,
        compress:true,
        static: {
            directory: path.join(__dirname, '../dist'),
          },

    }

});