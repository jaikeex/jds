import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { LoaderProps } from './Loader';
import Loader from './Loader';

export default {
  title: 'Design System/Loader',
  component: Loader
} as ComponentMeta<typeof Loader>;

const Template: Story<LoaderProps> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};

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
