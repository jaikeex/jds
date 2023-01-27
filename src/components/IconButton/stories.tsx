import React from 'react';
import { Story, Meta } from '@storybook/react';
import IconButton, { IconButtonProps } from '.';
import { LightModeIcon } from '@components/icons';

export default {
  title: 'Design System/IconButton',
  component: IconButton
} as Meta;

const Template: Story<IconButtonProps> = args => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <LightModeIcon />
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  appearance: 'success'
};

export const Danger = Template.bind({});
Danger.args = {
  ...Default.args,
  appearance: 'danger'
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small'
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: 'large'
};
