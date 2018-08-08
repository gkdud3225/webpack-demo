const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const es3ifyPlugin = require('es3ify-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: ['@babel/polyfill', './src/index.js'],
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
                        },
                        loose: true
                      }]
                    ]
                }
            }
        }]
    },
    plugins: [
        new es3ifyPlugin() // IE8과의 호환성을 위해 한번더 트랜스파일링
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    ie8: true
                }
                
            })
        ]
    }
}