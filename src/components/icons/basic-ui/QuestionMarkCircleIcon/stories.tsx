import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { QuestionMarkCircleIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/QuestionMarkCircle',
  component: QuestionMarkCircleIcon
} as ComponentMeta<typeof QuestionMarkCircleIcon>;

const Template: Story<SvgIconProps> = (args) => (
  <QuestionMarkCircleIcon {...args} />
);

export const QuestionMarkCircle = Template.bind({});
QuestionMarkCircle.args = {};
