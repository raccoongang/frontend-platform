function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { memo, useRef, useState } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Form } from '@openedx/paragon';
import { useQuery } from '@tanstack/react-query';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import { components } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { getPublishersOptions } from './data/queries';
import messages from './PublisherField.messages';
var MIN_INPUT_LENGTH = 3;
var MAX_INPUT_LENGTH = 240;
function MaxLengthInput(props) {
  return /*#__PURE__*/React.createElement(components.Input, _extends({}, props, {
    maxLength: MAX_INPUT_LENGTH
  }));
}
var SELECT_COMPONENTS = {
  Input: MaxLengthInput
};
function PublisherField(_ref) {
  var value = _ref.value,
    fieldErrors = _ref.fieldErrors,
    onChange = _ref.onChange,
    _onBlur = _ref.onBlur;
  var _useIntl = useIntl(),
    formatMessage = _useIntl.formatMessage;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchText = _useState2[0],
    setSearchText = _useState2[1];
  var isSearchEnabled = searchText.length >= MIN_INPUT_LENGTH;
  var _useQuery = useQuery(_objectSpread(_objectSpread({}, getPublishersOptions(searchText)), {}, {
      enabled: isSearchEnabled
    })),
    data = _useQuery.data,
    isLoading = _useQuery.isLoading;
  var handleSearchDebounced = useRef(debounce(function (text) {
    return setSearchText(text);
  }, 300)).current;
  var handleInputChange = function handleInputChange(inputText) {
    handleSearchDebounced(inputText);
  };
  var handleChange = function handleChange(selectedOption, actionMeta) {
    var formattedValue = null;
    if (selectedOption) {
      formattedValue = actionMeta.action === 'create-option' ? "".concat(selectedOption.value, " ").concat(formatMessage(messages.newSuffix)) : selectedOption.value;
    }
    var newValue = actionMeta.action === 'clear' ? null : {
      value: formattedValue,
      label: (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) || null
    };
    onChange(newValue);
  };
  var isValidNewOption = function isValidNewOption(inputValue, newValue, options) {
    if (options.find(function (option) {
      return option.label.localeCompare(inputValue, undefined, {
        sensitivity: 'accent'
      }) === 0;
    })) {
      return false;
    }
    return inputValue.length >= MIN_INPUT_LENGTH;
  };
  var formatCreateLabel = function formatCreateLabel(inputValue) {
    return inputValue;
  };
  var formatOptionLabel = function formatOptionLabel(_ref2) {
    var label = _ref2.label,
      __isNew__ = _ref2.__isNew__;
    return __isNew__ ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, formatMessage(messages.labelNewPrefix)), " ", label) : label;
  };
  var getLoadingOrPromptMessage = function getLoadingOrPromptMessage(_ref3) {
    var inputValue = _ref3.inputValue;
    if (inputValue.length < MIN_INPUT_LENGTH) {
      var remaining = MIN_INPUT_LENGTH - inputValue.length;
      return formatMessage(messages.enterMoreChars, {
        count: remaining
      });
    }
    return formatMessage(messages.searching);
  };
  return /*#__PURE__*/React.createElement(Form.Group, {
    isInvalid: !!fieldErrors.publisher_name
  }, /*#__PURE__*/React.createElement(Form.Label, null, formatMessage(messages.labelPublisher)), /*#__PURE__*/React.createElement(CreatableSelect, {
    placeholder: "",
    options: data || [],
    isLoading: !!searchText && isLoading,
    isValidNewOption: isValidNewOption,
    getNewOptionData: function getNewOptionData(inputValue, optionLabel) {
      return {
        value: inputValue,
        label: optionLabel,
        __isNew__: true
      };
    },
    formatCreateLabel: formatCreateLabel,
    formatOptionLabel: formatOptionLabel,
    onChange: handleChange,
    onInputChange: handleInputChange,
    onBlur: function onBlur() {
      return _onBlur('publisher_name', value);
    },
    value: value,
    classNamePrefix: "react-select",
    noOptionsMessage: getLoadingOrPromptMessage,
    loadingMessage: getLoadingOrPromptMessage,
    components: SELECT_COMPONENTS,
    isClearable: true
  }), fieldErrors.publisher_name && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    type: "invalid",
    className: "form-text-size",
    hasIcon: false
  }, fieldErrors.publisher_name));
}
PublisherField.propTypes = {
  value: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  }).isRequired,
  fieldErrors: PropTypes.shape({
    publisher_name: PropTypes.string
  }).isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};
PublisherField.defaultProps = {
  onBlur: function onBlur() {
    return null;
  }
};
export default /*#__PURE__*/memo(PublisherField);
//# sourceMappingURL=PublisherField.js.map