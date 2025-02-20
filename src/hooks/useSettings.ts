import { useEffect, useMemo, useState } from 'react';

import { readFromLocalStorage, writeToLocalStorage } from '../helpers';

const App_Settings = 'App_Settings';

interface UseSettings {
  colorMode: {
    toggleColorMode: () => void;
  };
  language: {
    toggleLanguage: () => void;
  };
  selectedLanguage: 'en' | 'de';
  mode: 'light' | 'dark';
}

type Language = 'en' | 'de';
type ThemeMode = 'light' | 'dark';

const useSettings = (): UseSettings => {
  const defaultSettings = readFromLocalStorage<{ mode: ThemeMode; language: Language }>(App_Settings);

  const [mode, setMode] = useState<ThemeMode>(defaultSettings?.mode || 'dark');
  const [language, setLanguage] = useState<Language>(defaultSettings?.language || 'en');

  useEffect(() => {
    writeToLocalStorage(App_Settings, { mode, language });
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode, language]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: (): void => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const languageSettings = useMemo(
    () => ({
      toggleLanguage: (): void => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'de' : 'en'));
      },
    }),
    [],
  );

  return { colorMode, language: languageSettings, selectedLanguage: language, mode };
};

export default useSettings;
