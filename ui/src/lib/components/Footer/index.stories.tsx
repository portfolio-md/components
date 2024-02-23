import type { Meta, StoryObj } from '@storybook/react';

import Footer from './index';

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'Footer',
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  args: {
    credentials: {
      title: 'Acme',
      year: 2024,
      url: '.',
    },
    socials: [
      {
        url: 'https://github.com/',
      },
    ],
  },
};
