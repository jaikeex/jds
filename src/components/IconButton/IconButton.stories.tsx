import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { IconButtonProps } from './IconButton';
import IconButton from './IconButton';
import { EmailIcon, LightModeIcon } from 'components/icons';

export default {
  title: 'Design System/IconButton',
  component: IconButton
} as ComponentMeta<typeof IconButton>;

const Template: Story<IconButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem' }}>
    <IconButton {...args} />
    <IconButton {...args}>
      <EmailIcon />
    </IconButton>
    <IconButton {...args} disabled />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: <LightModeIcon />
};

const SizesTemplate: Story<IconButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', alignItems: 'center' }}>
    <IconButton {...args} size="small" />
    <IconButton {...args} size="medium" />
    <IconButton {...args} size="large" />
  </div>
);

export const Sizes = SizesTemplate.bind({});
Sizes.args = {
  children: <EmailIcon />
};

const ColorsTemplate: Story<IconButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem' }}>
    <IconButton {...args} color="primary" />
    <IconButton {...args} color="secondary" />
    <IconButton {...args} color="success" />
    <IconButton {...args} color="error" />
    <IconButton {...args} color="warning" />
    <IconButton {...args} color="info" />
  </div>
);

export const Colors = ColorsTemplate.bind({});
Colors.args = {
  children: <EmailIcon />
};

const BackgroundTemplate: Story<IconButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.5rem' }}>
    <IconButton {...args} size="small" />
    <IconButton {...args} size="medium" />
    <IconButton {...args} size="large" />
  </div>
);

export const Background = BackgroundTemplate.bind({});
Background.args = {
  children: <EmailIcon />,
  enableBackground: true
};

export const WithRippleEffect = BackgroundTemplate.bind({});
WithRippleEffect.args = {
  children: <EmailIcon />,
  enableBackground: true,
  enableRippleEffect: true
};
