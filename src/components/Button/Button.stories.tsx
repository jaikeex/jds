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
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Button {...args} color="primary">
      default
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
);

export const Contained = Template.bind({});
Contained.args = {
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

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};
Small.storyName = 'Size - Small';

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};
Large.storyName = 'Size - Large';

export const OutlinedWithIconLeft = Template.bind({});
OutlinedWithIconLeft.args = {
  appearance: 'outlined',
  iconLeft: <HomeIcon />
};

export const SmallWithIconLeft = Template.bind({});
SmallWithIconLeft.args = {
  iconLeft: <HomeIcon />,
  size: 'small'
};

export const MediumWithIconLeft = Template.bind({});
MediumWithIconLeft.args = {
  iconLeft: <HomeIcon />
};

export const LargeWithIconLeft = Template.bind({});
LargeWithIconLeft.args = {
  iconLeft: <HomeIcon />,
  size: 'large'
};

export const OutlinedWithIconRight = Template.bind({});
OutlinedWithIconRight.args = {
  appearance: 'outlined',
  iconRight: <HomeIcon />
};

export const SmallWithIconRight = Template.bind({});
SmallWithIconRight.args = {
  iconRight: <HomeIcon />,
  size: 'small'
};

export const MediumWithIconRight = Template.bind({});
MediumWithIconRight.args = {
  iconRight: <HomeIcon />
};

export const LargeWithIconRight = Template.bind({});
LargeWithIconRight.args = {
  iconRight: <HomeIcon />,
  size: 'large'
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true
};
