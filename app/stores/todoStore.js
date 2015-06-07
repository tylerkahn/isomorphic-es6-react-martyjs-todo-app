var _ = require('lodash');
var Marty = require('marty');
var TodoConstants = require('../constants/todoConstants');

var TodoStore = Marty.createStore({
  handlers: {
    addTodo: TodoConstants.RECEIVE_TODO,
    addTodos: TodoConstants.RECEIVE_TODOS
  },
  getInitialState() {
    return {
        todos: {},
        allQuery: undefined
    };
  },
  addTodo(todo) {
    this.state.todos[todo.id] = todo;
    this.hasChanged();
  },
  addTodos(todos) {
    todos.forEach((todo) => this.addTodo(todo));
    this.state.allQuery = true;
  },
  getAll() {
    return this.fetch({
        id: '_all',
        locally() {
            return this.state.allQuery && _.values(this.state.todos);
        },
        remotely() {
            return this.app.todoQuery.getAll();
        }
    });
  },
  getById(id) {
    return this.fetch({
      id: id,
      locally() {
        return this.state.todos[id];
      },
      remotely() {
        return this.app.todoQuery.getById(id);
      }
    });
  }
});

module.exports = TodoStore;
