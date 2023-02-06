import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import Loader, { LoaderProps } from './Loader';

export default {
  title: 'Design System/Loader',
  component: Loader
} as ComponentMeta<typeof Loader>;

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