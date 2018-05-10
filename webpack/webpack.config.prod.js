// webpack.config.prod.js
// Watches + deploys files minified + cachebusted

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const ReplacePlugin = require('webpack-plugin-replace');

module.exports = {
    devtool: 'source-map',

    mode: "production",

    entry: {
        main: './web/main.js'
    },

    output: {
        path: path.join(__dirname, '../build'),
        filename: '[name].[hash].js'
    },

    plugins: require('./plugins')
        .concat([
                //Clear out build folder
                new CleanWebpackPlugin(['build'], {root: path.join(__dirname, '../')}),

                // Reduce lodash size
                new LodashModuleReplacementPlugin(),

                //reduce filesize
                new webpack.optimize.OccurrenceOrderPlugin(),

                //pull inline styles into cachebusted file
                new ExtractTextPlugin({filename: "/style.[hash].css", allChunks: true}),
                new ReplacePlugin({
                    exclude: [
                        'foo.js',
                        /node_modules/,
                        filepath => filepath.includes('ignore')
                    ],
                    patterns: [{
                        regex: /throw\s+(new\s+)?(Type|Reference)?Error\s*\(/g,
                        value: 'return;('
                    }],
                    values: {
                        '<script src=/build/main.js></script>': '',
                    }
                })


            ]
        )
        .concat(require('./pages').map(function (page) {
            console.log(page);
            return new HtmlWebpackPlugin({
                    filename: page, //output
                    template: './web/' + page, //template to use
                    "assets": { //add these script/link tags
                        "client": "/[hash].js",
                    }
                }
            )
        })),

    module: {
        rules: require('./loaders').concat([
            {
                use: 'babel-loader',
                test: /\.js?/,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!sass-loader"})
            }
        ])
    }
}
;
