import React from 'react';
import Marty from 'marty';
import _ from 'lodash';

import ReactBootstrap from 'react-bootstrap';
let {ListGroup, ListGroupItem, Input} = ReactBootstrap;

const Todo = require('../components/todoComponent');

const TodosView = React.createClass({
  render() {
    const todos = this.props.todos;
    return (
      <div>
        <h2>Todos</h2>
        <ListGroup>
          {todos.map(todo =>
            <ListGroupItem key={todo.id} ><Todo id={todo.id} todo={todo} /></ListGroupItem>
          )}
          <ListGroupItem>
            <Input
              type='text'
              placeholder='Enter new todo item'
              ref='input'
              onKeyDown={this.createTodo} />
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  },
  componentDidMount() {
    React.findDOMNode(this.refs.input).firstChild.focus();
  },
  componentDidUpdate() {
    React.findDOMNode(this.refs.input).firstChild.focus();
  },
  createTodo(e) {
    if (e.keyCode === 13) { //Enter
      this.app.todoActionCreators.createTodo(e.target.value);
    }
  }
});

export default Marty.createContainer(TodosView, {
  listenTo: ['todoStore'],
  fetch: {
    todos() {
      return this.app.todoStore.getAll();
    }
  },
  pending() {
    return <div className='loading'>Loading</div>;
  },
  failed(error) {
    return <div className='error'>{error}</div>;
  }
});
