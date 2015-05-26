var _ = require('lodash');
var Marty = require('marty');

/*var ctx = require.context(__dirname, true,
    /(stores|actions|queries|sources)\/.*\.js$/);
*/

function loadContext(contextRequire, fn) {
  contextRequire.keys().forEach(fn(contextRequire(mod)));
}

var App = Marty.createApplication(function () {

  this.router = require('./router');

  laodContext(ctx, (mod) => this.register);

});

module.exports = App;
