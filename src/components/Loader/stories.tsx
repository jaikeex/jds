import React from 'react';
import { Story, Meta } from '@storybook/react';
import Loader, { LoaderProps } from '.';

export default {
  title: 'Design System/Loader',
  component: Loader
} as Meta;

const Template: Story<LoaderProps> = args => <Loader {...args} />;

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
