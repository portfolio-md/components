import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
} from '@nextui-org/react';

import { HomeItem, MenuItem } from '../../types/common';
import ThemeToggle from '../ThemeToggle';

type HeaderProps = {
  home: HomeItem;
  menu: MenuItem[];
  LinkComponent?: React.ElementType;
  ImageComponent?: React.ElementType;
};

export default function Header(props: HeaderProps) {
  const { home, menu, LinkComponent, ImageComponent } = props;

  return (
    <Navbar isBordered isBlurred>
      <NavbarBrand>
        <Link as={LinkComponent} href={home.url} color="foreground">
          <Image
            as={ImageComponent}
            src={home.logoUrl}
            alt="Logo"
            radius="sm"
            className="mr-3 h-6 sm:h-9"
          />
          <p className="font-bold text-inherit">{home.title}</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menu.map((menuItem, i) => (
          <NavbarItem key={i}>
            <Link as={LinkComponent} color="foreground" href={menuItem.url}>
              {menuItem.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
