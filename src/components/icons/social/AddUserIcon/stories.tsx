import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { AddUserIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Social/AddUser',
  component: AddUserIcon
} as ComponentMeta<typeof AddUserIcon>;

const Template: Story<SvgIconProps> = (args) => <AddUserIcon {...args} />;

export const AddUser = Template.bind({});
AddUser.args = {};
