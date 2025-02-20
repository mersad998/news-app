import { useState, ChangeEvent } from 'react';
import useFetchData from '@hooks/useFetchData';
import { NewsResources } from '@providers/dataProvider/dataProviderTypes';

interface Filters {
  author: string;
  category: string;
  sources: string;
}

export const useFilters = (initialFilters: Filters, onSearch: (filters: Filters) => void) => {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const { setQueryParameterToResource } = useFetchData();

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;

    switch (id) {
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
        console.warn('invalid search type!');
        break;
    }

    setFilters((prev) => {
      const newFilters = { ...prev, [id]: value };
      onSearch(newFilters);
      return newFilters;
    });
  };

  return { filters, handleFilterChange };
};
