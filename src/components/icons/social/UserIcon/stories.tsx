import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { UserIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Social/User',
  component: UserIcon
} as ComponentMeta<typeof UserIcon>;

const Template: Story<SvgIconProps> = (args) => <UserIcon {...args} />;

export const User = Template.bind({});
User.args = {};
