import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { AddUserIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Social/AddUser',
  component: AddUserIcon
} as ComponentMeta<typeof AddUserIcon>;

const Template: Story<IconProps> = args => <AddUserIcon {...args} />;

export const AddUser = Template.bind({});
AddUser.args = {};
