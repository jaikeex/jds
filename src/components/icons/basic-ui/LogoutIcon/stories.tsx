import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { LogoutIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Logout',
  component: LogoutIcon
} as ComponentMeta<typeof LogoutIcon>;

const Template: Story<IconProps> = args => <LogoutIcon {...args} />;

export const Logout = Template.bind({});
Logout.args = {};
