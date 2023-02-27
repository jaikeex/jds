import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { AsyncSelectProps } from './AsyncSelect';
import AsyncSelect from './AsyncSelect';
import type { Selectable } from '@components/Select';

export default {
  title: 'Design System/Select/Async',
  component: AsyncSelect
} as ComponentMeta<typeof AsyncSelect>;

const loadOptions = (
  inputValue: string,
  callback: (options: Selectable[]) => void
) => {
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

  const filterOptions = (query: string) =>
    options.filter((option) => option.value.includes(query.toLowerCase()));

  setTimeout(() => {
    callback(filterOptions(inputValue));
  }, 1000);
};

const Template: Story<AsyncSelectProps> = (args) => (
  <div
    style={{
      width: '300px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}
  >
    <AsyncSelect
      {...args}
      loadOptions={loadOptions}
      defaultOptions
      appearance="outlined"
    />
    <AsyncSelect
      {...args}
      loadOptions={loadOptions}
      defaultOptions
      appearance="filled"
    />
    <AsyncSelect
      {...args}
      loadOptions={loadOptions}
      defaultOptions
      appearance="subtle"
    />
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

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
