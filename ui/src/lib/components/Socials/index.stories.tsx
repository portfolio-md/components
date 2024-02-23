import type { Meta, StoryObj } from '@storybook/react';
import { Socials } from './index';

const meta: Meta<typeof Socials> = {
  component: Socials,
  title: 'Socials',
};
export default meta;
type Story = StoryObj<typeof Socials>;

export const Primary = {
  args: {},
};
