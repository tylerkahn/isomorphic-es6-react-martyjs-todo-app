import Marty from 'marty';
import TodoConstants from '../constants/todoConstants';

export default Marty.createActionCreators({
  createTodo(body) {
    return this.app.todoAPI.create(body)
      .then(res => this.dispatch(TodoConstants.CREATE_TODO_DONE, res.body.todo))
      .catch(err => this.dispatch(TodoConstants.CREATE_TODO_FAILED, err));
  }
});
