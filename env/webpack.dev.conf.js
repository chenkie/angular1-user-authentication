const webpack = require('webpack');
const webpackConfig = require('./webpack.base.conf');
const config = require('./config');

Object.keys(webpackConfig.entry).forEach(name => {
  webpackConfig.entry[name] = ['./env/dev-client'].concat(webpackConfig.entry[name]);
});

webpackConfig.devtool = '#eval-source-map';
webpackConfig.devServer = { headers: { 'Access-Control-Allow-Origin': '*' } }; // CORS

if (config.proxy) {
  webpackConfig.output.publicPath = `http://localhost:${config.port}${webpackConfig.output.publicPath}`;
}

webpackConfig.plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
].concat(webpackConfig.plugins);

module.exports = webpackConfig;
