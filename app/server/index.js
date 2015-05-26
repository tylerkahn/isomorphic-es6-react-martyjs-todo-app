var _ = require('lodash');
var path = require('path');
var logger = require('morgan');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

require("babel/register");

module.exports = function() {
    var app = express();

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    app.set('port', process.env.PORT || 8000);

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, '..', '..', 'build')));

    app.use(require('marty-express')({
      application: require('../index'),
      routes: require('../router/routes')
    }));

    app.listen(app.get('port'));

    console.log('todo-marty started at http://localhost:' + app.get('port'));
}
