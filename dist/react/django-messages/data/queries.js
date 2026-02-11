import { queryOptions } from '@tanstack/react-query';
import * as api from './api';
export var getDjangoMessagesOptions = function getDjangoMessagesOptions() {
  return queryOptions({
    queryFn: function queryFn() {
      return api.getDjangoMessages();
    },
    queryKey: ['GetDjangoMessages'],
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  });
};
//# sourceMappingURL=queries.js.map