import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { StarHalfIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/StarHalf',
  component: StarHalfIcon
} as ComponentMeta<typeof StarHalfIcon>;

const Template: Story<SvgIconProps> = args => <StarHalfIcon {...args} />;

export const StarHalf = Template.bind({});
StarHalf.args = {};
