import { getConfig } from '@edx/frontend-platform';
export var buildLmsUrl = function buildLmsUrl(url) {
  return "".concat(getConfig().LMS_BASE_URL).concat(url);
};
export var buildCmsUrl = function buildCmsUrl(url) {
  return "".concat(getConfig().STUDIO_BASE_URL).concat(url);
};
//# sourceMappingURL=utils.js.map