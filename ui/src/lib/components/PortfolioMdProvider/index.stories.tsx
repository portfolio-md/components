import type { Meta, StoryObj } from '@storybook/react';

import PortfolioMdProvider from './index';

const meta: Meta<typeof PortfolioMdProvider> = {
  component: PortfolioMdProvider,
  title: 'PortfolioMdProvider',
};
export default meta;
type Story = StoryObj<typeof PortfolioMdProvider>;

export const Primary: Story = {
  args: {},
};
