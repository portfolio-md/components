import { SocialItem } from '../Socials/types';

export type FooterProps = {
  socials: SocialItem[];
  credentials: Credentials;
};

type Credentials = {
  year: number;
  title: string;
  url: string;
  postfix?: string;
};
