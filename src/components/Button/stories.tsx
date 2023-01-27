import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from '.';
import { HomeIcon } from '@components/icons';

export default {
  title: 'Design System/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default'
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
  children: 'Small'
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: 'large',
  children: 'Large'
};

export const LargeWithIcon = Template.bind({});
LargeWithIcon.args = {
  ...Default.args,
  size: 'large',
  children: 'Large',
  icon: <HomeIcon />
};

export const Subtle = Template.bind({});
Subtle.args = {
  ...Default.args,
  children: 'Subtle',
  appearance: 'subtle'
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...Default.args,
  children: 'Outlined',
  appearance: 'outlined'
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  children: 'Success',
  appearance: 'success'
};

export const Danger = Template.bind({});
Danger.args = {
  ...Default.args,
  children: 'Danger',
  appearance: 'danger'
};

export const DefaultWithIcon = Template.bind({});
DefaultWithIcon.args = {
  ...Default.args,
  icon: <HomeIcon />
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  children: 'Disabled',
  disabled: true
};
