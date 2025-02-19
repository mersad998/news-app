import { FC, useState } from 'react';
import { Input } from '@heroui/react';

const AdvancedSearchPopover: FC<any> = ({ userCustomSorts, onSearch }) => {
  const [filters, setFilters] = useState<any>({
    author: userCustomSorts.author || '',
    category: userCustomSorts.category || '',
    sources: userCustomSorts.sources || '',
  });

  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilters((prev: any): any => ({ ...prev, [id]: value }));
    onSearch({ ...filters, [id]: value });
  };

  return (
    <div className="p-4 space-y-4">
      {Object.keys(filters).map((filterKey) => (
        <div key={filterKey} className="flex items-center space-x-2">
          <label htmlFor={filterKey} className="w-20 capitalize text-black">
            {filterKey}:
          </label>
          <Input
            id={filterKey}
            value={filters[filterKey]}
            onChange={handleFilterChange}
            placeholder={`Enter ${filterKey}...`}
            className="flex-1"
          />
        </div>
      ))}
    </div>
  );
};

export default AdvancedSearchPopover;
