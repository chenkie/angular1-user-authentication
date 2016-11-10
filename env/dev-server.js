const webpack = require('webpack');
const ora = require('ora');
const webpackConfig = require('./webpack.dev.conf.js');
const config = require('./config');
const chokidar = require('chokidar');
const WebpackDevServer = require('webpack-dev-server');
const compiler = webpack(webpackConfig);
const hotMiddleware = require('webpack-hot-middleware')(compiler);
const spinner = ora(`[Angular] Serving app ...\n`);
require('shelljs/global');

const refresh = path => {
  console.log('* ' + path + ' changed');
  hotMiddleware.publish({ action: 'reload' });
};

spinner.start();
chokidar.watch(config.forceReload).on('change', refresh).on('add', refresh);

const serverOptions = {
  contentBase: config.base,
  hot: true,
  historyApiFallback: true,
  quiet: false,
  noInfo: false,
  publicPath: webpackConfig.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 50,
  },
  stats: { colors: true },
};

if (config.proxy) {
  serverOptions.proxy = {
    '*': {
      target: config.proxy,
      changeOrigin: true,
      bypass: (req, res, proxyOptions) => {
        if (req.url.includes('__webpack_hmr')) {
          return req.url;
        }
      },
    },
  };
}

const server = new WebpackDevServer(compiler, serverOptions);

server.use(hotMiddleware);
spinner.stop();

server.listen(config.port, err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('====> http://localhost:' + config.port + '\n');
});
