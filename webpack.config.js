const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        app: './app/app'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }
}