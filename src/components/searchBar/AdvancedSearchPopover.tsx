import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useFilters } from '@hooks/useFilters';

import FilterInput from './FilterInput';

interface AdvancedSearchPopoverProps {
  userCustomSorts: any;
  onSearch: (filters: any) => void;
}

const AdvancedSearchPopover: FC<AdvancedSearchPopoverProps> = ({ userCustomSorts, onSearch }) => {
  const { t } = useTranslation();

  const { filters, handleFilterChange } = useFilters(
    { author: userCustomSorts.author || '', category: userCustomSorts.category || '', sources: userCustomSorts.sources || '' },
    onSearch,
  );

  return (
    <div className="p-4 space-y-4">
      {Object.keys(filters).map((filterKey) => (
        <FilterInput
          key={filterKey}
          id={filterKey}
          value={filters[filterKey]}
          onChange={handleFilterChange}
          label={t(`search.${filterKey}`)}
        />
      ))}
    </div>
  );
};

export default AdvancedSearchPopover;
