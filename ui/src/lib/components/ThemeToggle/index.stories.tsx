import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './index';

const meta: Meta<typeof ThemeToggle> = {
  component: ThemeToggle,
  title: 'ThemeToggle',
};
export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Primary = {
  args: {},
};
