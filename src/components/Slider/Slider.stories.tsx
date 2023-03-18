import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { SliderProps } from './Slider';
import Slider from './Slider';
import type { RangeSliderProps } from './RangeSlider';
import { RangeSlider } from './RangeSlider';

export default {
  title: 'Design System/Slider',
  component: Slider
} as ComponentMeta<typeof Slider>;

const Template: Story<SliderProps> = (args) => (
  <div
    style={{ width: '40rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
  >
    <Slider {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  width: 500
};

const SizesTemplate: Story<SliderProps> = (args) => (
  <div
    style={{
      width: '40rem',
      display: 'flex',
      gap: '1rem',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Slider {...args} size="small" />
    <Slider {...args} size="medium" />
    <Slider {...args} size="large" />
  </div>
);

export const Sizes = SizesTemplate.bind({});
Sizes.args = {
  ...Default.args,
  size: 'small'
};

const ColorsTemplate: Story<SliderProps> = (args) => (
  <div
    style={{
      width: '40rem',
      display: 'flex',
      gap: '1rem',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Slider {...args} color="primary" />
    <Slider {...args} color="success" />
    <Slider {...args} color="error" />
    <Slider {...args} color="warning" />
    <Slider {...args} color="info" />
  </div>
);

export const Colors = ColorsTemplate.bind({});
Colors.args = {
  ...Default.args
};

export const WithoutDisplayedValue = Template.bind({});
WithoutDisplayedValue.args = {
  ...Default.args,
  displayValue: false
};

const RangeSliderTemplate: Story<RangeSliderProps> = (args) => (
  <div
    style={{
      width: '40rem',
      display: 'flex',
      gap: '1rem',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <RangeSlider {...args} size="small" />
    <RangeSlider {...args} size="medium" />
    <RangeSlider {...args} size="large" />
  </div>
);

export const Range = RangeSliderTemplate.bind({});
Range.args = {
  width: 500
};

const MarksTemplate: Story<RangeSliderProps> = (args) => (
  <div
    style={{
      width: '40rem',
      display: 'flex',
      gap: '1rem',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Slider marks={args.marks} width={args.width} color="primary" />
    <RangeSlider {...args} size="large" />
  </div>
);

export const Marks = MarksTemplate.bind({});
Marks.args = {
  width: 500,
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
