var webpack = require('webpack');

module.exports = {
    entry: [
        './app.js',
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
    ],

    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
        publicPath: '/'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel-loader?presets[]=es2015&presets[]=react']
        }]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
            // Webpack 1.0
        new webpack.optimize.OccurenceOrderPlugin(),
        // Webpack 2.0 fixed this mispelling
        // new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};