import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { AddUserGroupIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Social/AddUserGroup',
  component: AddUserGroupIcon
} as ComponentMeta<typeof AddUserGroupIcon>;

const Template: Story<SvgIconProps> = args => <AddUserGroupIcon {...args} />;

export const AddUserGroup = Template.bind({});
AddUserGroup.args = {};
