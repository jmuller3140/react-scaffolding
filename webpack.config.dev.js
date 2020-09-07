const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/assets/html/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(sass|css|scss)$/,
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                ],
                use: [
                    { loader: 'style-loader', options: { injectType: 'singletonStyleTag' } },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true, plugins: () => ([autoprefixer()]) } },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ]
            }
        ]
    },
}

module.exports = merge.smart(config, common);