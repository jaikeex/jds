import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { QuestionMarkIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/QuestionMark',
  component: QuestionMarkIcon
} as ComponentMeta<typeof QuestionMarkIcon>;

const Template: Story<SvgIconProps> = (args) => <QuestionMarkIcon {...args} />;

export const QuestionMark = Template.bind({});
QuestionMark.args = {};
