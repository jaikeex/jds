import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import Radio from './Radio';
import type { RadioProps } from './Radio';

export default {
  title: 'Design System/Radio',
  component: Radio
} as ComponentMeta<typeof Radio>;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {};
