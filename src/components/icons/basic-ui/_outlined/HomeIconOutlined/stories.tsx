import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { HomeIconOutlined } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Outlined/Home',
  component: HomeIconOutlined
} as ComponentMeta<typeof HomeIconOutlined>;

const Template: Story<IconProps> = args => <HomeIconOutlined {...args} />;

export const Home = Template.bind({});
Home.args = {};
