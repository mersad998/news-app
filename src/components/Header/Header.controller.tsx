import { useCallback } from 'react';
import useFetchData from '@hooks/useFetchData';
import { debounce } from '@pages/FeedsPage/FeedsPage.helper';
import { useDispatch, useSelector } from 'react-redux';
import { SettingsState, toggleLanguage, toggleTheme } from '@redux/settingsSlice';

import HeaderView from './Header.view';

import type { ChangeEvent, FC } from 'react';
import type { HeaderControllerProps } from './Header.types';

const HeaderController: FC<HeaderControllerProps> = ({ title }) => {
  const dispatch = useDispatch();
  const { selectedLanguage, selectedTheme } = useSelector((state: any) => state.settings as SettingsState);
  const { setBulkQueryParameters } = useFetchData();

  // Handlers for toggling language and theme
  const handleToggleLanguage = (): void => {
    dispatch(toggleLanguage());
  };
  const handleToggleTheme = (): void => {
    dispatch(toggleTheme());
  };

  // search handler
  const onSearch = useCallback(
    debounce((event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      setBulkQueryParameters({ query: value });
    }, 300),
    [setBulkQueryParameters],
  );

  return (
    <HeaderView
      title={title}
      selectedLanguage={selectedLanguage}
      selectedTheme={selectedTheme}
      toggleLanguage={handleToggleLanguage}
      toggleTheme={handleToggleTheme}
      onSearch={onSearch}
    />
  );
};

export default HeaderController;
