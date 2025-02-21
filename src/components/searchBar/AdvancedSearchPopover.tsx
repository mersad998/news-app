import { useTranslation } from 'react-i18next';
import { Filters, useFilters } from '@hooks/useFilters';
import { UserCustomSort } from '@hooks/usePrepareData';

import FilterInput from './FilterInput';

import type { FC } from 'react';

interface AdvancedSearchPopoverProps {
  userCustomSorts: UserCustomSort;
}

const AdvancedSearchPopover: FC<AdvancedSearchPopoverProps> = ({ userCustomSorts }) => {
  const { t } = useTranslation();

  const { filters, handleFilterChange } = useFilters({
    author: userCustomSorts.author || '',
    category: userCustomSorts.category || '',
    sources: userCustomSorts.sources || '',
  } as Filters);

  return (
    <div className="p-4 space-y-4">
      {Object.keys(filters).map((filterKey) => (
        <FilterInput
          key={filterKey}
          id={filterKey}
          value={filters[filterKey as keyof Filters]}
          onChange={handleFilterChange}
          label={t(`search.${filterKey}`)}
        />
      ))}
    </div>
  );
};

export default AdvancedSearchPopover;
