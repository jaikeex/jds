import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import IconButton, { IconButtonProps } from '.';
import { LightModeIcon } from '@components/icons';

export default {
  title: 'Design System/IconButton',
  component: IconButton
} as ComponentMeta<typeof IconButton>;

const Template: Story<IconButtonProps> = args => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <LightModeIcon />
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  color: 'success'
};

export const Danger = Template.bind({});
Danger.args = {
  ...Default.args,
  color: 'danger'
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args,
  color: 'warning'
};

export const Focus = Template.bind({});
Focus.args = {
  ...Default.args,
  color: 'focus'
};

export const Accented = Template.bind({});
Accented.args = {
  ...Default.args,
  color: 'accented'
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
