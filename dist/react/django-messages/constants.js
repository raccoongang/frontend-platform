function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
export var DJANGO_INFO_LEVEL = 20;
export var DJANGO_SUCCESS_LEVEL = 25;
export var DJANGO_WARNING_LEVEL = 30;
export var DJANGO_ERROR_LEVEL = 40;
export var DJANGO_MESSAGE_LEVEL_TO_PARAGON_VARIANT = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, DJANGO_INFO_LEVEL, 'info'), DJANGO_SUCCESS_LEVEL, 'success'), DJANGO_WARNING_LEVEL, 'warning'), DJANGO_ERROR_LEVEL, 'danger');
//# sourceMappingURL=constants.js.map