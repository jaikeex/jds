import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { HeartIconOutlined } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Outlined/Heart',
  component: HeartIconOutlined
} as ComponentMeta<typeof HeartIconOutlined>;

const Template: Story<SvgIconProps> = (args) => <HeartIconOutlined {...args} />;

export const Heart = Template.bind({});
Heart.args = {};
