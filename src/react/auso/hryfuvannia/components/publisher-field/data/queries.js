import { queryOptions } from '@tanstack/react-query';

import * as api from './api';

export const getPublishersOptions = (query) => queryOptions({
  queryFn: () => api.getPublishers(query),
  queryKey: ['GetPublishers', query],
  staleTime: Infinity,
});
