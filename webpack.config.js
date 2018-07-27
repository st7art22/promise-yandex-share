const path = require('path');

module.exports = [{
    mode: 'production',
    entry: './src/yandex-share.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.min.js"
    },
    module: {

    },
    context: __dirname,
}];