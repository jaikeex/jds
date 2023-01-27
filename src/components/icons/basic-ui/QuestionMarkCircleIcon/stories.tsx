import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { QuestionMarkCircleIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/QuestionMarkCircle',
  component: QuestionMarkCircleIcon
} as ComponentMeta<typeof QuestionMarkCircleIcon>;

const Template: Story<IconProps> = args => <QuestionMarkCircleIcon {...args} />;

export const QuestionMarkCircle = Template.bind({});
QuestionMarkCircle.args = {};
