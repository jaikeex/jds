import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { UserIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Social/User',
  component: UserIcon
} as ComponentMeta<typeof UserIcon>;

const Template: Story<IconProps> = args => <UserIcon {...args} />;

export const User = Template.bind({});
User.args = {};
