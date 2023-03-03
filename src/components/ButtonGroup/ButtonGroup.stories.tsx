import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { ButtonGroupProps } from '.';
import { ButtonGroup } from '.';
import { Button } from 'components/Button';

export default {
  title: 'Design System/ButtonGroup',
  component: ButtonGroup
} as ComponentMeta<typeof ButtonGroup>;

const Template: Story<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  children: [<Button key={1}>First</Button>, <Button key={2}>Second</Button>, <Button key={3}>Third</Button>]
};

export const Vertical = Template.bind({});
Vertical.args = {
  children: [<Button key={1}>First</Button>, <Button key={2}>Second</Button>, <Button key={3}>Third</Button>],
  orientation: 'vertical'
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: [<Button key={1}>First</Button>, <Button key={2}>Second</Button>, <Button key={3}>Third</Button>],
  appearance: 'outlined'
};

export const Subtle = Template.bind({});
Subtle.args = {
  children: [<Button key={1}>First</Button>, <Button key={2}>Second</Button>, <Button key={3}>Third</Button>],
  appearance: 'subtle'
};
