import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { HomeIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Filled/Home',
  component: HomeIcon
} as ComponentMeta<typeof HomeIcon>;

const Template: Story<SvgIconProps> = (args) => <HomeIcon {...args} />;

export const Home = Template.bind({});
Home.args = {};
