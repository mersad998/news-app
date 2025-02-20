import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import SettingsContext from '@contexts/settingsContext';

import HeaderView from './HeaderView';

import type { FC } from 'react';
import type { HeaderControllerProps } from './HeaderTypes';

const HeaderController: FC<HeaderControllerProps> = ({ title }) => {
  const { colorMode, language } = useContext(SettingsContext);
  const { t } = useTranslation();

  // Handlers for toggling language and theme
  const toggleLanguage = (): void => language.toggleLanguage();
  const toggleTheme = (): void => colorMode.toggleColorMode();

  return (
    <HeaderView
      title={title}
      t={t}
      selectedLanguage={language.selectedLanguage}
      toggleLanguage={toggleLanguage}
      toggleTheme={toggleTheme}
    />
  );
};

export default HeaderController;
