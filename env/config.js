const path = require('path');

module.exports = {
  html: './src/index.html', // main index.html file
  entry: {
    app: ['./src/app.styl', 'babel-polyfill', './src/app.js'], // main style and javascript entry + polyfill
  },
  output: {
    path: path.resolve(__dirname, '../dist'), // build directory
    filename: '[name].js', // file name of build process
    publicPath: '', // don't touch this
  },
  port: 3002, // port of server in development
  base: './src/', // source to serv on dev server
  support: ['last 2 versions'], // autoprefixer vendor on CSS/Stylus files, support browsers
  forceReload: ['./src/index.html'], // force reload when edit index.html file
};
