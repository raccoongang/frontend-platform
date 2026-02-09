import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import { buildLmsUrl } from '../../../../../utils';
var BASE_REQUEST_HEADERS = {
  headers: {
    Accept: 'application/json'
  }
};
var ENDPOINTS = {
  getPublishers: function getPublishers(query) {
    return buildLmsUrl("/api/hryfuvannia/v1/publisher-search/?query=".concat(query));
  }
};
export var getPublishers = function getPublishers(query) {
  var client = getAuthenticatedHttpClient();
  return client.get(ENDPOINTS.getPublishers(query), BASE_REQUEST_HEADERS).then(function (response) {
    return response.data.map(function (item) {
      return {
        value: item,
        label: item
      };
    });
  });
};
//# sourceMappingURL=api.js.map