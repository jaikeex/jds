import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import Select, { SelectProps } from './Select';

export default {
  title: 'Design System/Select',
  component: Select
} as ComponentMeta<typeof Select>;

const Template: Story<SelectProps> = args => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {};
