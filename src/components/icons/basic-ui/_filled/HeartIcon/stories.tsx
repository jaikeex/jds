import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { HeartIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Filled/Heart',
  component: HeartIcon
} as ComponentMeta<typeof HeartIcon>;

const Template: Story<IconProps> = args => <HeartIcon {...args} />;

export const Heart = Template.bind({});
Heart.args = {};
