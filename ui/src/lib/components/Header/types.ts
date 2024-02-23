type HomeItem = MenuItem & {
  logoUrl?: string;
};

export type MenuItem = {
  title: string;
  url: string;
};

export type HeaderProps = {
  home: HomeItem;
  menu: MenuItem[];
};
