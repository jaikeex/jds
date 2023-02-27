import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { HeartIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Filled/Heart',
  component: HeartIcon
} as ComponentMeta<typeof HeartIcon>;

const Template: Story<SvgIconProps> = (args) => <HeartIcon {...args} />;

export const Heart = Template.bind({});
Heart.args = {};
