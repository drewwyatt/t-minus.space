const path = require('path');
const isProduction = require('./is-production');

const envEntry = isProduction ? [] : [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
];

module.exports = [
    ...envEntry,
    path.resolve('./src/index.tsx'),
];