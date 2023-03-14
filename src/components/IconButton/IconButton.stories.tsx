import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { IconButtonProps } from './IconButton';
import IconButton from './IconButton';
import { LightModeIcon } from 'components/icons';

export default {
  title: 'Design System/IconButton',
  component: IconButton
} as ComponentMeta<typeof IconButton>;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <LightModeIcon size={24} />
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  color: 'success'
};

export const Danger = Template.bind({});
Danger.args = {
  ...Default.args,
  color: 'error'
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args,
  color: 'warning'
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
