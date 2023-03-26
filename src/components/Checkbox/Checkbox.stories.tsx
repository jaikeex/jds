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
    <Checkbox {...args} defaultChecked />
    <Checkbox {...args} disabled />
    <Checkbox {...args} disabled defaultChecked />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

const SizesTemplate: Story<CheckboxProps> = (args) => (
  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
    <Checkbox {...args} size="small" label="Small" />
    <Checkbox {...args} size="medium" label="Medium" />
    <Checkbox {...args} size="large" label="Large" />
  </div>
);

export const Sizes = SizesTemplate.bind({});
Sizes.args = {
  labelPosition: 'top',
  defaultChecked: true
};

const ColorsTemplate: Story<CheckboxProps> = (args) => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Checkbox {...args} />
    <Checkbox {...args} color="success" />
    <Checkbox {...args} color="error" />
    <Checkbox {...args} color="warning" />
    <Checkbox {...args} color="info" />
  </div>
);

export const Colors = ColorsTemplate.bind({});
Colors.args = {
  defaultChecked: true
};

const IconTemplate: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Icon = IconTemplate.bind({});
Icon.args = {
  icon: <HeartIconOutlined />,
  iconChecked: <HeartIcon color="error" />
};

const LabelTemplate: Story<CheckboxProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Checkbox {...args} />
    <Checkbox {...args} defaultChecked />
    <Checkbox {...args} disabled />
    <Checkbox {...args} disabled defaultChecked />
  </div>
);

export const Label = LabelTemplate.bind({});
Label.args = {
  label: 'CheckboxLabel'
};

const LabelsTemplate: Story<CheckboxProps> = (args) => (
  <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
    <Checkbox {...args} labelPosition="right" label="Right" />
    <Checkbox {...args} labelPosition="bottom" label="Bottom" />
    <Checkbox {...args} labelPosition="left" label="Left" />
    <Checkbox {...args} labelPosition="top" label="Top" />
  </div>
);

export const LabelPositions = LabelsTemplate.bind({});
LabelPositions.args = {
  defaultChecked: true
};
