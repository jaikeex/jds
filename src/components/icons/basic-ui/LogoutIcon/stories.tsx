import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { LogoutIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Logout',
  component: LogoutIcon
} as ComponentMeta<typeof LogoutIcon>;

const Template: Story<SvgIconProps> = (args) => <LogoutIcon {...args} />;

export const Logout = Template.bind({});
Logout.args = {};
