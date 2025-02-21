import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, Avatar } from '@heroui/react';
import { useTranslation } from 'react-i18next';

import type { ChangeEvent, FC } from 'react';
import type { HeaderViewProps } from './Header.types';

const SearchIcon: FC<{ size: number; strokeWidth?: number }> = ({ size = 24, strokeWidth = 1.5 }) => (
  <svg aria-hidden="true" fill="none" focusable="false" height={size} role="presentation" viewBox="0 0 24 24" width={size}>
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
    <path d="M22 22L20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} />
  </svg>
);

const HeaderView: FC<HeaderViewProps> = ({ title, selectedLanguage, selectedTheme, toggleLanguage, toggleTheme, onSearch }) => {
  const { t } = useTranslation();

  return (
    <Navbar isBordered className="bg-default-400/20 dark:bg-default-500/20 text-black dark:text-white">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className="font-bold text-inherit">{title}</p>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex gap-3">
          {['news', 'sport', 'business', 'arts', 'travel', 'earth'].map((key) => (
            <NavbarItem key={key}>
              <Link
                color="foreground"
                className="font-bold text-gray-900 dark:text-white"
                href={`#${key}`}
                onClick={() => {
                  // mock search event
                  onSearch({ target: { value: key } } as ChangeEvent<HTMLInputElement>);
                }}
              >
                {t(`header.${key}`)}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[10rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper: 'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
          }}
          placeholder={t('header.search')}
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
          onChange={onSearch}
        />

        {/* Language Toggle Button */}
        <button onClick={toggleLanguage} className="ml-4">
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            size="sm"
            src={`https://flagcdn.com/w40/${selectedLanguage === 'en' ? 'de' : 'gb'}.png`}
            alt={t('header.language')}
          />
        </button>

        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="ml-4">
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            size="sm"
            src={
              selectedTheme === 'dark'
                ? 'https://cdn-icons-png.flaticon.com/512/1164/1164954.png' // Sun icon
                : 'https://cdn-icons-png.flaticon.com/512/6714/6714975.png' // Moon icon
            }
            alt={t('header.theme')}
          />
        </button>
      </NavbarContent>
    </Navbar>
  );
};

export default HeaderView;
