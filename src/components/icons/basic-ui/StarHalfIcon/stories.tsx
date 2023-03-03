import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { StarHalfIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/StarHalf',
  component: StarHalfIcon
} as ComponentMeta<typeof StarHalfIcon>;

const Template: Story<SvgIconProps> = (args) => <StarHalfIcon {...args} />;

export const StarHalf = Template.bind({});
StarHalf.args = {};
