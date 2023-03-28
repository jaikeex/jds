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

const SizesTemplate: Story<LoaderProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4rem' }}>
    <Loader {...args} size="small" />
    <Loader {...args} size="medium" />
    <Loader {...args} size="large" />
  </div>
);

export const Sizes = SizesTemplate.bind({});
Sizes.args = {};

const ColorsTemplate: Story<LoaderProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '3rem' }}>
    <Loader {...args} color="primary" />
    <Loader {...args} color="secondary" />
    <Loader {...args} color="success" />
    <Loader {...args} color="error" />
    <Loader {...args} color="warning" />
    <Loader {...args} color="info" />
  </div>
);

export const Colors = ColorsTemplate.bind({});
Colors.args = {};
