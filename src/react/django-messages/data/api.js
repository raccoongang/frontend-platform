import { camelCaseObject, ensureConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';

import { buildLmsUrl } from '../../utils';

ensureConfig(['LMS_BASE_URL'], 'Teacher Dashboard MFE');

const BASE_REQUEST_HEADERS = { headers: { Accept: 'application/json' } };

const ENDPOINTS = {
  getDjangoMessagesUrl: () => buildLmsUrl('/meta_user/api/v1/django-messages/'),
};

export const getDjangoMessages = () => {
  const client = getAuthenticatedHttpClient();

  return client
    .get(ENDPOINTS.getDjangoMessagesUrl(), BASE_REQUEST_HEADERS)
    .then((response) => camelCaseObject(response.data));
};
