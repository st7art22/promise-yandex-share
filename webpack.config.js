const path = require('path');

module.exports = [{
    mode: 'development',
    entry: './src/yandex-share.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    context: __dirname,
}];