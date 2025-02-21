import { createContext } from 'react';

const SettingsContext = createContext<{
  colorMode: {
    toggleColorMode: () => void;
    themeMode?: string;
  };
  language: {
    toggleLanguage: () => void;
    selectedLanguage?: string;
  };
}>({
  colorMode: {
    toggleColorMode: () => console.warn('color mode context error'),
    themeMode: 'light', // or 'dark'
  },
  language: {
    toggleLanguage: () => console.warn('language context error'),
    selectedLanguage: 'en', // Default language
  },
});

export default SettingsContext;
