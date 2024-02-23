export type Credentials = {
  year: number;
  title: string;
  url: string;
  postfix?: string;
};

export type HomeItem = MenuItem & {
  logoUrl?: string;
};

export type MenuItem = {
  title: string;
  url: string;
};

export type SocialItem = {
  url: string;
};
