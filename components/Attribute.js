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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.ATTRIBUTE;

var Attribute = function (_Component) {
  _inherits(Attribute, _Component);

  function Attribute() {
    _classCallCheck(this, Attribute);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Attribute).apply(this, arguments));
  }

  _createClass(Attribute, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: CLASS_ROOT },
        _react2.default.createElement(
          'label',
          { className: CLASS_ROOT + '__label' },
          this.props.label
        ),
        _react2.default.createElement(
          'span',
          { className: CLASS_ROOT + '__contents' },
          this.props.children
        )
      );
    }
  }]);

  return Attribute;
}(_react.Component);

Attribute.displayName = 'Attribute';
exports.default = Attribute;
;

Attribute.propTypes = {
  label: _react.PropTypes.string
};
module.exports = exports['default'];