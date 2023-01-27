import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { HomeIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Home',
  component: HomeIcon
} as ComponentMeta<typeof HomeIcon>;

const Template: Story<IconProps> = args => <HomeIcon {...args} />;

export const Home = Template.bind({});
Home.args = {};
