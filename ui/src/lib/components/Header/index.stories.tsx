import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './index';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Header',
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Primary = {
  args: {},
};
