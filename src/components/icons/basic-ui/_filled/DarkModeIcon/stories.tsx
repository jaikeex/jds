import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { DarkModeIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Filled/DarkMode',
  component: DarkModeIcon
} as ComponentMeta<typeof DarkModeIcon>;

const Template: Story<IconProps> = args => <DarkModeIcon {...args} />;

export const DarkMode = Template.bind({});
DarkMode.args = {};
