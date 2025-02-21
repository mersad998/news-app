import { UserCustomSort } from '@hooks/usePrepareData';

export interface SearchBarControllerProps {
  userCustomSorts: UserCustomSort;
}

export interface SearchBarViewProps {
  selectedResources: string[];
  userCustomSorts: UserCustomSort;
  onResourceSelect: (value: string[]) => void;
}
