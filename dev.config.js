const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = [{
    mode: 'development',
    entry: './src/yandex-share.js',
    plugins: [
        new CleanWebpackPlugin(['dist/*'])
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    context: __dirname,
}];