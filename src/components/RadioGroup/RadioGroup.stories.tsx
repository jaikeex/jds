import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import RadioGroup from './RadioGroup';
import type { RadioGroupProps } from './RadioGroup';
import { Radio } from 'components/Radio';

export default {
  title: 'Design System/RadioGroup',
  component: RadioGroup
} as ComponentMeta<typeof RadioGroup>;

const Template: Story<RadioGroupProps> = (args) => {
  const changeHandler = (value: any) => {
    console.log(value);
  };

  return (
    <RadioGroup {...args} onChange={changeHandler}>
      <Radio label="First" value="first" />
      <Radio label="Second" value="second" />
      <Radio label="Third" value="third" />
      <Radio label="Disabled" value="disabled" disabled />
    </RadioGroup>
  );
};

export const Default = Template.bind({});
Default.args = {};

const SizesTemplate: Story<RadioGroupProps> = (args) => (
  <RadioGroup {...args}>
    <Radio size="small" label="Small" value="sm" />
    <Radio size="medium" label="Medium" value="md" />
    <Radio size="large" label="Large" value="lg" />
  </RadioGroup>
);

export const Sizes = SizesTemplate.bind({});
Sizes.args = {};

const LabelPositionsTemplate: Story<RadioGroupProps> = (args) => (
  <RadioGroup style={{ gap: '3rem' }} {...args}>
    <Radio labelPosition="left" label="Left" value="left" />
    <Radio labelPosition="bottom" label="Bottom" value="bottom" />
    <Radio labelPosition="right" label="Right" value="right" />
    <Radio labelPosition="top" label="Top" value="top" />
  </RadioGroup>
);

export const LabelPositions = LabelPositionsTemplate.bind({});
LabelPositions.args = {
  orientation: 'horizontal'
};

const ColorsTemplate: Story<RadioGroupProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4rem' }}>
    <RadioGroup style={{ gap: '1rem' }} color="primary" {...args}>
      <Radio label="First" value="first" />
      <Radio label="Second" value="second" />
      <Radio label="Third" value="third" />
    </RadioGroup>
    <RadioGroup style={{ gap: '1rem' }} color="success" {...args}>
      <Radio label="First" value="first" />
      <Radio label="Second" value="second" />
      <Radio label="Third" value="third" />
    </RadioGroup>
    <RadioGroup style={{ gap: '1rem' }} color="error" {...args}>
      <Radio label="First" value="first" />
      <Radio label="Second" value="second" />
      <Radio label="Third" value="third" />
    </RadioGroup>
    <RadioGroup style={{ gap: '1rem' }} color="warning" {...args}>
      <Radio label="First" value="first" />
      <Radio label="Second" value="second" />
      <Radio label="Third" value="third" />
    </RadioGroup>
  </div>
);

export const Colors = ColorsTemplate.bind({});
Colors.args = {};
