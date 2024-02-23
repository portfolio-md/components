import type { Meta, StoryObj } from '@storybook/react';
import { ContentWrapper } from './index';

const meta: Meta<typeof ContentWrapper> = {
  component: ContentWrapper,
  title: 'ContentWrapper',
};
export default meta;
type Story = StoryObj<typeof ContentWrapper>;

export const Primary = {
  args: {},
};
