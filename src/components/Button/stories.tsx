import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import Button, { ButtonProps } from '.';
import { HomeIcon } from '@components/icons';

export default {
  title: 'Design System/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = args => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Button {...args} color="default">
        default
      </Button>
      <Button {...args} color="success">
        success
      </Button>
      <Button {...args} color="warning">
        warning
      </Button>
      <Button {...args} color="danger">
        danger
      </Button>
      <Button {...args} color="accented">
        accented
      </Button>
      <Button {...args} color="focus">
        focus
      </Button>
    </div>
  );
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

export const Subtle = Template.bind({});
Subtle.args = {
  appearance: 'subtle'
};

export const Outlined = Template.bind({});
Outlined.args = {
  appearance: 'outlined'
};

export const OutlinedWithIconRight = Template.bind({});
OutlinedWithIconRight.args = {
  appearance: 'outlined',
  iconRight: <HomeIcon />
};

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
