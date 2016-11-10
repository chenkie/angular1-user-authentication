const config = require('./webpack.base.conf');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSASS = new ExtractTextPlugin('app.css');
const HtmlWebpackPlugin = require('html-webpack-plugin');

config.plugins = config.plugins.concat([
  extractSASS,
  new webpack.optimize.UglifyJsPlugin({
    comments: false,
    compress: {
      warnings: false,
    },
    sourceMap: false,
    mangle: false,
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new HtmlWebpackPlugin(config.html),
]);

const css = [0, 1];

for (let k in css) {
  const cssLoaders = config.module.loaders[k].loaders;
  config.module.loaders[k].loaders = null;
  config.module.loaders[k].loader = extractSASS.extract(cssLoaders.slice(1, 10));
}

module.exports = config;
