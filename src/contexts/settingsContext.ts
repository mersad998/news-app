import { createContext } from 'react';

const SettingsContext = createContext({
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
