import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import Select from './Select';
import type { Selectable, SelectProps } from 'components/Select/types';
import type { AsyncSelectProps } from './AsyncSelect';
import { AsyncSelect } from './AsyncSelect';
import type { CheckboxSelectProps } from './CheckboxSelect';
import { CheckboxSelect } from './CheckboxSelect';

export default {
  title: 'Design System/Select',
  component: Select
} as ComponentMeta<typeof Select>;

const options: Selectable[] = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue', isDisabled: true },
  { value: 'purple', label: 'Purple' },
  { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'slate', label: 'Slate' },
  { value: 'red', label: 'Red', color: 'error' },
  { value: 'green', label: 'Green', color: 'success' }
];

const loadOptions = (inputValue: string, callback: (options: Selectable[]) => void) => {
  const options: Selectable[] = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue', isDisabled: true },
    { value: 'purple', label: 'Purple' },
    { value: 'orange', label: 'Orange' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'slate', label: 'Slate' },
    { value: 'red', label: 'Red', color: 'error' },
    { value: 'green', label: 'Green', color: 'success' }
  ];

  const filterOptions = (query: string) => options.filter((option) => option.value.includes(query.toLowerCase()));

  setTimeout(() => {
    callback(filterOptions(inputValue));
  }, 1000);
};

const Template: Story<SelectProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem' }}>
    <div
      style={{
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}
    >
      <Select {...args} options={options} appearance="outlined" />
      <Select {...args} options={options} appearance="filled" />
      <Select {...args} options={options} appearance="subtle" />
    </div>
    <div
      style={{
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}
    >
      <Select {...args} options={options} placeholder="Disabled" disabled appearance="outlined" />
      <Select {...args} options={options} value={{ value: 'ocean', label: 'Ocean' }} disabled appearance="filled" />
      <Select
        {...args}
        options={options}
        isMulti
        value={[
          { value: 'ocean', label: 'Ocean' },
          { value: 'purple', label: 'Purple' }
        ]}
        disabled
        appearance="subtle"
      />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

const MultiTemplate: Story<SelectProps> = (args) => (
  <div
    style={{
      width: '350px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}
  >
    <Select {...args} options={options} />
  </div>
);

export const Multi = MultiTemplate.bind({});
Multi.args = {
  isMulti: true,
  label: 'Select multiple values',
  transformLabel: true
};

const LabelTemplate: Story<SelectProps> = (args) => (
  <div
    style={{
      width: '350px',
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem'
    }}
  >
    <Select {...args} options={options} label="Simple label" appearance="outlined" />
    <Select {...args} options={options} label="Transforming label" transformLabel appearance="filled" />
    <Select
      {...args}
      options={options}
      label="Label with placeholder"
      placeholder="Select color..."
      appearance="outlined"
    />
    <Select {...args} options={options} placeholder="Placeholder only..." appearance="filled" />
  </div>
);

export const Label = LabelTemplate.bind({});
Label.args = {};

const ReadonlyTemplate: Story<SelectProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem' }}>
    <div
      style={{
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}
    >
      <Select {...args} options={options} defaultValue={{ value: 'yellow', label: 'Yellow' }} />
      <Select
        {...args}
        options={options}
        isMulti
        defaultValue={[
          { value: 'ocean', label: 'Ocean' },
          { value: 'yellow', label: 'Yellow' }
        ]}
      />
    </div>
    <div
      style={{
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}
    >
      <Select
        {...args}
        options={options}
        label="Readonly"
        readonly
        defaultValue={{ value: 'yellow', label: 'Yellow' }}
      />
      <Select
        {...args}
        options={options}
        isMulti
        label="Readonly"
        readonly
        defaultValue={[
          { value: 'ocean', label: 'Ocean' },
          { value: 'yellow', label: 'Yellow' }
        ]}
      />
    </div>
  </div>
);

export const DefaultValue = ReadonlyTemplate.bind({});
DefaultValue.args = {};

const ColorsTemplate: Story<SelectProps> = (args) => (
  <div
    style={{
      width: '350px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}
  >
    <Select {...args} options={options} color="success" appearance="filled" />
    <Select {...args} options={options} color="error" appearance="filled" />
    <Select {...args} options={options} color="warning" appearance="filled" />
    <Select {...args} options={options} color="info" appearance="filled" />
  </div>
);

export const Colors = ColorsTemplate.bind({});
Colors.args = {};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};

const AsyncTemplate: Story<AsyncSelectProps> = (args) => (
  <div
    style={{
      width: '350px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}
  >
    <AsyncSelect {...args} loadOptions={loadOptions} defaultOptions appearance="outlined" />
    <AsyncSelect {...args} loadOptions={loadOptions} defaultOptions appearance="filled" />
    <AsyncSelect {...args} loadOptions={loadOptions} defaultOptions appearance="subtle" />
  </div>
);

export const Async = AsyncTemplate.bind({});
Async.args = {};

const CheckboxTemplate: Story<CheckboxSelectProps> = (args) => (
  <div
    style={{
      width: '350px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}
  >
    <CheckboxSelect {...args} options={options} appearance="outlined" />
    <CheckboxSelect {...args} options={options} appearance="filled" />
    <CheckboxSelect {...args} options={options} appearance="subtle" />
  </div>
);
export const Checkbox = CheckboxTemplate.bind({});
Checkbox.args = {};
