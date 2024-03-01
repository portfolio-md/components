import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from '@nextui-org/react';
import { FaDownload } from 'react-icons/fa';

import { HomeItem, MenuItem } from '../../types/common';
import ThemeToggle from '../ThemeToggle';

type HeaderProps = {
  home: HomeItem;
  menu: MenuItem[];
  LinkComponent?: React.ElementType;
  ImageComponent?: React.ElementType;
  download?: {
    url: string;
    title: string;
  };
};

export default function Header(props: HeaderProps) {
  const { home, menu, download, LinkComponent, ImageComponent } = props;

  return (
    <Navbar isBordered isBlurred>
      <NavbarContent>
        {menu.length > 0 && (
          <NavbarMenuToggle aria-label="menu-toggle" className="sm:hidden" />
        )}
        <NavbarBrand>
          <Link as={LinkComponent} href={home.url} color="foreground">
            <Image
              as={ImageComponent}
              src={home.logoUrl}
              alt={home.title}
              radius="sm"
              height={36}
              width={36}
              removeWrapper={true}
              className="mr-3"
            />
            <p className="font-bold text-inherit">{home.title}</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

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
        {download != null && (
          <NavbarItem>
            <Link as={LinkComponent} href={download.url} isExternal={true}>
              <Button>
                <FaDownload /> {download.title}
              </Button>
            </Link>
          </NavbarItem>
        )}
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menu.map((menuItem, i) => (
          <NavbarMenuItem key={i}>
            <Link
              as={LinkComponent}
              className="w-full"
              color="foreground"
              href={menuItem.url}
              size="lg"
            >
              {menuItem.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
