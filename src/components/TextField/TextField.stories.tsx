import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { TextFieldProps } from './TextField';
import TextField from './TextField';
import { SettingsIcon } from 'components/icons';

export default {
  title: 'Design System/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>;

const Template: Story<TextFieldProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <TextField appearance="outlined" label="Label - Outlined" {...args} />
    <TextField appearance="filled" label="Label - Filled" {...args} />
    <TextField appearance="subtle" label="Label - Subtle" {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: ''
};

export const Label = Template.bind({});
Label.args = {};

export const IconBefore = Template.bind({});
IconBefore.args = {
  elementBefore: <SettingsIcon size={24} />
};

export const IconAfter = Template.bind({});
IconAfter.args = {
  elementAfter: <SettingsIcon size={24} />
};

export const TextBefore = Template.bind({});
TextBefore.args = {
  elementBefore: <span>Enter last name:</span>,
  label: 'Enter '
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  defaultValue: 'Default input value'
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  label: '',
  placeholder: 'Start typing...'
};

export const Readonly = Template.bind({});
Readonly.args = {
  label: '',
  value: 'Cannot be edited',
  readOnly: true
};

export const ColorSuccess = Template.bind({});
ColorSuccess.args = {
  color: 'success'
};

export const ColorError = Template.bind({});
ColorError.args = {
  color: 'error'
};
