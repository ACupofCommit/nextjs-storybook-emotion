import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Logo, Props } from './Logo';

export default {
  title: 'MyComponent/Logo',
  component: Logo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Props> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'SMALL_PNG',
};
