import { FC, useEffect, useMemo, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import useSettings from '@hooks/useSettings';

import i18n from './core/i18n';
import SettingsContext from './contexts/settingsContext';
import { customRoutes } from './core/routes';
import { store as reduxStore } from './redux/store';

const App: FC = () => {
  const { colorMode, language, selectedLanguage, mode } = useSettings();

  // Apply theme mode
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  // Update language
  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  // Memoize settings context to avoid unnecessary re-renders
  const settingsContextValue = useMemo(() => ({ colorMode, language }), [colorMode, language]);

  return (
    <Provider store={reduxStore}>
      <SettingsContext.Provider value={settingsContextValue}>
        <I18nextProvider i18n={i18n}>
          <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>{customRoutes}</BrowserRouter>
          </Suspense>
        </I18nextProvider>
      </SettingsContext.Provider>
    </Provider>
  );
};

export default App;
