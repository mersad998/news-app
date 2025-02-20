export interface HeaderControllerProps {
  title: string;
}

export interface HeaderViewProps {
  title: string;
  t: (key: string) => string; // Translation function
  selectedLanguage: string;
  toggleLanguage: () => void;
  toggleTheme: () => void;
}
