import { camelCaseObject, ensureConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import { buildLmsUrl } from '../../utils';
ensureConfig(['LMS_BASE_URL'], 'Teacher Dashboard MFE');
var BASE_REQUEST_HEADERS = {
  headers: {
    Accept: 'application/json'
  }
};
var ENDPOINTS = {
  getDjangoMessagesUrl: function getDjangoMessagesUrl() {
    return buildLmsUrl('/meta_user/api/v1/django-messages/');
  }
};
export var getDjangoMessages = function getDjangoMessages() {
  var client = getAuthenticatedHttpClient();
  return client.get(ENDPOINTS.getDjangoMessagesUrl(), BASE_REQUEST_HEADERS).then(function (response) {
    return camelCaseObject(response.data);
  });
};
//# sourceMappingURL=api.js.map