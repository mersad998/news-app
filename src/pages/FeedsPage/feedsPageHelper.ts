import { format, isBefore, parseISO } from 'date-fns';

import { NewsResources } from '../../core/dataProvider/dataProviderTypes';
import { UserCustomSort } from '../../hooks/usePrepareData';

import type { NYTimesArticleInterface, NewsApiArticleInterface, TheGuardianArticleInterface } from './newsTypes';
import type { ReduxState, DisplayableArticle } from './feedsPageTypes';

// -----------------
// Date Formatting
// -----------------
export const formatDate = (dateString: string): string => {
  return format(parseISO(dateString), 'yyyy/MM/dd HH:mm:ss');
};

// -----------------
// Extractor Functions
// -----------------
const extractFromNewsApi = (data?: NewsApiArticleInterface | null): DisplayableArticle[] => {
  if (!data?.articles) return [];
  return data.articles.map((article) => ({
    resource: NewsResources.NewsApi,
    date: formatDate(article.publishedAt),
    title: article.title,
    description: article.description || '',
    author: article.author || 'Unknown',
    url: article.url,
    images: article.urlToImage ? [article.urlToImage] : [],
    sourceName: article.source?.name || 'Unknown',
  }));
};

const extractFromTheGuardian = (data?: TheGuardianArticleInterface | null): DisplayableArticle[] => {
  if (!data?.results) return [];
  return data.results.map((article) => ({
    resource: NewsResources.TheGuardian,
    date: formatDate(article.webPublicationDate),
    title: article.webTitle,
    description: 'Click below for more details.',
    author: article.sectionName || 'Unknown',
    url: article.webUrl,
    images: [],
    sourceName: article.sectionName || 'Unknown',
  }));
};

const extractFromNYTimes = (data?: NYTimesArticleInterface | null): DisplayableArticle[] => {
  if (!data?.docs) return [];
  return data.docs.map((article) => ({
    resource: NewsResources.NewYorkTimes,
    date: formatDate(article.pub_date),
    title: article.headline?.main || 'No title',
    description: article.lead_paragraph || '',
    author: article.byline?.original || 'Unknown',
    url: article.web_url,
    images: [],
    sourceName: article.source || 'Unknown',
  }));
};

// -----------------
// Data Merging
// -----------------
export const mergeArticles = (data: {
  newsApiData: ReduxState[NewsResources.NewsApi];
  theGuardianData: ReduxState[NewsResources.TheGuardian];
  newYorkTimesData: ReduxState[NewsResources.NewYorkTimes];
}): DisplayableArticle[] => {
  return [
    ...extractFromNewsApi(data.newsApiData?.data).slice(0, 10),
    ...extractFromTheGuardian(data.theGuardianData?.data),
    ...extractFromNYTimes(data.newYorkTimesData?.data),
  ];
};

// -----------------
// Sorting Functions
// -----------------
export const sortByDate = (articles: DisplayableArticle[]): DisplayableArticle[] => {
  return articles.sort((a, b) => (isBefore(parseISO(a.date), parseISO(b.date)) ? 1 : -1));
};

export const sortFeeds = (articles: DisplayableArticle[], userSorts: UserCustomSort): DisplayableArticle[] => {
  const sortedArticles = sortByDate(articles);
  for (const [key, value] of Object.entries(userSorts)) {
    if (!value) continue;
    switch (key) {
      case 'author':
        sortedArticles.sort((a, b) => (a.author === value ? -1 : b.author === value ? 1 : 0));
        break;
      case 'category':
        sortedArticles.sort((a, b) => (a.title.includes(value) ? -1 : b.title.includes(value) ? 1 : 0));
        break;
      case 'sources':
        sortedArticles.sort((a, b) => (a.sourceName === value ? -1 : b.sourceName === value ? 1 : 0));
        break;
    }
  }
  return sortedArticles;
};

export const sortArrayByValue = <T>(array: T[], key: keyof T, value: string): T[] => {
  return array.sort((a, b) => {
    const valueA = (a[key] as unknown as string)?.toUpperCase();
    const valueB = (b[key] as unknown as string)?.toUpperCase();
    return valueA === value.toUpperCase() ? -1 : valueB === value.toUpperCase() ? 1 : 0;
  });
};

// -----------------
// Utility Functions
// -----------------
export const debounce = <T extends (...args: any[]) => void>(callback: T, delay: number): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
};
