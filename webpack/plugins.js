const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const isProduction = require('./is-production');

const envPlugins = isProduction ? [
        new ExtractTextPlugin("styles.css"),
    ] : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ];

module.exports = [
    new HtmlWebpackPlugin({ template: path.resolve('./src/index.html') }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'node-static',
        filename: 'node-static.js',
        minChunks(module, count) {
            const context = module.context;
            return context && context.indexOf('node_modules') >= 0;
        },
    }),
    new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
    ...envPlugins
];