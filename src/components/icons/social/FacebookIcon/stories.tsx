import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { FacebookIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Social/Facebook',
  component: FacebookIcon
} as ComponentMeta<typeof FacebookIcon>;

const Template: Story<IconProps> = args => <FacebookIcon {...args} />;

export const Facebook = Template.bind({});
Facebook.args = {};
