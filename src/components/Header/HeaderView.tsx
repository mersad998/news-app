import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from '@heroui/react';

import type { FC } from 'react';
import type { HeaderViewProps } from './HeaderTypes';

const SearchIcon = ({ size = 24, strokeWidth = 1.5, width, height, ...props }: any) => {
  return (
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
};

const HeaderView: FC<HeaderViewProps> = ({ title }) => {
  return (
    <Navbar isBordered className='bg-default-400/20 dark:bg-default-500/20'>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className="font-bold text-inherit">{title}</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" className="text-inherit" href="#">
              News
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" color="primary" href="#">
              Sport
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" color="primary" href="#">
              Business
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" color="primary" href="#">
              Innovation
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" color="primary" href="#">
              Culture
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" color="primary" href="#">
              Arts
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" color="primary" href="#">
              Travel
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" color="primary" href="#">
              Earth
            </Link>
          </NavbarItem>
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

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat" className="text-black">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default HeaderView;
