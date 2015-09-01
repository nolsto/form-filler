module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'content.js'
    },
    module: {
        loaders: [
            {
                test: /node_modules\/zepto\/src\/zepto\.js$/,
                loader: 'exports?Zepto; delete window.$; delete window.Zepto;'
            }
        ]
    },
    resolve: {
        alias: {
            zepto: './node_modules/zepto/src/zepto.js'
        }
    }
};
