import type { Meta, StoryObj } from '@storybook/react';

import ThemeToggle from './index';
import PortfolioMdProvider from '../PortfolioMdProvider';

const meta: Meta<typeof ThemeToggle> = {
  component: ThemeToggle,
  title: 'ThemeToggle',
};
export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Primary: Story = {
  args: {},
  render: () => {
    return (
      <PortfolioMdProvider>
        <ThemeToggle />
      </PortfolioMdProvider>
    );
  },
};
