import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import StandardSelect from './StandardSelect';
import type { SelectProps } from 'components/Select/types';

export default {
  title: 'Design System/Select/Standard',
  component: StandardSelect
} as ComponentMeta<typeof StandardSelect>;

const options = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' }
];

const Template: Story<SelectProps> = (args) => (
  <div
    style={{
      width: '300px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}
  >
    <StandardSelect {...args} options={options} appearance="outlined" />
    <StandardSelect {...args} options={options} appearance="filled" />
    <StandardSelect {...args} options={options} appearance="subtle" />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Multi = Template.bind({});
Multi.args = {
  isMulti: true,
  label: 'Select multiple values',
  transformLabel: true
};

export const LabelTop = Template.bind({});
LabelTop.args = {
  label: 'Select color',
  transformLabel: true
};

export const LabelBottom = Template.bind({});
LabelBottom.args = {
  label: 'Select color',
  labelPosition: 'bottom',
  transformLabel: true
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  ...Default.args,
  label: 'Select color...'
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  defaultValue: { value: 'yellow', label: 'Yellow' }
};

export const ColorSuccess = Template.bind({});
ColorSuccess.args = {
  color: 'success'
};

export const ColorDanger = Template.bind({});
ColorDanger.args = {
  color: 'danger'
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
