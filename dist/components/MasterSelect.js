import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import SuperSelect from './SuperSelect';

var MasterSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(MasterSelect, _Component);

  function MasterSelect() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MasterSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MasterSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.getSelectedItems = function (v) {
      console.log(v);

      _this.props.callbackFromParent(v);
    };

    return _this;
  }

  _createClass(MasterSelect, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      return React.createElement("div", null, React.createElement(SuperSelect, {
        options: this.props.options,
        getSelectedItems: this.getSelectedItems
      }));
    }
  }]);

  return MasterSelect;
}(Component);

export default MasterSelect;