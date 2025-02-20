import { FC } from 'react';
import { useSelectedResources } from '@hooks/useSelectedResources';

import SearchBarView from './searchBarView';

import type { SearchBarControllerProps } from './searchBarTypes';

const SearchBarController: FC<SearchBarControllerProps> = ({ onSearch, userCustomSorts }) => {
  const { selectedResources, onResourceSelect: handleResourceSelect } = useSelectedResources();

  return (
    <SearchBarView
      onSearch={onSearch}
      onResourceSelect={handleResourceSelect}
      selectedResources={selectedResources as string[]}
      userCustomSorts={userCustomSorts}
    />
  );
};

export default SearchBarController;
