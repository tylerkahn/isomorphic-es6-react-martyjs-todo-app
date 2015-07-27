import React from 'react';
import Marty from 'marty';

class Todo extends React.Component {
  render() {
    let todo = this.props.todo;

    return (
        <div className='todo'>
            {todo.id} - <strong>{todo.body}</strong>
        </div>
    );
  }
}

export default Marty.createContainer(Todo, {
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
