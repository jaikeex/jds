import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { SliderProps } from './Slider';
import Slider from './Slider';

export default {
  title: 'Design System/Slider',
  component: Slider
} as ComponentMeta<typeof Slider>;

const Template: Story<SliderProps> = (args) => (
  <div style={{ width: '40rem', display: 'flex', justifyContent: 'center' }}>
    <Slider {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  width: 500
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
  size: 'large',
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
