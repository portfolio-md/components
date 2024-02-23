import { SocialIcon } from 'react-social-icons';

import { SocialItem } from '../../types/common';

type SocialsProps = {
  items: SocialItem[];
};

function getSocial(item: SocialItem, index: number) {
  return <SocialIcon key={index} target="_blank" url={item.url} />;
}

export default function Socials(props: SocialsProps) {
  const { items } = props;

  return (
    <div className="container">
      <div className="flex flex-wrap justify-center gap-2">
        {items.map(getSocial)}
      </div>
    </div>
  );
}
