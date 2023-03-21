import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import ToggleButton from './ToggleButton';
import type { ToggleButtonProps } from './ToggleButton';
import { LoginIcon } from 'components/icons';

export default {
  title: 'Design System/ToggleButton',
  component: ToggleButton
} as ComponentMeta<typeof ToggleButton>;

const Template: Story<ToggleButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem' }}>
    <ToggleButton {...args} />
    <ToggleButton {...args} selected />
    <ToggleButton {...args} disabled />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: <LoginIcon />
};

const SizesTemplate: Story<ToggleButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', alignItems: 'center' }}>
    <ToggleButton {...args} size="small">
      <LoginIcon size={24} />
    </ToggleButton>
    <ToggleButton {...args} size="medium">
      <LoginIcon size={28} />
    </ToggleButton>
    <ToggleButton {...args} size="large">
      <LoginIcon size={32} />
    </ToggleButton>
  </div>
);

export const Sizes = SizesTemplate.bind({});
Sizes.args = {
  ...Default.args
};

const ColorsTemplate: Story<ToggleButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem' }}>
    <ToggleButton {...args} selected color="default" />
    <ToggleButton {...args} selected color="primary" />
    <ToggleButton {...args} selected color="secondary" />
    <ToggleButton {...args} selected color="success" />
    <ToggleButton {...args} selected color="error" />
    <ToggleButton {...args} selected color="warning" />
    <ToggleButton {...args} selected color="info" />
  </div>
);

export const Colors = ColorsTemplate.bind({});
Colors.args = {
  ...Default.args,
  color: 'primary'
};

const BordersTemplate: Story<ToggleButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem' }}>
    <ToggleButton {...args} color="default" />
    <ToggleButton {...args} color="primary" />
    <ToggleButton {...args} color="secondary" />
    <ToggleButton {...args} color="success" />
    <ToggleButton {...args} color="error" />
    <ToggleButton {...args} color="warning" />
    <ToggleButton {...args} color="info" />
  </div>
);

export const WithoutBorder = BordersTemplate.bind({});
WithoutBorder.args = {
  ...Default.args,
  removeBorder: true
};
