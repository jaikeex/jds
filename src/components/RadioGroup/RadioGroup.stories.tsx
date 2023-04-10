import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import RadioGroup from './RadioGroup';
import type { RadioGroupProps } from './RadioGroup';
import { Radio } from 'components/Radio';

export default {
  title: 'Design System/RadioGroup',
  component: RadioGroup,
  parameters: {
    viewMode: 'story'
  }
} as ComponentMeta<typeof RadioGroup>;

const Template: Story<RadioGroupProps> = () => (
  <RadioGroup>
    <Radio label="First" value="first" />
    <Radio label="Second" value="second" />
    <Radio label="Third" value="third" />
    <Radio label="Disabled" value="disabled" disabled />
  </RadioGroup>
);

export const Default = Template.bind({});
Default.args = {};

const SizesTemplate: Story<RadioGroupProps> = () => (
  <RadioGroup>
    <Radio size="small" label="Small" value="sm" />
    <Radio size="medium" label="Medium" value="md" />
    <Radio size="large" label="Large" value="lg" />
  </RadioGroup>
);

export const Sizes = SizesTemplate.bind({});
Sizes.args = {};

const LabelPositionsTemplate: Story<RadioGroupProps> = () => (
  <RadioGroup style={{ gap: '3rem', display: 'flex', flexDirection: 'column' }}>
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

const ColorsTemplate: Story<RadioGroupProps> = () => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4rem' }}>
    <RadioGroup style={{ gap: '1rem' }} color="primary">
      <Radio label="First" value="first" />
      <Radio label="Second" value="second" />
      <Radio label="Third" value="third" />
    </RadioGroup>
    <RadioGroup style={{ gap: '1rem' }} color="success">
      <Radio label="First" value="first" />
      <Radio label="Second" value="second" />
      <Radio label="Third" value="third" />
    </RadioGroup>
    <RadioGroup style={{ gap: '1rem' }} color="error">
      <Radio label="First" value="first" />
      <Radio label="Second" value="second" />
      <Radio label="Third" value="third" />
    </RadioGroup>
    <RadioGroup style={{ gap: '1rem' }} color="warning">
      <Radio label="First" value="first" />
      <Radio label="Second" value="second" />
      <Radio label="Third" value="third" />
    </RadioGroup>
  </div>
);

export const Colors = ColorsTemplate.bind({});
Colors.args = {};
