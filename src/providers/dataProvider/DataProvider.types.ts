import { AppDispatch } from '@redux/store';

import type { AxiosResponse } from 'axios';

// declare all news websites as an enum to prevent misspelling entire app
export enum NewsResources {
  NewsApi = 'NEWS_API',
  TheGuardian = 'THE_GUARDIAN',
  NewYorkTimes = 'NEW_YORK_TIMES',
}

export type ApiKeyInformation = { key: string; value: string };

export type GetBaseUrlByResourceName = (resource: NewsResources) => {
  baseUrl: string;
  apiKeyName: string;
  apiKeyValue: string;
};

export interface NewsApiParameters {
  page: number;
  pageSize: number;
  q?: string;
  country?: string;
  category?: string;
  author?: string;
}

export interface TheGuardianParameters {
  page: number;
  perPage: number;
  q?: string;
  section?: string;
  tag?: string;
}

export interface NewYorkTimesParameters {
  page: number;
  pageSize: number;
  q?: string;
  begin_date?: string;
  end_date?: string;
}

// required options to call fetch data function
export interface FetchDataOptions {
  resource: NewsResources.NewYorkTimes | NewsResources.TheGuardian | NewsResources.NewsApi;
  parameters?: NewsApiParameters | TheGuardianParameters | NewYorkTimesParameters;
  valueKeyName?: string;
}

interface ReduxHelper {
  dispatch: AppDispatch;
  someOtherFunction?: () => void; // Example additional function
}

export type FetchData = (options: FetchDataOptions, reduxHelper: ReduxHelper) => Promise<AxiosResponse['data']>;
