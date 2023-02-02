import React, { useState } from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import ButtonGroup, { ButtonGroupProps } from '.';
import Button from '../Button';

export default {
  title: 'Design System/ButtonGroup',
  component: ButtonGroup
} as ComponentMeta<typeof ButtonGroup>;

const Template: Story<ButtonGroupProps> = args => <ButtonGroup {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  children: [
    <Button>First</Button>,
    <Button>Second</Button>,
    <Button>Third</Button>
  ]
};

export const Vertical = Template.bind({});
Vertical.args = {
  children: [
    <Button>First</Button>,
    <Button>Second</Button>,
    <Button>Third</Button>
  ],
  orientation: 'vertical'
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: [
    <Button>First</Button>,
    <Button>Second</Button>,
    <Button>Third</Button>
  ],
  appearance: 'outlined'
};

export const Subtle = Template.bind({});
Subtle.args = {
  children: [
    <Button>First</Button>,
    <Button>Second</Button>,
    <Button>Third</Button>
  ],
  appearance: 'subtle'
};
