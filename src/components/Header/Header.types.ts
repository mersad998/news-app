import type { ChangeEvent } from 'react';

export interface HeaderControllerProps {
  title: string;
}

export interface HeaderViewProps {
  title: string;
  selectedLanguage: string;
  selectedTheme: string;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
