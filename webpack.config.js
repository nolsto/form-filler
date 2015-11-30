module.exports = {
    entry: {
        content: './src/content.js',
        options: './src/options.js'
    },
    output: {
        path: __dirname,
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            }
        ]
    }
};
