import i18n from '@providers/i18n';
import { createSlice } from '@reduxjs/toolkit';
import { readFromLocalStorage } from '@utils/readFromLocalStorage';
import { writeToLocalStorage } from '@utils/writeToLocalStorage';

// Define types
export interface SettingsState {
  selectedLanguage: 'de' | 'en';
  selectedTheme: 'light' | 'dark';
}

// Initial state
const initialState: SettingsState = readFromLocalStorage<SettingsState>('App_Settings') ?? {
  selectedLanguage: 'de',
  selectedTheme: 'dark',
};
console.log('initialState: ', initialState);

// apply initial settings on app
i18n.changeLanguage(initialState.selectedLanguage);
document.documentElement.setAttribute('data-theme', initialState.selectedTheme);

// Create slice
const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      const newLanguage = state.selectedLanguage === 'en' ? 'de' : 'en';

      // apply setting on app
      i18n.changeLanguage(newLanguage);

      // update redux state
      state.selectedLanguage = newLanguage;

      // update local storage
      writeToLocalStorage('App_Settings', state);
    },
    toggleTheme: (state) => {
      const newMode = state.selectedTheme === 'light' ? 'dark' : 'light';

      // apply setting on app
      document.documentElement.setAttribute('data-theme', newMode);

      // update redux state
      state.selectedTheme = newMode;

      // update local storage
      writeToLocalStorage('App_Settings', state);
    },
  },
});

// Export actions
export const { toggleLanguage, toggleTheme } = settingsSlice.actions;

// Export reducer
export default settingsSlice.reducer;
