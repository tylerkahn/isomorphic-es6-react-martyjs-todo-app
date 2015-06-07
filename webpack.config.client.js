var webpackConfig = require('./webpack.config');
var _ = require('lodash');

module.exports = _.merge(webpackConfig, {
  entry: {
    main: [
          'webpack-dev-server/client?http://0.0.0.0:9009' , // WebpackDevServer host and port
          'webpack/hot/only-dev-server',
          './app/main.js'
      ]
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    publicPath: "http://localhost:9009/assets/"
  }
});

