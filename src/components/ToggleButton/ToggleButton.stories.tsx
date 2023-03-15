import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import ToggleButton from './ToggleButton';
import type { ToggleButtonProps } from './ToggleButton';
import { LoginIcon } from 'components/icons';

export default {
  title: 'Design System/ToggleButton',
  component: ToggleButton
} as ComponentMeta<typeof ToggleButton>;

const Template: Story<ToggleButtonProps> = (args) => <ToggleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <LoginIcon />
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
  children: <LoginIcon size={24} />
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: 'large'
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  color: 'primary'
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  color: 'success'
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  color: 'error'
};

export const WithoutBorder = Template.bind({});
WithoutBorder.args = {
  ...Default.args,
  removeBorder: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true
};
