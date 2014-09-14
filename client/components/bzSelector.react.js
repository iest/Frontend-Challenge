/**
 * @jsx React.DOM
 */
var React = require('react/addons');
var cx = React.addons.classSet;

var bzSelector = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      width: null
    };
  },

  /**
   * We want the defined width of the element to change according to it's
   * contents, and it be animated.
   *
   * To do so we render a dummy component to static markup, append it to the
   * DOM, measure it's width, set the width of this component to that
   * measurement, then remove the dummy.
   *
   * A better version of this would check if the new props were different or
   * not. It's not as simple as nextProps === this.props AFAIK.
   */
  componentWillReceiveProps: function(newProps) {
    this.setStickyWidth(newProps);
  },
  setStickyWidth: function(newProps) {
    // TODO: wrap this up into a mixin so I can use it with bzInput
    // TODO: infrequent bug sets the width of the items on inital render to be
    //       way too small

    var noop = function() {};
    var dummyClass = "dummyElement-" + new Date().getTime();
    var body = document.body;
    var dummyComponent = React.renderComponentToStaticMarkup(
      <bzSelector onClick={noop}>{newProps.children}</bzSelector>
    );

    var node = document.createElement('span');
    node.classList.add(dummyClass);
    node.innerHTML = dummyComponent;
    body.appendChild(node);

    var newWidth = node.offsetWidth;
    this.setState({
      width: newWidth
    });
    body.removeChild(node);
  },
  componentDidMount: function() {
    var width = this.getDOMNode().offsetWidth;
    this.setState({
      width: width
    });
  },
  handleClick: function(event) {
    var _this = this;

    // Stop iPhone from calling on the click event (we only want the touch)
    event.preventDefault();

    if (!this.props.disabled) {
      this.props.onClick();
    }
  },
  render: function() {
    var styles = null;

    if (this.state.width) {
     styles = {width: this.state.width + "px"};
    }

    var classes = cx({
      "bzSelector": true,
      "is-disabled": this.props.disabled
    });

    return (
      <button className={classes} style={styles} disabled={this.props.disabled} onClick={this.handleClick} onTouchStart={this.handleClick}>
        {this.props.children}
      </button>
    );
  }
});

module.exports = bzSelector;