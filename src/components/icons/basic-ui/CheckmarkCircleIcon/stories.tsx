import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { CheckmarkCircleIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/CheckmarkCircle',
  component: CheckmarkCircleIcon
} as ComponentMeta<typeof CheckmarkCircleIcon>;

const Template: Story<SvgIconProps> = args => <CheckmarkCircleIcon {...args} />;

export const CheckmarkCircle = Template.bind({});
CheckmarkCircle.args = {};
