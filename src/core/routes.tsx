import { Routes, Route } from 'react-router-dom';

import AppLayout from '../layouts/AppLayout';
import { FeedsPage } from '../pages/FeedsPage';

export const customRoutes = (
  <Routes>
    <Route
      path="/"
      element={
        <AppLayout>
          <FeedsPage />
        </AppLayout>
      }
    />
  </Routes>
);
