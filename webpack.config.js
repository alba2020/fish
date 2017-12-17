var path = require("path")

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.json$/,
                loaders: ['json-loader']
            }
        ]
    },
    devServer: {
        publicPath: '/build/'
    }
}