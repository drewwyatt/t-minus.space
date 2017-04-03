const path = require('path');
const cssRules = require('./css-rules');

module.exports = [
    {
        test: /\.tsx?$/,
        loaders: [
            'babel-loader',
            'awesome-typescript-loader'
        ]
    },
    ...cssRules
];