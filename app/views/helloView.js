import React from 'react';

export default class HelloView extends React.Component {
  render() {
    return (
      <div className="hello">
        <h1 ref="title">Hello world!</h1>
      </div>
    );
  }
}
