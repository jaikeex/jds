import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '.';

export default {
  title: 'atoms/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  onClick: () => {
    console.log('BUTTON CLICKED');
  }
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
  children: 'OK'
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: 'large'
};

export const Wide = Template.bind({});
Wide.args = {
  ...Default.args,
  size: 'wide'
};

export const LargeText = Template.bind({});
LargeText.args = {
  ...Default.args,
  children: 'This is a very large text'
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true
};
