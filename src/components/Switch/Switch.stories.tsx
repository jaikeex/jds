import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { SwitchProps } from './Switch';
import Switch from './Switch';

export default {
  title: 'Design System/Switch',
  component: Switch,
  parameters: {
    viewMode: 'story'
  }
} as ComponentMeta<typeof Switch>;

const Template: Story<SwitchProps> = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Switch />
    <Switch defaultChecked />
    <Switch disabled />
    <Switch disabled defaultChecked />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

const SizesTemplate: Story<SwitchProps> = () => (
  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
    <Switch size="small" defaultChecked />
    <Switch size="medium" defaultChecked />
    <Switch size="large" defaultChecked />
  </div>
);

export const Sizes = SizesTemplate.bind({});
Sizes.args = {};

const ColorsTemplate: Story<SwitchProps> = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Switch defaultChecked color="primary" />
    <Switch defaultChecked color="secondary" />
    <Switch defaultChecked color="success" />
    <Switch defaultChecked color="error" />
    <Switch defaultChecked color="warning" />
    <Switch defaultChecked color="info" />
  </div>
);

export const Colors = ColorsTemplate.bind({});
Colors.args = {};

const LabelTemplate: Story<SwitchProps> = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Switch label="Switch label 1" />
    <Switch label="Switch label 2" defaultChecked />
    <Switch label="Switch label 3" disabled />
    <Switch label="Switch label 4" disabled defaultChecked />
  </div>
);

export const Label = LabelTemplate.bind({});
Label.args = {};

const LabelPositionTemplate: Story<SwitchProps> = () => (
  <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
    <Switch defaultChecked labelPosition="right" label="Right" />
    <Switch defaultChecked labelPosition="bottom" label="Bottom" />
    <Switch defaultChecked labelPosition="left" label="Left" />
    <Switch defaultChecked labelPosition="top" label="Top" />
  </div>
);

export const LabelPositions = LabelPositionTemplate.bind({});
LabelPositions.args = {};
