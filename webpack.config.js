module.exports = {
    devtool: require('./webpack/devtool'),
    entry:   require('./webpack/entry'),
    module:  require('./webpack/module'),
    output:  require('./webpack/output'),
    plugins: require('./webpack/plugins'),
    resolve: require('./webpack/resolve'),
};