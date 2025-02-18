import querystring from 'qs';

import { type ApiKeyInformation, type GetBaseUrlByResourceName, type FetchDataOptions, NewsResources } from './dataProviderTypes';

// receive resource name and return base url and api key for that
export const getBaseUrlByResourceName: GetBaseUrlByResourceName = (resource) => {
  if (resource === NewsResources.NewsApi) {
    return {
      baseUrl: import.meta.env.VITE_NEWS_API_BASE_URL ?? '',
      apiKeyValue: import.meta.env.VITE_NEWS_API_API_KEY ?? '',
      apiKeyName: 'apiKey',
    };
  }

  if (resource === NewsResources.TheGuardian) {
    return {
      baseUrl: import.meta.env.VITE_THE_GUARDIAN_BASE_URL ?? '',
      apiKeyValue: import.meta.env.VITE_THE_GUARDIAN_API_KEY ?? '',
      apiKeyName: 'api-key',
    };
  }

  if (resource === NewsResources.NewYorkTimes) {
    return {
      baseUrl: import.meta.env.VITE_NY_TIMES_BASE_URL ?? '',
      apiKeyValue: import.meta.env.VITE_NY_TIMES_API_KEY ?? '',
      apiKeyName: 'api-key',
    };
  }

  throw new Error('invalid Resource');
};

// merge request parameters with api key, then change it to query parameter format
export const createQueryParameters = (parameters: FetchDataOptions['parameters'], apiKey: ApiKeyInformation): string => {
  return querystring.stringify({ ...parameters, ...apiKey });
};
