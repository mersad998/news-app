import { memo, type FC, useCallback } from 'react';
import useFetchData from '@hooks/useFetchData';
import usePrepareData from '@hooks/usePrepareData';
import { NewsApiParameters, NewsResources } from '@providers/DataProvider/DataProvider.types';
import { useSelector } from 'react-redux';

import FeedsLoadingSkeleton from './FeedsPage.loading';
import { debounce } from './FeedsPage.helper';
import FeedsPageView from './FeedsPage.view';

import type { ResourcesReduxState } from './feedsPageTypes';

const FeedsPageController: FC = () => {
  const { setBulkQueryParameters } = useFetchData();
  const { data, isLoading, totalCount, userCustomSorts } = usePrepareData();

  const currentPage = useSelector<{ resources: ResourcesReduxState }>(
    (state) => state.resources[NewsResources.NewsApi]?.parameters?.page ?? 1,
  ) as NewsApiParameters['page'];

  // Handle pagination changes with debounce
  const onPageChange = useCallback(
    debounce((page: number) => setBulkQueryParameters({ page }), 500),
    [setBulkQueryParameters],
  );

  if (isLoading) return <FeedsLoadingSkeleton />;

  return (
    <FeedsPageView
      articles={data}
      totalCount={totalCount}
      userCustomSorts={userCustomSorts}
      onPageChange={onPageChange}
      currentPage={currentPage}
    />
  );
};

export default memo(FeedsPageController);
