import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { ChevronLeftIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/ChevronLeft',
  component: ChevronLeftIcon
} as ComponentMeta<typeof ChevronLeftIcon>;

const Template: Story<SvgIconProps> = args => <ChevronLeftIcon {...args} />;

export const ChevronLeft = Template.bind({});
ChevronLeft.args = {};
