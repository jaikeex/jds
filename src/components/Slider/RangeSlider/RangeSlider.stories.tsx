import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import RangeSlider, { type RangeSliderProps } from './RangeSlider';

export default {
  title: 'design System/RangeSlider',
  component: RangeSlider
} as ComponentMeta<typeof RangeSlider>;

const Template: Story<RangeSliderProps> = (args) => (
  <div style={{ width: '40rem' }}>
    <RangeSlider {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  width: 600
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small'
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: 'large'
};

export const WithoutDisplayedValue = Template.bind({});
WithoutDisplayedValue.args = {
  ...Default.args,
  displayValue: false
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  color: 'success'
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  color: 'error'
};

export const WithMarks = Template.bind({});
WithMarks.args = {
  ...Default.args,
  size: 'medium',
  marks: [
    {
      value: 0,
      label: 'MIN'
    },
    {
      value: 20,
      label: '20'
    },
    {
      value: 30,
      label: '30'
    },
    {
      value: 50,
      label: '50'
    },
    {
      value: 100,
      label: 'MAX'
    }
  ]
};
