const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:'./project/index.js',
    output:{
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js',
        publicPath:'build/'
    },
    module:{
        rules:[
            {
                use:'babel-loader',
                test:/\.js$/
            },
            {
                test:/\.css$/,
                use: ExtractTextPlugin.extract({
                    use:'css-loader'
                })
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('style.css')
    ]
}