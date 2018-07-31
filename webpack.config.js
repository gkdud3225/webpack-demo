const path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'webpack-demo.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['babel-preset-env']
                  }
                
            }
        }]
        
    },
    optimization: {
        minimize: true
    }
}