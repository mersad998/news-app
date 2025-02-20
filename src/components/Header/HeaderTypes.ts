import type { ChangeEvent } from 'react';

export interface HeaderControllerProps {
  title: string;
}

export interface HeaderViewProps {
  title: string;
  t: (key: string) => string; // Translation function
  selectedLanguage: string;
  toggleLanguage: () => void;
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  toggleTheme: () => void;
}
