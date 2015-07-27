import React from 'react';
import Marty from 'marty';

import Todo from '../components/todoComponent';

export default class TodoView extends React.Component {
  render() {
    let id = this.props.id;
    return (
        <div>
            <h3>Todo</h3>
            <Todo id={id} />
        </div>
    );
  }
}
