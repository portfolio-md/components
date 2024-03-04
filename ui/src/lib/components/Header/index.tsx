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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
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
  }[];
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
        {download != null && download.length > 0 && (
          <NavbarItem>
            {download.length === 1 ? (
              <Link as={LinkComponent} href={download[0].url} isExternal={true}>
                <Button>
                  <FaDownload /> {download[0].title}
                </Button>
              </Link>
            ) : (
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly>
                    <FaDownload />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Download">
                  {download.map((d, i) => (
                    <DropdownItem key={i}>
                      <Link
                        color="foreground"
                        as={LinkComponent}
                        href={d.url}
                        isExternal={true}
                      >
                        {d.title}
                      </Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            )}
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
