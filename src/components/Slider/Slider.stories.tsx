import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { SliderProps } from './Slider';
import Slider from './Slider';

export default {
  title: 'Design System/Slider',
  component: Slider
} as ComponentMeta<typeof Slider>;

const Template: Story<SliderProps> = (args) => (
  <div style={{ width: '25rem', display: 'flex', justifyContent: 'center' }}>
    <Slider {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  width: 400
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

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...Default.args,
  label: 'This is a label'
};
