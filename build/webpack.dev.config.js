const Merge = require("webpack-merge"),
    Baseconfig = require("./webpack.base.config"),
    Webpack = require("webpack"),
    path = require("path");

module.exports = Merge(Baseconfig,{
    mode:"development",
    devtool:"eval-source-map",
    cache:true,
    plugins:[
        new Webpack.HotModuleReplacementPlugin(),

    ],
    devServer:{
        contentBase:path.resolve(__dirname,"../dist"),
        historyApiFallback: true,
        port:4090,
        host:"127.0.0.1",
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