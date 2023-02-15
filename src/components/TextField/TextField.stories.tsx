import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import TextField, { TextFieldProps } from './TextField';
import { SettingsIcon } from '@components/icons';

export default {
  title: 'Design System/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>;

const Template: Story<TextFieldProps> = args => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField appearance="outlined" label="Label - Outlined" {...args} />
      <TextField appearance="filled" label="Label - Filled" {...args} />
      <TextField appearance="subtle" label="Label - Subtle" {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: ''
};

export const LabelTop = Template.bind({});
LabelTop.args = {};

export const LabelBottom = Template.bind({});
LabelBottom.args = {
  labelPosition: 'bottom'
};

export const IconBefore = Template.bind({});
IconBefore.args = {
  elementBefore: <SettingsIcon size="small" />
};

export const IconAfter = Template.bind({});
IconAfter.args = {
  elementAfter: <SettingsIcon size="small" />
};

export const TextBefore = Template.bind({});
TextBefore.args = {
  elementBefore: <span>kg</span>,
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

export const ColorDanger = Template.bind({});
ColorDanger.args = {
  color: 'danger'
};
