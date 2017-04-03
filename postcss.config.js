const path = require('path');
const webpack = require('webpack');

module.exports = {
    plugins: [
        require("postcss-import")({
            path: path.resolve('./src'),
            addDependencyTo: webpack,
        }), 
        require('postcss-cssnext')()
    ]
}