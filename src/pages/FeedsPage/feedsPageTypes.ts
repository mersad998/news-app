import {
  type NewsApiParameters,
  type TheGuardianParameters,
  type NewYorkTimesParameters,
  NewsResources,
} from '@providers/DataProvider/DataProvider.types';

import type { UserCustomSort } from '@hooks/usePrepareData';
import type { NewsApiArticleInterface, NYTimesArticleInterface, TheGuardianArticleInterface } from './newsTypes';

export interface ResourcesReduxState {
  [NewsResources.NewsApi]?: {
    data: NewsApiArticleInterface | null;
    hasError: boolean;
    isActive: boolean;
    isLoading: boolean;
    parameters: NewsApiParameters;
  };

  [NewsResources.TheGuardian]?: {
    data: TheGuardianArticleInterface | null;
    hasError: boolean;
    isLoading: boolean;
    isActive: boolean;
    parameters: TheGuardianParameters;
  };

  [NewsResources.NewYorkTimes]?: {
    data: NYTimesArticleInterface | null;
    hasError: boolean;
    isLoading: boolean;
    isActive: boolean;
    parameters: NewYorkTimesParameters;
  };
}

export interface FeedsPageViewProps {
  articles: DisplayableArticle[];
  totalCount: number;
  userCustomSorts: UserCustomSort; // Ensure this type is correct
  currentPage: number;
  onPageChange: (page: number) => void;
}

export interface DisplayableArticle {
  resource: NewsResources.NewsApi | NewsResources.TheGuardian | NewsResources.NewYorkTimes;
  date: string;
  title: string;
  description: string;
  author: string;
  url: string;
  images: string[];
  sourceName: string;
}
