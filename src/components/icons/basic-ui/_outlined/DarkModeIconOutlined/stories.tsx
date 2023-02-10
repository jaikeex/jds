import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { DarkModeIconOutlined } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Outlined/DarkMode',
  component: DarkModeIconOutlined
} as ComponentMeta<typeof DarkModeIconOutlined>;

const Template: Story<SvgIconProps> = args => (
  <DarkModeIconOutlined {...args} />
);

export const DarkMode = Template.bind({});
DarkMode.args = {};
