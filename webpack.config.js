const path = require('path');

module.exports = {
    mode: 'none',
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        filename: 'webpack-demo.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                      ['@babel/env', {
                        targets: {
                          browsers: ['ie >= 8']
                        }
                      }]
                    ]
                  }
            }
        }]
    },
    optimization: {
        minimize: true
    }
}