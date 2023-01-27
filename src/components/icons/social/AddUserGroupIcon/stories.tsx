import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { AddUserGroupIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Social/AddUserGroup',
  component: AddUserGroupIcon
} as ComponentMeta<typeof AddUserGroupIcon>;

const Template: Story<IconProps> = args => <AddUserGroupIcon {...args} />;

export const AddUserGroup = Template.bind({});
AddUserGroup.args = {};
