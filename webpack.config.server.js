var webpackConfig = require('./webpack.config');
var _ = require('lodash');

module.exports = _.merge(webpackConfig, {
  entry: {
      server: [
          './server/index.js'
      ]
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },
  target: 'node',
  watch: true
});

