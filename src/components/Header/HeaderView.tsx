import { useContext, type FC } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  Avatar,
} from '@heroui/react';
import SettingsContext from '../../contexts/settingsContext';
import type { HeaderViewProps } from './HeaderTypes';

const SearchIcon = ({ size = 24, strokeWidth = 1.5, width, height, ...props }: any) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={height || size}
    role="presentation"
    viewBox="0 0 24 24"
    width={width || size}
    {...props}
  >
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

const HeaderView: FC<HeaderViewProps> = ({ title }) => {
  const { colorMode, language } = useContext(SettingsContext);

  return (
    <Navbar isBordered className="bg-default-400/20 dark:bg-default-500/20 text-black dark:text-white">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className="font-bold text-inherit">{title}</p>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex gap-3">
          {['News', 'Sport', 'Business', 'Arts', 'Travel', 'Earth'].map((item) => (
            <NavbarItem key={item}>
              <Link
                color="foreground"
                className="font-bold text-gray-900 dark:text-white"
                href="#"
              >
                {item}
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
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />

        {/* Language Toggle Button */}
        <button onClick={language.toggleLanguage} className="ml-4">
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            size="sm"
            src={`https://flagcdn.com/w40/${language.selectedLanguage === 'en' ? 'gb' : 'de'}.png`}
            alt={`Current language: ${language.selectedLanguage === 'en' ? 'English' : 'Deutsch'}`}
          />
        </button>

        {/* Theme Toggle Button */}
        <button onClick={colorMode.toggleColorMode} className="ml-4">
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            size="sm"
            src={
              document.documentElement.getAttribute('data-theme') === 'dark'
                ? 'https://cdn-icons-png.flaticon.com/512/6714/6714975.png' // Moon icon
                : 'https://cdn-icons-png.flaticon.com/512/1164/1164954.png' // Sun icon
            }
            alt="Toggle theme"
          />
        </button>
      </NavbarContent>
    </Navbar>
  );
};

export default HeaderView;
