import _ from 'lodash';
import Marty from 'marty';
import TodoConstants from '../constants/todoConstants';

export default Marty.createStore({
  handlers: {
    createTodo: TodoConstants.CREATE_TODO_DONE,
    addTodo: TodoConstants.RECEIVE_TODO,
    addTodos: TodoConstants.RECEIVE_TODOS
  },
  getInitialState() {
    return {
        todos: {},
        allQuery: undefined
    };
  },
  createTodo(todo) {
    this.addTodo(todo);
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
