import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { ButtonProps } from './Button';
import Button from './Button';
import { HomeIcon } from 'components/icons';

export default {
  title: 'Design System/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
    <Button {...args}>Button</Button>
    <Button {...args} iconLeft={<HomeIcon />}>
      Home
    </Button>
    <Button {...args} disabled>
      Disabled
    </Button>
  </div>
);

export const Filled = Template.bind({});
Filled.args = {
  size: 'medium'
};

export const Outlined = Template.bind({});
Outlined.args = {
  appearance: 'outlined'
};

export const Subtle = Template.bind({});
Subtle.args = {
  appearance: 'subtle'
};

const SizesTemplate: Story<ButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
      <Button {...args} size="small">
        Small
      </Button>
      <Button {...args} size="medium">
        Medium
      </Button>
      <Button {...args} size="large">
        Large
      </Button>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
      <Button {...args} appearance="outlined" size="small">
        Small
      </Button>
      <Button {...args} iconLeft={<HomeIcon />} appearance="outlined" size="medium">
        Medium
      </Button>
      <Button {...args} iconLeft={<HomeIcon />} appearance="outlined" size="large">
        Large
      </Button>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
      <Button {...args} appearance="subtle" size="small">
        Small
      </Button>
      <Button {...args} appearance="subtle" size="medium">
        Medium
      </Button>
      <Button {...args} appearance="subtle" size="large">
        Large
      </Button>
    </div>
  </div>
);

export const Sizes = SizesTemplate.bind({});
Sizes.args = {};

const ColorsTemplate: Story<ButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <Button {...args} color="primary">
        primary
      </Button>
      <Button {...args} color="secondary">
        secondary
      </Button>
      <Button {...args} color="success">
        success
      </Button>
      <Button {...args} color="warning">
        warning
      </Button>
      <Button {...args} color="error">
        error
      </Button>
      <Button {...args} color="info">
        info
      </Button>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <Button {...args} appearance="outlined" color="primary">
        primary
      </Button>
      <Button {...args} appearance="outlined" color="secondary">
        secondary
      </Button>
      <Button {...args} appearance="outlined" color="success">
        success
      </Button>
      <Button {...args} appearance="outlined" color="warning">
        warning
      </Button>
      <Button {...args} appearance="outlined" color="error">
        error
      </Button>
      <Button {...args} appearance="outlined" color="info">
        info
      </Button>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <Button {...args} appearance="subtle" color="primary">
        primary
      </Button>
      <Button {...args} appearance="subtle" color="secondary">
        secondary
      </Button>
      <Button {...args} appearance="subtle" color="success">
        success
      </Button>
      <Button {...args} appearance="subtle" color="warning">
        warning
      </Button>
      <Button {...args} appearance="subtle" color="error">
        error
      </Button>
      <Button {...args} appearance="subtle" color="info">
        info
      </Button>
    </div>
  </div>
);

export const Colors = ColorsTemplate.bind({});
Colors.args = {};

const AppearanceTemplate: Story<ButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
    <Button {...args} appearance="filled">
      Button
    </Button>
    <Button {...args} appearance="outlined">
      Button
    </Button>
    <Button {...args} appearance="subtle">
      Button
    </Button>
  </div>
);

export const WithoutRippleEffect = AppearanceTemplate.bind({});
WithoutRippleEffect.args = {
  disableRippleEffect: true
};
