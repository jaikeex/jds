import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { ButtonProps } from './Button';
import Button from './Button';
import { HomeIcon } from 'components/icons';

export default {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    viewMode: 'story'
  }
} as ComponentMeta<typeof Button>;

const FilledTemplate: Story<ButtonProps> = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button>Button</Button>
    <Button iconLeft={<HomeIcon />}>Home</Button>
    <Button disabled>Disabled</Button>
  </div>
);

export const Filled = FilledTemplate.bind({});
Filled.args = {};

const OutlinedTemplate: Story<ButtonProps> = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button appearance="outlined">Button</Button>
    <Button appearance="outlined" iconLeft={<HomeIcon />}>
      Home
    </Button>
    <Button appearance="outlined" disabled>
      Disabled
    </Button>
  </div>
);

export const Outlined = OutlinedTemplate.bind({});
Outlined.args = {};

const SubtleTemplate: Story<ButtonProps> = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button appearance="subtle">Button</Button>
    <Button appearance="subtle" iconLeft={<HomeIcon />}>
      Home
    </Button>
    <Button appearance="subtle" disabled>
      Disabled
    </Button>
  </div>
);

export const Subtle = SubtleTemplate.bind({});
Subtle.args = {};

const SizesTemplate: Story<ButtonProps> = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', height: 'max-content' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Button appearance="outlined" size="small">
        Small
      </Button>
      <Button appearance="outlined" size="medium">
        Medium
      </Button>
      <Button appearance="outlined" size="large">
        Large
      </Button>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Button appearance="subtle" size="small">
        Small
      </Button>
      <Button appearance="subtle" size="medium">
        Medium
      </Button>
      <Button appearance="subtle" size="large">
        Large
      </Button>
    </div>
  </div>
);

export const Sizes = SizesTemplate.bind({});
Sizes.args = {};

const ColorsTemplate: Story<ButtonProps> = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', height: 'max-content' }}>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button color="primary">primary</Button>
      <Button color="secondary">secondary</Button>
      <Button color="success">success</Button>
      <Button color="warning">warning</Button>
      <Button color="error">error</Button>
      <Button color="info">info</Button>
    </div>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button appearance="outlined" color="primary">
        primary
      </Button>
      <Button appearance="outlined" color="secondary">
        secondary
      </Button>
      <Button appearance="outlined" color="success">
        success
      </Button>
      <Button appearance="outlined" color="warning">
        warning
      </Button>
      <Button appearance="outlined" color="error">
        error
      </Button>
      <Button appearance="outlined" color="info">
        info
      </Button>
    </div>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button appearance="subtle" color="primary">
        primary
      </Button>
      <Button appearance="subtle" color="secondary">
        secondary
      </Button>
      <Button appearance="subtle" color="success">
        success
      </Button>
      <Button appearance="subtle" color="warning">
        warning
      </Button>
      <Button appearance="subtle" color="error">
        error
      </Button>
      <Button appearance="subtle" color="info">
        info
      </Button>
    </div>
  </div>
);

export const Colors = ColorsTemplate.bind({});
Colors.args = {};

const AppearanceTemplate: Story<ButtonProps> = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button disableRippleEffect appearance="filled">
      Button
    </Button>
    <Button disableRippleEffect appearance="outlined">
      Button
    </Button>
    <Button disableRippleEffect appearance="subtle">
      Button
    </Button>
  </div>
);

export const WithoutRippleEffect = AppearanceTemplate.bind({});
WithoutRippleEffect.args = {};
