import React from 'react';
import { SocialIcon } from 'react-social-icons';

import { SocialItem, SocialsProps } from './types';

function getSocial(item: SocialItem, index: number) {
  return <SocialIcon key={index} target="_blank" url={item.url} />;
}

export function Socials(props: SocialsProps) {
  const { items } = props;

  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className="flex flex-wrap justify-center gap-2">
        {items.map(getSocial)}
      </div>
    </div>
  );
}
