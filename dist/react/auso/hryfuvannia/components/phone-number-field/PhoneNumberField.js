function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { memo, useCallback, useState } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Form } from '@openedx/paragon';
import PropTypes from 'prop-types';
import messages from './PhoneNumberField.messages';
export var UA_PHONE_MASK = '+38\\0 (00) 000-00-00';
function PhoneNumberField(_ref) {
  var value = _ref.value,
    fieldErrors = _ref.fieldErrors,
    mask = _ref.mask,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur,
    onClick = _ref.onClick;
  var _useIntl = useIntl(),
    formatMessage = _useIntl.formatMessage;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    unmasked = _useState2[0],
    setUnmasked = _useState2[1];
  var handleMaskValue = useCallback(function (maskValue) {
    setUnmasked(maskValue);
    onChange(maskValue);
  }, [onChange]);
  var handleOnBlur = function handleOnBlur() {
    onBlur(unmasked);
  };
  return /*#__PURE__*/React.createElement(Form.Group, {
    isInvalid: !!fieldErrors.phone_number
  }, /*#__PURE__*/React.createElement(Form.Label, null, formatMessage(messages.labelPhoneNumber)), /*#__PURE__*/React.createElement(Form.Control, {
    name: "phone_number",
    value: value,
    "aria-invalid": !!fieldErrors.phone_number,
    inputMask: mask,
    unmask: true,
    lazy: false,
    placeholderChar: "_",
    onAccept: handleMaskValue,
    onBlur: handleOnBlur,
    onClick: onClick
  }), fieldErrors.phone_number && /*#__PURE__*/React.createElement(Form.Control.Feedback, {
    id: "phone-number-error",
    type: "invalid",
    className: "form-text-size",
    hasIcon: false
  }, fieldErrors.phone_number));
}
PhoneNumberField.propTypes = {
  value: PropTypes.string.isRequired,
  fieldErrors: PropTypes.shape({
    phone_number: PropTypes.string
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  mask: PropTypes.string
};
PhoneNumberField.defaultProps = {
  onBlur: function onBlur() {
    return null;
  },
  onClick: function onClick() {
    return null;
  },
  mask: UA_PHONE_MASK
};
export default /*#__PURE__*/memo(PhoneNumberField);
//# sourceMappingURL=PhoneNumberField.js.map