/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react';

import Wrapper from './index';

import Footer from '../Footer';
import Content from '../Content';
import Header from '../Header';
import PortfolioMdProvider from '../PortfolioMdProvider';

import { Primary as HeaderStory } from '../Header/index.stories';
import { Primary as FooterStory } from '../Footer/index.stories';
import { Primary as ContentStory } from '../Content/index.stories';

const meta: Meta<typeof Wrapper> = {
  component: Wrapper,
  title: 'Wrapper',
};
export default meta;
type Story = StoryObj<typeof Wrapper>;

export const Primary: Story = {
  args: {},
  render: () => {
    return (
      <PortfolioMdProvider>
        <Wrapper>
          <Header {...(HeaderStory.args as any)} />
          <Content {...(ContentStory.args as any)} />
          <Footer {...(FooterStory.args as any)} />
        </Wrapper>
      </PortfolioMdProvider>
    );
  },
};
