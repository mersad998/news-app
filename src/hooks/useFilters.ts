import { useState, ChangeEvent } from 'react';

interface Filters {
  author: string;
  category: string;
  sources: string;
}

export const useFilters = (initialFilters: Filters, onSearch: (filters: Filters) => void) => {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFilters((prev) => {
      const newFilters = { ...prev, [id]: value };
      onSearch(newFilters);
      return newFilters;
    });
  };

  return { filters, handleFilterChange };
};
