import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { LinkProps } from './Link';
import Link from './Link';

export default {
  title: 'Design System/Link',
  component: Link
} as ComponentMeta<typeof Link>;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Link', href: '#', underline: 'allways' };

export const OpenInNew = Template.bind({});
OpenInNew.args = {
  ...Default.args,
  openInNew: true
};
