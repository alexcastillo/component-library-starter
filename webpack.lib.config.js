
const path = require('path');
const webpack = require('webpack');
const { DefinePlugin, optimize } = webpack;
const WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin;

const { buildDir, libDir } = require('./config');

module.exports = {
    entry: {
        ['components']: './src/index.js',
        ['components.min']: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, buildDir, libDir),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'components'
    },
    externals: [
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            }
        },
        {
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom'
            }
        }
    ],
    module: {
        rules: [
            { 
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            react: path.resolve('./node_modules/react'),
        }
    },
    plugins: [
        new DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        }),
        new WebpackBundleSizeAnalyzerPlugin('./bundle-size.report.txt')
    ]
};
