import { useState } from 'react';

export const useSelectedResources = (initialResources: string[]) => {
  const [selectedResources, setSelectedResources] = useState<string[]>(initialResources);

  const onResourceSelect = (event: any) => {
    const value = event.target.value;
    const valueAsArray = typeof value === 'string' ? value.split(',') : value;
    setSelectedResources(valueAsArray);
  };

  return { selectedResources, onResourceSelect };
};
