import { Link, Card, CardHeader } from '@nextui-org/react';

import { Credentials, SocialItem } from '../../types/common';
import Socials from '../Socials';

type FooterProps = {
  socials: SocialItem[];
  credentials: Credentials;
  LinkComponent?: React.ElementType;
};

export default function Footer(props: FooterProps) {
  const { socials, credentials, LinkComponent } = props;

  return (
    <Card radius="none" as="footer" className="overflow-visible">
      <CardHeader className="justify-between">
        <div className="container">
          <p className="p-4 lg:p-8 text-start sm:text-center md:text-lg">
            © {credentials.year}{' '}
            <Link
              as={LinkComponent}
              color="foreground"
              className="text-inherit"
              href={credentials.url}
            >
              {credentials.title}
            </Link>
          </p>
        </div>
        <Socials items={socials} />
      </CardHeader>
    </Card>
  );
}
