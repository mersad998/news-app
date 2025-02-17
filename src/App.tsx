import { FC } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

import i18n from './core/i18n';
import { customRoutes } from './core/routes';
import './App.css';

const App: FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>{customRoutes}</BrowserRouter>
    </I18nextProvider>
  );
};

export default App;
