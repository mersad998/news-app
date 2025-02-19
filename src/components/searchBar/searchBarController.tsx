import { useState, type FC } from 'react';

import { allSelectableResources } from './searchBarHelper';
import SearchBarView from './searchBarView';

import type { SearchBarControllerProps } from './searchBarTypes';

const SearchBarController: FC<SearchBarControllerProps> = (props) => {
  const { onSearch, onResourceSelect, userCustomSorts } = props;

  const [selectedResources, setSelectedResources] = useState<string[]>(allSelectableResources);

  // limit the articles locally by selected resources
  const _onResourceSelect = (event: any): void => {
    const value = event.target.value;
    const valueAsArray = typeof value === 'string' ? value.split(',') : value;

    setSelectedResources(valueAsArray);
    onResourceSelect(valueAsArray);
  };

  return (
    <SearchBarView
      onSearch={onSearch}
      onResourceSelect={_onResourceSelect}
      selectedResources={selectedResources}
      userCustomSorts={userCustomSorts}
    />
  );
};

export default SearchBarController;
