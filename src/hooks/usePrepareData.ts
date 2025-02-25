import { useSelector } from 'react-redux';
import { DisplayableArticle, ResourcesReduxState } from '@pages/FeedsPage/feedsPageTypes';
import { NewsResources } from '@providers/DataProvider/DataProvider.types';
import { mergeArticles, sortFeeds } from '@pages/FeedsPage/FeedsPage.helper';

export interface UserCustomSort {
  author: string;
  category: string;
  sources: string;
}

interface UsePrepareData {
  data: DisplayableArticle[];
  isLoading: boolean;
  totalCount: number;
  userCustomSorts: UserCustomSort;
}
export const allSelectableResources = [NewsResources.NewsApi, NewsResources.TheGuardian, NewsResources.NewYorkTimes];

const usePrepareData = (): UsePrepareData => {
  // gather all data from redux store in separate variables
  const newsApiData = useSelector<{ resources: ResourcesReduxState }>(
    (state) => state.resources[NewsResources.NewsApi],
  ) as ResourcesReduxState[NewsResources.NewsApi];
  const theGuardianData = useSelector<{ resources: ResourcesReduxState }>(
    (state) => state.resources[NewsResources.TheGuardian],
  ) as ResourcesReduxState[NewsResources.TheGuardian];
  const newYorkTimesData = useSelector<{ resources: ResourcesReduxState }>(
    (state) => state.resources[NewsResources.NewYorkTimes],
  ) as ResourcesReduxState[NewsResources.NewYorkTimes];

  // extract user custom sorts from redux
  const userCustomSorts: UserCustomSort = {
    author: newsApiData?.parameters.author ?? '',
    category: newsApiData?.parameters.category ?? '',
    sources: theGuardianData?.parameters.tag ?? '',
  };

  // app should be loading only when all of resources are in loading state and there is no data in redux store
  const isLoading = !!newsApiData?.isLoading && !!theGuardianData?.isLoading && !!newYorkTimesData?.isLoading;

  // merge data from all resources
  const mergedData = mergeArticles({
    newsApiData,
    theGuardianData,
    newYorkTimesData,
  });

  // sort feeds by reference
  sortFeeds(mergedData, userCustomSorts);

  // calculate total count
  const totalCount =
    (newsApiData?.data?.totalResults ?? 0) + (theGuardianData?.data?.total ?? 0) + (newYorkTimesData?.data?.meta.time ?? 0);

  return {
    data: mergedData,
    isLoading,
    totalCount,
    userCustomSorts,
  };
};

export default usePrepareData;
