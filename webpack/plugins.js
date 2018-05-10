const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = [

    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),

    // Fixes warning in moment-with-locales.min.js
    // Module not found: Error: Can't resolve './locale' in ...
    new webpack.IgnorePlugin(/\.\/locale$/),
    //Copy static content
    new CopyWebpackPlugin([
        {from: path.join(__dirname, '../web/static'), to: path.join(__dirname, '../build/static')},
    ])
];
