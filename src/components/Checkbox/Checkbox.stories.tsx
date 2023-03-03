import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { CheckboxProps } from './Checkbox';
import Checkbox from './Checkbox';
import { HeartIcon, HeartIconOutlined } from 'components/icons';

export default {
  title: 'Design System/Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>;

const Template: Story<CheckboxProps> = (args) => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Checkbox {...args} />
    <Checkbox {...args} color="success" />
    <Checkbox {...args} color="danger" />
    <Checkbox {...args} color="warning" />
    <Checkbox {...args} color="focus" />
  </div>
);

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

export const Icon = Template.bind({});
Icon.args = {
  ...Default.args,
  icon: <HeartIconOutlined />,
  iconChecked: <HeartIcon color="danger" />
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...Default.args,
  label: 'Checkbox label'
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true
};

export const CheckedByDefault = Template.bind({});
CheckedByDefault.args = {
  ...Default.args,
  defaultChecked: true
};
