import Marty from 'marty';
import TodoConstants from '../constants/todoConstants';

export default  Marty.createActionCreators({
  getById(id) {
    return this.app.todoAPI.getById(id)
      .then(res => this.dispatch(TodoConstants.RECEIVE_TODO, res.body.todo, id))
      .catch(err => this.dispatch(TodoConstants.RECEIVE_TODO_FAILED, err, id));
  },
  getAll() {
    return this.app.todoAPI.getAll()
        .then(res => this.dispatch(TodoConstants.RECEIVE_TODOS, res.body.todos))
        .catch(err => this.dispatch(TodoConstants.RECEIVE_TODOS_FAILED, err));
  }
});
