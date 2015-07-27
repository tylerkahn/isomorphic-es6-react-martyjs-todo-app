import Marty from 'marty';
import Router from '../router';

export default Marty.createActionCreators({
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
