import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { LoaderProps } from './Loader';
import Loader from './Loader';

export default {
  title: 'Design System/Loader',
  component: Loader,
  parameters: {
    viewMode: 'story'
  }
} as ComponentMeta<typeof Loader>;

const Template: Story<LoaderProps> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};

const SizesTemplate: Story<LoaderProps> = () => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4rem' }}>
    <Loader size="small" />
    <Loader size="medium" />
    <Loader size="large" />
  </div>
);

export const Sizes = SizesTemplate.bind({});
Sizes.args = {};

const ColorsTemplate: Story<LoaderProps> = () => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '3rem' }}>
    <Loader color="primary" />
    <Loader color="secondary" />
    <Loader color="success" />
    <Loader color="error" />
    <Loader color="warning" />
    <Loader color="info" />
  </div>
);

export const Colors = ColorsTemplate.bind({});
Colors.args = {};
