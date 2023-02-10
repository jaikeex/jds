import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { UserGroupIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Social/UserGroup',
  component: UserGroupIcon
} as ComponentMeta<typeof UserGroupIcon>;

const Template: Story<SvgIconProps> = args => <UserGroupIcon {...args} />;

export const UserGroup = Template.bind({});
UserGroup.args = {};
