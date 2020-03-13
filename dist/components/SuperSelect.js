import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component, Fragment } from 'react';
import './SuperSelect.css';
import "antd/dist/antd.css";
import { TreeSelect } from "antd";
var SHOW_PARENT = TreeSelect.SHOW_PARENT;

var SuperSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(SuperSelect, _Component);

  function SuperSelect() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SuperSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SuperSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      treeData: [],
      value: null
    };

    _this.onChange = function (value) {
      var treeData = _this.state.treeData;

      if (value[0] && value[0].value === "All") {
        _this.setState({
          value: treeData[0].children
        }, function () {
          _this.props.getSelectedValue(_this.state.value);
        });
      } else {
        _this.setState({
          value: value
        }, function () {
          _this.props.getSelectedValue(_this.state.value);
        });
      }
    };

    return _this;
  }

  _createClass(SuperSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        treeData: this.props.options
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.options !== prevProps.options) {
        this.setState({
          treeData: this.props.options
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var tProps = {
        treeData: this.state.treeData,
        value: this.state.value,
        onChange: this.onChange,
        treeCheckable: true,
        treeDefaultExpandAll: true,
        showCheckedStrategy: SHOW_PARENT,
        searchPlaceholder: "Please select",
        dropdownMatchSelectWidth: true,
        labelInValue: true,
        treeNodeLabelProp: "title",
        maxTagCount: 1,
        style: {
          width: "100%"
        }
      };
      return React.createElement(Fragment, null, React.createElement(TreeSelect, tProps));
    }
  }]);

  return SuperSelect;
}(Component);

export default SuperSelect;