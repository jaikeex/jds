import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { DarkModeIconOutlined } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Outlined/DarkMode',
  component: DarkModeIconOutlined
} as ComponentMeta<typeof DarkModeIconOutlined>;

const Template: Story<SvgIconProps> = (args) => (
  <DarkModeIconOutlined {...args} />
);

export const DarkMode = Template.bind({});
DarkMode.args = {};
