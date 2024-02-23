import type { Meta, StoryObj } from '@storybook/react';
import { Wrapper } from './index';

const meta: Meta<typeof Wrapper> = {
  component: Wrapper,
  title: 'Wrapper',
};
export default meta;
type Story = StoryObj<typeof Wrapper>;

export const Primary = {
  args: {},
};
