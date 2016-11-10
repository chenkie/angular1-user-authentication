require('shelljs/global');

const ora = require('ora');
const webpack = require('webpack');
const config = require('./webpack.prod.conf');
const spinner = ora(`[Angular] Building app ...`);
spinner.start();

rm('-rf', config.output.path);

const [colors, modules, children, chunks, chunkModules] = [true, false, false, false, false];

webpack(config, (err, stats) => {
  spinner.stop();

  if (err) {
    throw err;
  }

  process.stdout.write(stats.toString({
        colors,
        modules,
        children,
        chunks,
        chunkModules,
      }) + '\n');

  cp('env/.htaccess', config.output.path);
});
