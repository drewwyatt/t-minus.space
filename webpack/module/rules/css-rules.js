const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const isProduction = require('../../is-production');

const globalPath = [path.resolve('./src/styles')];
const createLoader = config => Object.assign({}, { test: /\.css$/  }, config);

const globals = Object.assign(createLoader({ include: globalPath }), 
    isProduction ? {
            use: ExtractTextWebpackPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader']
        })
    } 
    : {
        loaders: [
            'style-loader',
            'css-loader',
            'postcss-loader',
        ]
    });

const modules = Object.assign(createLoader({ exclude: globalPath }), 
    isProduction ? {
            use: ExtractTextWebpackPlugin.extract({
            fallback: 'style-loader',
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
                    }  
                },
                'postcss-loader',
            ]
        })
    } 
    : {
        loaders: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
                }
            },
            'postcss-loader',
        ]
    });

module.exports = [
    globals,
    modules,
];