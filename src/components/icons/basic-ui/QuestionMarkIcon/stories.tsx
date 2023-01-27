import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { QuestionMarkIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/QuestionMark',
  component: QuestionMarkIcon
} as ComponentMeta<typeof QuestionMarkIcon>;

const Template: Story<IconProps> = args => <QuestionMarkIcon {...args} />;

export const QuestionMark = Template.bind({});
QuestionMark.args = {};
