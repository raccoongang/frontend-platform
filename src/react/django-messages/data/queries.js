import { queryOptions } from '@tanstack/react-query';

import * as api from './api';

export const getDjangoMessagesOptions = () => queryOptions({
  queryFn: () => api.getDjangoMessages(),
  queryKey: ['GetDjangoMessages'],
  refetchOnReconnect: false,
  refetchOnWindowFocus: false,
});
