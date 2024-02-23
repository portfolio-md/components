import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './index';

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'Footer',
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary = {
  args: {},
};
