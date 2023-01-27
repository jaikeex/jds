import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { UserGroupIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Social/UserGroup',
  component: UserGroupIcon
} as ComponentMeta<typeof UserGroupIcon>;

const Template: Story<IconProps> = args => <UserGroupIcon {...args} />;

export const UserGroup = Template.bind({});
UserGroup.args = {};
