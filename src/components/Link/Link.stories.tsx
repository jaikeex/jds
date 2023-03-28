import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { LinkProps } from './Link';
import Link from './Link';

export default {
  title: 'Design System/Link',
  component: Link
} as ComponentMeta<typeof Link>;

const Template: Story<LinkProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.5rem' }}>
    <Link {...args} underline="allways">
      Underlined
    </Link>
    <Link {...args} underline="hover">
      Underlined on hover
    </Link>
    <Link {...args} underline="none">
      No underline
    </Link>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  href: '#'
};
Default.storyName = 'Link';
