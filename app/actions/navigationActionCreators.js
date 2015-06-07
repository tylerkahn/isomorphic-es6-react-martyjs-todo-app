var Marty = require('marty');
var Router = require('../router');

var NavigationActionCreators = Marty.createActionCreators({
  navigateTo(route, params) {
    this.app.router.transitionTo(route, params);
  },
  navigateHome() {
    this.navigateTo('home');
  },
  navigateToTodos() {
    this.navigateTo('todos');
  },
  navigateToTodo(id) {
    this.navigateTo('todo', { id: id });
  }
});


module.exports = NavigationActionCreators;
