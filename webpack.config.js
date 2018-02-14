const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        app: './app/app'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.(css|scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                }),
                include: path.join(__dirname, 'src')
            },
        ]
    },
    devserver: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        open: true,
        historyApiFallback: true,
        stats: 'errors-only'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true,
            disable: !isProduction
        })
    ]

    
}