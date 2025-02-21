import { configureStore } from '@reduxjs/toolkit';

import ResourcesReducer from './resourcesSlice';
import SettingsReducer from './settingsSlice';

export const store = configureStore({
  reducer: {
    resources: ResourcesReducer,
    settings: SettingsReducer,
  },
});

// Export RootState type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
