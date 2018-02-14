const path = require('path');

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
            }
        ]
    }

    
}