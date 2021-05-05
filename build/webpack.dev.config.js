const { merge } = require("webpack-merge"),
    Baseconfig = require("./webpack.base.config"),
    Webpack = require("webpack"),
    path = require("path");

module.exports = merge(Baseconfig,{
    mode:"development",
    devtool:"eval-source-map",
    cache:true,
    plugins:[
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development"),

        }),

    ],
    devServer:{
        contentBase:path.resolve(__dirname,"../dist"),
        historyApiFallback: true,
        port:4090,
        host:"127.0.0.1",
        openPage:"dist/index.html",
        hot:true,
        inline:true,
        open:true,
        compress:true,
        watchOptions:{
            ignore:/node_modules/,
            aggregateTimeout: 1500,
            poll: 1000
        },

        publicPath:"127.0.0.1:4090/dist",

    }

});