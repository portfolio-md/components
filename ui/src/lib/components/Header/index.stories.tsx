import type { Meta, StoryObj } from '@storybook/react';

import Header from './index';
import PortfolioMdProvider from '../PortfolioMdProvider';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Header',
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    home: {
      url: '#',
      logoUrl: 'https://cdn.worldvectorlogo.com/logos/acme-36613.svg',
      title: 'Acme',
    },
    menu: [
      {
        title: 'Menu 1',
        url: '#',
      },
      {
        title: 'Menu 2',
        url: '#',
      },
    ],
    download: {
      title: 'Download',
      url: 'https://dmytrobaida.github.io',
    },
  },
  render: (args) => {
    return (
      <PortfolioMdProvider>
        <Header {...args} />
      </PortfolioMdProvider>
    );
  },
};
