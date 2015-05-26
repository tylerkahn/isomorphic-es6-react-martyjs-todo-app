var React = require('react');

var Hello = React.createClass({
  render: function () {
    return (
      <div className="hello">
        <h1 ref="title">Hello world 2!</h1>
      </div>
    );
  }
});

module.exports = Hello;
