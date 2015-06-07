var React = require('react');

export default class Hello extends React.Component {
  render() {
    return (
      <div className="hello">
        <h1 ref="title">Hello world 2!</h1>
      </div>
    );
  }
}
