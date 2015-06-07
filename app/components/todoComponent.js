import React from 'react';
import Marty from 'marty';

class _Todo extends React.Component {
  render() {
    let todo = this.props.todo;

    return (
        <div className='todo'>
            {todo.id} x> *{todo.body}*
        </div>
    );
  }
}

const Todo = Marty.createContainer(_Todo, {
  listenTo: ['todoStore'],
  fetch: {
    todo() {
      return this.app.todoStore.getById(this.props.id);
    }
  },
  pending() {
    return <div className='loading'>Loading</div>;
  },
  failed(error) {
    return <div className='error'>{error}</div>;
  }
});

export default Todo;
