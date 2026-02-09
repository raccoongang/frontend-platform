import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';

import { buildLmsUrl } from '../../../../../utils';

const BASE_REQUEST_HEADERS = { headers: { Accept: 'application/json' } };

const ENDPOINTS = {
  getPublishers: (query) => buildLmsUrl(`/api/hryfuvannia/v1/publisher-search/?query=${query}`),
};

export const getPublishers = (query) => {
  const client = getAuthenticatedHttpClient();

  return client
    .get(ENDPOINTS.getPublishers(query), BASE_REQUEST_HEADERS)
    .then((response) => response.data.map((item) => ({ value: item, label: item })));
};
