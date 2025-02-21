import { FC, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { customRoutes } from '@routs/index';
import FeedsLoadingSkeleton from '@pages/FeedsPage/FeedsPage.loading';
import i18n from '@providers/i18n';
import { store as reduxStore } from '@redux/store';

const App: FC = () => {
  return (
    <Provider store={reduxStore}>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<FeedsLoadingSkeleton />}>
          <BrowserRouter>{customRoutes}</BrowserRouter>
        </Suspense>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
