'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CSSClassnames = require('../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.VALUE;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Value = function (_Component) {
  _inherits(Value, _Component);

  function Value() {
    _classCallCheck(this, Value);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Value).apply(this, arguments));
  }

  _createClass(Value, [{
    key: 'render',
    value: function render() {
      var classes = [CLASS_ROOT];
      if (this.props.size) {
        classes.push(CLASS_ROOT + '--' + this.props.size);
      }
      if (this.props.align) {
        classes.push(CLASS_ROOT + '--align-' + this.props.align);
      }
      if (this.props.onClick) {
        classes.push(CLASS_ROOT + '--interactive');
      }
      if (this.props.colorIndex) {
        classes.push(COLOR_INDEX + '-' + this.props.colorIndex);
      }
      if (this.props.className) {
        classes.push(this.props.className);
      }

      var units = void 0;
      if (this.props.units) {
        units = _react2.default.createElement(
          'span',
          { className: CLASS_ROOT + '__units' },
          this.props.units
        );
      }

      var label = void 0;
      if (this.props.label) {
        label = _react2.default.createElement(
          'span',
          { className: CLASS_ROOT + '__label' },
          this.props.label
        );
      }

      return _react2.default.createElement(
        'div',
        { className: classes.join(' '), onClick: this.props.onClick },
        _react2.default.createElement(
          'div',
          { className: CLASS_ROOT + '__annotated' },
          this.props.icon,
          _react2.default.createElement(
            'span',
            { className: CLASS_ROOT + '__value' },
            this.props.value
          ),
          units,
          this.props.trendIcon
        ),
        label
      );
    }
  }]);

  return Value;
}(_react.Component);

Value.displayName = 'Value';
exports.default = Value;


Value.propTypes = {
  align: _react.PropTypes.oneOf(['start', 'center', 'end']),
  colorIndex: _react.PropTypes.string,
  icon: _react.PropTypes.node,
  label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
  onClick: _react.PropTypes.func,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  trendIcon: _react.PropTypes.node,
  value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.node]),
  units: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node])
};

Value.defaultProps = {
  align: 'center'
};
module.exports = exports['default'];