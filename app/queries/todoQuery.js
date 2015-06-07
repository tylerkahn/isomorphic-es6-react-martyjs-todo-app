var Marty = require('marty');
var TodoConstants = require('../constants/todoConstants');

var TodoQuery = Marty.createActionCreators({
  getById(id) {
    return this.app.todoAPI.getById(id)
      .then((res) => this.dispatch(TodoConstants.RECEIVE_TODO, res.body.todo, id))
      .catch((err) => this.dispatch(TodoConstants.RECEIVE_TODO_FAILED, err, id));
  },
  getAll() {
    return this.app.todoAPI.getAll()
        .then((res) => this.dispatch(TodoConstants.RECEIVE_TODOS, res.body.todos))
        .catch((err) => this.dispatch(TodoConstants.RECEIVE_TODOS_FAILED, err));
  }
});

module.exports = TodoQuery;
