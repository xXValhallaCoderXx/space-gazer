const webpack = require('webpack');
const merge = require('webpack-merge');
const PATHS = require('./paths');
const path = require('path');
const parts = require('./webpack.parts');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../env-keys.json');

commonConfig = (app) =>
    merge([
        {
            entry: {
                app: PATHS.app,
            },
            output: {
                publicPath: '/',
            },
            resolve: {
                extensions: ['.ts', '.tsx', '.js'],
                modules: [path.resolve(__dirname, '../src'), 'node_modules'],
            },
            plugins: [
                new HtmlWebpackPlugin({
                    title: 'Renate Gouveia - Path to Valhalla',
                    template: path.resolve(__dirname, '../src/index.html'),
                }),
            ],
        },
        parts.loadJavaScript({
            include: [PATHS.app],
            exclude: PATHS.nodeModules,
        }),
        parts.fontLoader(),
        // Will read from env-vars.json and set Variables for Production/Development
        parts.setFreeVariables(config[app.target]),
    ]);

module.exports = commonConfig;
