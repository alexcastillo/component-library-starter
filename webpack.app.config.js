
const path = require('path');
const webpack = require('webpack');
const { DefinePlugin, optimize } = webpack;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { buildDir, appDir, port } = require('./config');

const PRODUCTION = process.env.NODE_ENV === 'production';

const prodPlugins = !PRODUCTION ? [] : [
    new DefinePlugin({
        'process.env':{
            'NODE_ENV': JSON.stringify('production')
        }
    })
];

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, buildDir, appDir),
        filename: PRODUCTION ? 'index.[hash].js' : 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'to-string-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html.template'),
            hash: true
        }),
        ...prodPlugins
    ],
    devtool: 'eval-source-map',
    devServer: {
        watchOptions: {
            aggregateTimeout: 1500,
            poll: 1500
        },
        contentBase: './',
        compress: true,
        port
    }
};
