const webpack = require('webpack');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

developmentConfig = () =>
    merge([
        {
            plugins: [new webpack.HotModuleReplacementPlugin()],
        },
        parts.generateSourceMaps({type: 'eval-source-map'}),
        parts.devServer({
            host: process.env.HOST,
            port: process.env.PORT,
        }),
        parts.developmentCSS(),
        parts.loadImages(),
    ]);

module.exports = developmentConfig;
