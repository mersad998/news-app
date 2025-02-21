import { configureStore } from '@reduxjs/toolkit';

import ResourcesReducer from './resourcesSlice';
import SettingsReducer from './settingsSlice';

export const store = configureStore({
  reducer: {
    resources: ResourcesReducer,
    settings: SettingsReducer,
  },
});
