import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { StarIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Star',
  component: StarIcon
} as ComponentMeta<typeof StarIcon>;

const Template: Story<IconProps> = args => <StarIcon {...args} />;

export const Star = Template.bind({});
Star.args = {};
