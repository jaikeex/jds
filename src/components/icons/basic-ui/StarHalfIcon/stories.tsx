import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { StarHalfIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/StarHalf',
  component: StarHalfIcon
} as ComponentMeta<typeof StarHalfIcon>;

const Template: Story<IconProps> = args => <StarHalfIcon {...args} />;

export const StarHalf = Template.bind({});
StarHalf.args = {};
