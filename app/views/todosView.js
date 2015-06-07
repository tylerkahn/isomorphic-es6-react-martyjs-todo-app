var React = require('react');
var Marty = require('marty');
var _ = require('lodash');

import ReactBootstrap from 'react-bootstrap';
let {ListGroup, ListGroupItem} = ReactBootstrap;

var Todo = require('../components/todoComponent');

const TodosView = React.createClass({
  render: function() {
    var todos = this.props.todos;
    return (
      <div>
        <h2>Todos</h2>
        <ListGroup>
          {todos.map(todo =>
            <ListGroupItem key={todo.id} ><Todo id={todo.id} todo={todo} /></ListGroupItem>
          )}
        </ListGroup>
      </div>
    );
  }
});

const TodosViewContainer = Marty.createContainer(TodosView, {
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

export default TodosViewContainer;
