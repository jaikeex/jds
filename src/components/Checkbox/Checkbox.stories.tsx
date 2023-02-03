import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  title: 'Design System/Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>;

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {};
