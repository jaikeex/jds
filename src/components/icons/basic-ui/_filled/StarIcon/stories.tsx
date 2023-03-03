import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { StarIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Filled/Star',
  component: StarIcon
} as ComponentMeta<typeof StarIcon>;

const Template: Story<SvgIconProps> = (args) => <StarIcon {...args} />;

export const Star = Template.bind({});
Star.args = {};
