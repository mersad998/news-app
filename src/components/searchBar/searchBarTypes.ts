import { UserCustomSort } from '@hooks/usePrepareData';
import { ChangeEvent } from 'react';

export interface SearchBarControllerProps {
  userCustomSorts: UserCustomSort;
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchBarViewProps {
  selectedResources: string[];
  userCustomSorts: UserCustomSort;
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onResourceSelect: (event: any) => void;
}
