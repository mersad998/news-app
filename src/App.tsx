import { FC, useEffect } from 'react';
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

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <Provider store={reduxStore}>
      <SettingsContext.Provider value={{ colorMode, language }}>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>{customRoutes}</BrowserRouter>
        </I18nextProvider>
      </SettingsContext.Provider>
    </Provider>
  );
};

export default App;
