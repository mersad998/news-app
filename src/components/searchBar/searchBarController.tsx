import { FC } from 'react';
import { useSelectedResources } from '@hooks/useSelectedResources';

import SearchBarView from './searchBarView';
import { allSelectableResources } from './searchBarHelper';

import type { SearchBarControllerProps } from './searchBarTypes';

const SearchBarController: FC<SearchBarControllerProps> = ({ onSearch, userCustomSorts }) => {
  const { selectedResources, onResourceSelect: handleResourceSelect } = useSelectedResources(allSelectableResources);

  return (
    <SearchBarView
      onSearch={onSearch}
      onResourceSelect={handleResourceSelect}
      selectedResources={selectedResources}
      userCustomSorts={userCustomSorts}
    />
  );
};

export default SearchBarController;
