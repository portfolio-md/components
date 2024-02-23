import React from 'react';

import { Socials } from '../Socials';
import { FooterProps } from './types';

export function Footer(props: FooterProps) {
  const { socials, credentials } = props;

  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {credentials.year}{' '}
          <a href={credentials.url} className="hover:underline">
            {credentials.title}
          </a>
          {credentials.postfix}
        </span>
        <div>
          <Socials items={socials} />
        </div>
      </div>
    </footer>
  );
}
