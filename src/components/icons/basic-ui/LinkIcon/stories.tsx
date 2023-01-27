import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { LinkIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Link',
  component: LinkIcon
} as ComponentMeta<typeof LinkIcon>;

const Template: Story<IconProps> = args => <LinkIcon {...args} />;

export const Link = Template.bind({});
Link.args = {};
