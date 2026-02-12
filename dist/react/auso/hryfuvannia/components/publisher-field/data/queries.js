import { queryOptions } from '@tanstack/react-query';
import * as api from './api';
export var getPublishersOptions = function getPublishersOptions(query) {
  return queryOptions({
    queryFn: function queryFn() {
      return api.getPublishers(query);
    },
    queryKey: ['GetPublishers', query],
    staleTime: Infinity
  });
};
//# sourceMappingURL=queries.js.map