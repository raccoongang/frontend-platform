import { getConfig } from '@edx/frontend-platform';
export var buildLmsUrl = function buildLmsUrl(url) {
  return "".concat(getConfig().LMS_BASE_URL).concat(url);
};
export var buildCmsUrl = function buildCmsUrl(url) {
  return "".concat(getConfig().STUDIO_BASE_URL).concat(url);
};
export var getExtendedProfileField = function getExtendedProfileField(extendedProfile, fieldName) {
  var _extendedProfile$find, _extendedProfile$find2;
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (_extendedProfile$find = extendedProfile === null || extendedProfile === void 0 || (_extendedProfile$find2 = extendedProfile.find(function (item) {
    return item.fieldName === fieldName;
  })) === null || _extendedProfile$find2 === void 0 ? void 0 : _extendedProfile$find2.fieldValue) !== null && _extendedProfile$find !== void 0 ? _extendedProfile$find : defaultValue;
};
//# sourceMappingURL=utils.js.map