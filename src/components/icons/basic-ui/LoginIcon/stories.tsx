import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { LoginIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Login',
  component: LoginIcon
} as ComponentMeta<typeof LoginIcon>;

const Template: Story<SvgIconProps> = args => <LoginIcon {...args} />;

export const Login = Template.bind({});
Login.args = {};
