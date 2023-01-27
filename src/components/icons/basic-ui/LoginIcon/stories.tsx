import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { LoginIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Login',
  component: LoginIcon
} as ComponentMeta<typeof LoginIcon>;

const Template: Story<IconProps> = args => <LoginIcon {...args} />;

export const Login = Template.bind({});
Login.args = {};
