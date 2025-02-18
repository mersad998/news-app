import { FC } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import i18n from './core/i18n';
import { customRoutes } from './core/routes';
import { store as reduxStore } from './redux/store';

const App: FC = () => {
  return (
    <Provider store={reduxStore}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>{customRoutes}</BrowserRouter>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
