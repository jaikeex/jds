import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { ButtonGroupProps } from '.';
import { ButtonGroup } from '.';
import { Button } from 'components/Button';

export default {
  title: 'Design System/ButtonGroup',
  component: ButtonGroup
} as ComponentMeta<typeof ButtonGroup>;

const Template: Story<ButtonGroupProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
    <ButtonGroup {...args} appearance="filled" />
    <ButtonGroup {...args} appearance="outlined" />
    <ButtonGroup {...args} appearance="subtle" />
  </div>
);

export const ButtonVariants = Template.bind({});
ButtonVariants.args = {
  children: [<Button key={1}>First</Button>, <Button key={2}>Second</Button>, <Button key={3}>Third</Button>]
};

const VerticalTemplate: Story<ButtonGroupProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem' }}>
    <ButtonGroup {...args} appearance="filled" />
    <ButtonGroup {...args} appearance="outlined" />
    <ButtonGroup {...args} appearance="subtle" />
  </div>
);

export const Vertical = VerticalTemplate.bind({});
Vertical.args = {
  children: [<Button key={1}>First</Button>, <Button key={2}>Second</Button>, <Button key={3}>Third</Button>],
  orientation: 'vertical'
};

const ColorsTemplate: Story<ButtonGroupProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
      <ButtonGroup color="success" {...args} appearance="filled" />
      <ButtonGroup color="success" {...args} appearance="outlined" />
      <ButtonGroup color="success" {...args} appearance="subtle" />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
      <ButtonGroup color="error" {...args} appearance="filled" />
      <ButtonGroup color="error" {...args} appearance="outlined" />
      <ButtonGroup color="error" {...args} appearance="subtle" />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
      <ButtonGroup color="warning" {...args} appearance="filled" />
      <ButtonGroup color="warning" {...args} appearance="outlined" />
      <ButtonGroup color="warning" {...args} appearance="subtle" />
    </div>
  </div>
);

export const Colors = ColorsTemplate.bind({});
Colors.args = {
  children: [<Button key={1}>First</Button>, <Button key={2}>Second</Button>, <Button key={3}>Third</Button>]
};
