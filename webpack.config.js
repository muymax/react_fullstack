const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 

module.exports = {
    entry:{
        bundle:"./src/index.js",
        vendor:['react','react-dom']
    },
    output:{
        path: path.resolve(__dirname,'build'),
        filename:'js/[name].[chunkhash].js'
    },
    module:{
        rules:[
            {
                use:'babel-loader',
                test:/\.js$/,
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            names:['vendor']
        }),
        new HtmlWebpackPlugin({
            template:'public/index.html'
        }),
        new CleanWebpackPlugin('build/*.*')
    ]
}