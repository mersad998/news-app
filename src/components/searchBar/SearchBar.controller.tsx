import { FC } from 'react';
import { useSelectedResources } from '@hooks/useSelectedResources';

import SearchBarView from './SearchBar.view';

import type { SearchBarControllerProps } from './SearchBar.types';

const SearchBarController: FC<SearchBarControllerProps> = ({ userCustomSorts }) => {
  const { selectedResources, onResourceSelect: handleResourceSelect } = useSelectedResources();

  return (
    <SearchBarView
      onResourceSelect={handleResourceSelect}
      selectedResources={selectedResources as string[]}
      userCustomSorts={userCustomSorts}
    />
  );
};

export default SearchBarController;
