import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { CheckmarkCircleIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/CheckmarkCircle',
  component: CheckmarkCircleIcon
} as ComponentMeta<typeof CheckmarkCircleIcon>;

const Template: Story<IconProps> = args => <CheckmarkCircleIcon {...args} />;

export const CheckmarkCircle = Template.bind({});
CheckmarkCircle.args = {};
