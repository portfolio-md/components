import React from 'react';
import { useTheme } from 'next-themes';

import { HeaderProps } from './types';
import { ThemeToggle } from '../ThemeToggle';

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';

export function Header(props: HeaderProps) {
  const { home, menu } = props;
  const { theme, setTheme } = useTheme();

  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link href={home.url} color="foreground">
          <img src={home.logoUrl} className="mr-3 h-6 sm:h-9" alt="Logo" />
          <p className="font-bold text-inherit">{home.title}</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menu.map((menuItem, i) => (
          <NavbarItem key={i}>
            <Link color="foreground" href={menuItem.url}>
              {menuItem.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeToggle
            theme={theme ?? 'light'}
            onClick={() => {
              if (theme === 'light') {
                setTheme('dark');
              } else {
                setTheme('light');
              }
            }}
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
