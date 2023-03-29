import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import ToggleButton from './ToggleButton';
import type { ToggleButtonProps } from './ToggleButton';
import { LoginIcon } from 'components/icons';

export default {
  title: 'Design System/ToggleButton',
  component: ToggleButton,
  parameters: {
    viewMode: 'story'
  }
} as ComponentMeta<typeof ToggleButton>;

const Template: Story<ToggleButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem' }}>
    <ToggleButton {...args} />
    <ToggleButton {...args} defaultSelected={true} />
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
    <ToggleButton {...args} defaultSelected appearance="filled" color="default" />
    <ToggleButton {...args} defaultSelected color="primary" />
    <ToggleButton {...args} defaultSelected color="secondary" />
    <ToggleButton {...args} defaultSelected color="success" />
    <ToggleButton {...args} defaultSelected color="error" />
    <ToggleButton {...args} defaultSelected color="warning" />
    <ToggleButton {...args} defaultSelected color="info" />
  </div>
);

export const Colors = ColorsTemplate.bind({});
Colors.args = {
  ...Default.args,
  color: 'primary'
};

const AppearanceTemplate: Story<ToggleButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem' }}>
    <ToggleButton {...args} appearance="filled" />
    <ToggleButton {...args} appearance="outlined" />
    <ToggleButton {...args} appearance="subtle" />
  </div>
);

export const Variants = AppearanceTemplate.bind({});
Variants.args = {
  ...Default.args
};
