const path = require('path');
const autoprefixer = require('autoprefixer');
const conf = require('./config');
const root = path.resolve(__dirname, '../');

module.exports = {
  entry: conf.entry,
  output: conf.output,
  resolve: {
    extensions: ['', '.js', '.css', '.styl', '.html'],
    fallback: [path.join(__dirname, '../node_modules')],
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /(node_modules|libs|env|dist)/,
      },
    ],
    loaders: [
      {
        test: /\.styl$/,
        loaders: ['style', 'css', 'postcss', 'stylus'],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss'],
      },
      {
        test: /\.html/,
        loaders: ['html'],
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: root,
        exclude: /(node_modules|libs|env|dist)/,
      },
      {
        test: /\.(png|jpg|gif|svg|ico|woff2?|eot|ttf)(\?.*)?$/,
        loader: 'file',
        query: {
          limit: 10000,
          name: 'assets/[name].[ext]',
        },
      },
    ],
  },
  eslint: {
    configFile: path.resolve(root, './.eslintrc'),
    formatter: require('eslint-friendly-formatter'),
  },
  html: {
    template: path.resolve(root, conf.html),
    inject: false,
  },
  postcss: () => [autoprefixer({ browsers: conf.support })],
  plugins: [],
};
