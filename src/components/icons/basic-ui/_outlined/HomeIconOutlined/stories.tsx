import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { HomeIconOutlined } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Outlined/Home',
  component: HomeIconOutlined
} as ComponentMeta<typeof HomeIconOutlined>;

const Template: Story<SvgIconProps> = (args) => <HomeIconOutlined {...args} />;

export const Home = Template.bind({});
Home.args = {};
