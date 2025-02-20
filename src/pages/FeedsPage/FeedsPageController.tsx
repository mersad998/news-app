import { memo, type FC, ChangeEvent, useCallback } from 'react';
import useFetchData from '@hooks/useFetchData';
import usePrepareData from '@hooks/usePrepareData';
import { NewsApiParameters, NewsResources } from '@providers/dataProvider/dataProviderTypes';
import { useSelector } from 'react-redux';

import { debounce } from './feedsPageHelper';
import FeedsPageView from './FeedsPageView';

import type { ReduxState } from './feedsPageTypes';

const FeedsPageController: FC = () => {
  const { setBulkQueryParameters, setQueryParameterToResource } = useFetchData();
  const { data, isLoading, totalCount, userCustomSorts } = usePrepareData();

  const currentPage = useSelector<{ resources: ReduxState }>(
    (state) => state.resources[NewsResources.NewsApi]?.parameters?.page ?? 1,
  ) as NewsApiParameters['page'];

  // Handle search input changes with debounce
  const onSearch = useCallback(
    debounce((event: ChangeEvent<HTMLInputElement>) => {
      const { value, id } = event.target;

      switch (id) {
        case 'bulk':
          setBulkQueryParameters({ query: value });
          break;
        case 'category':
          setQueryParameterToResource({ category: value }, NewsResources.NewsApi);
          break;
        case 'author':
          setQueryParameterToResource({ author: value }, NewsResources.NewsApi);
          break;
        case 'sources':
          setQueryParameterToResource({ tag: value }, NewsResources.TheGuardian);
          break;
        default:
          console.warn('Invalid search type:', id);
      }
    }, 500),
    [setBulkQueryParameters, setQueryParameterToResource],
  );

  // Handle pagination changes with debounce
  const onPageChange = useCallback(
    debounce((page: number) => setBulkQueryParameters({ page }), 500),
    [setBulkQueryParameters],
  );

  if (isLoading) return <span>Loading...</span>;

  return (
    <FeedsPageView
      articles={data}
      totalCount={totalCount}
      userCustomSorts={userCustomSorts}
      onSearch={onSearch}
      onPageChange={onPageChange}
      currentPage={currentPage}
    />
  );
};

export default memo(FeedsPageController);
