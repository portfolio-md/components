import type { Meta, StoryObj } from '@storybook/react';

import Article from './index';

const code = `module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}`;

const meta: Meta<typeof Article> = {
  component: Article,
  title: 'Article',
};
export default meta;
type Story = StoryObj<typeof Article>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
        <pre>
          <code>{code}</code>
        </pre>
      </>
    ),
  },
};
