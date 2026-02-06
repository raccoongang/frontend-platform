function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import { Alert } from '@openedx/paragon';
import { CheckCircle, Info, WarningFilled } from '@openedx/paragon/icons';
import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { DJANGO_MESSAGE_LEVEL_TO_PARAGON_VARIANT } from './constants';
import { getDjangoMessagesOptions } from './data/queries';
var PARAGON_VARIANT_TO_ICON = {
  info: Info,
  success: CheckCircle,
  warning: WarningFilled,
  danger: Info
};
function DjangoMessagesRenderer(_ref) {
  var tags = _ref.tags;
  var _useQuery = useQuery(_objectSpread(_objectSpread({}, getDjangoMessagesOptions()), {}, {
      select: function select(data) {
        return tags.length ? data.filter(function (message) {
          return message.tags.some(function (messageTag) {
            return tags.includes(messageTag);
          });
        }) : data;
      }
    })),
    messages = _useQuery.data,
    isFetching = _useQuery.isFetching,
    isError = _useQuery.isError;
  if (isFetching || isError || !messages) {
    return null;
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, messages.map(function (message) {
    var variant = DJANGO_MESSAGE_LEVEL_TO_PARAGON_VARIANT[message.level];
    var Icon = PARAGON_VARIANT_TO_ICON[variant] || null;
    return /*#__PURE__*/React.createElement(Alert, {
      variant: variant,
      icon: Icon
    }, message.message);
  }));
}
DjangoMessagesRenderer.defaultProps = {
  tags: []
};
DjangoMessagesRenderer.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string)
};
export default DjangoMessagesRenderer;
//# sourceMappingURL=DjangoMessagesRenderer.js.map