/** @jsx React.DOM */

var ClickMe = React.createClass({
  getInitialState: function() {
    return {
      toggled: false
    };
  },

  handleClick: function() {
    this.setState({
      toggled: !this.state.toggled
    })
  },

  render: function() {
    var classString = this.state.toggled ? "box toggled" : "box";
    return React.createElement(
      'div',
      {className: classString, onClick: this.handleClick},
      'Click Me'
    );
  }
});

React.render(
  React.createElement(ClickMe, null),
  document.getElementById("page"));