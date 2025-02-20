import { useCallback, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SettingsContext from '@contexts/settingsContext';
import useFetchData from '@hooks/useFetchData';
import { debounce } from '@pages/FeedsPage/feedsPageHelper';

import HeaderView from './HeaderView';

import type { ChangeEvent, FC } from 'react';
import type { HeaderControllerProps } from './HeaderTypes';

const HeaderController: FC<HeaderControllerProps> = ({ title }) => {
  const { colorMode, language } = useContext(SettingsContext);
  const { setBulkQueryParameters } = useFetchData();
  const { t } = useTranslation();

  // Handlers for toggling language and theme
  const toggleLanguage = (): void => language.toggleLanguage();
  const toggleTheme = (): void => colorMode.toggleColorMode();

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
      t={t}
      selectedLanguage={language.selectedLanguage}
      toggleLanguage={toggleLanguage}
      toggleTheme={toggleTheme}
      onSearch={onSearch}
    />
  );
};

export default HeaderController;
