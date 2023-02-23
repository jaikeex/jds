import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import Link, { LinkProps } from './Link';

export default {
  title: 'Design System/Link',
  component: Link
} as ComponentMeta<typeof Link>;

const Template: Story<LinkProps> = args => <Link {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Link' };

export const OpenInNew = Template.bind({});
OpenInNew.args = {
  ...Default.args,
  openInNew: true
};
