import { NYTimesArticleInterface, NewsApiArticleInterface, TheGuardianArticleInterface } from '@pages/FeedsPage/newsTypes';
import {
  NewYorkTimesParameters,
  NewsApiParameters,
  NewsResources,
  TheGuardianParameters,
} from '@providers/DataProvider/DataProvider.types';

export interface ResourceState<T> {
  data: T | null;
  hasError: boolean;
  isLoading: boolean;
  parameters: NewsApiParameters | TheGuardianParameters | NewYorkTimesParameters;
  isActive: boolean;
}

export interface ResourcesState {
  [NewsResources.NewsApi]: ResourceState<NewsApiArticleInterface>;
  [NewsResources.TheGuardian]: ResourceState<TheGuardianArticleInterface>;
  [NewsResources.NewYorkTimes]: ResourceState<NYTimesArticleInterface>;
}

export interface SetDataPayload<T> {
  resourceName: keyof ResourcesState;
  data: T;
}

export interface SetErrorPayload {
  resourceName: keyof ResourcesState;
}

export interface SetBulkParametersPayload {
  [NewsResources.NewsApi]: Partial<NewsApiParameters>;
  [NewsResources.TheGuardian]: Partial<TheGuardianParameters>;
  [NewsResources.NewYorkTimes]: Partial<NewYorkTimesParameters>;
}

export interface SetParameterPayload {
  resource: NewsResources.NewsApi | NewsResources.TheGuardian | NewsResources.NewYorkTimes;
  parameters: Partial<NewsApiParameters | TheGuardianParameters | NewYorkTimesParameters>;
}
export interface ChangeActivationPayload {
  resource: NewsResources.NewsApi | NewsResources.TheGuardian | NewsResources.NewYorkTimes;
  isActive: boolean;
}
