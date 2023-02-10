import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { LinkIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Link',
  component: LinkIcon
} as ComponentMeta<typeof LinkIcon>;

const Template: Story<SvgIconProps> = args => <LinkIcon {...args} />;

export const Link = Template.bind({});
Link.args = {};
