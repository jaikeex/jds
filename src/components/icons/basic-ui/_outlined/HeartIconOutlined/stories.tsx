import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { HeartIconOutlined } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Outlined/Heart',
  component: HeartIconOutlined
} as ComponentMeta<typeof HeartIconOutlined>;

const Template: Story<IconProps> = args => <HeartIconOutlined {...args} />;

export const Heart = Template.bind({});
Heart.args = {};
