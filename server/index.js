require('source-map-support').install();

var _ = require('lodash');
var path = require('path');
var logger = require('morgan');
var express = require('express');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');

var app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));

app.use(require('marty-express')({
  application: require('../app/index'),
  routes: require('../app/router/routes'),
  render: function(locals) {
    return ejs.render(require('html!./views/index.ejs'), locals);
  }
}));

app.listen(5000);

console.log('isomorphic-todo started at http://localhost:5000');
