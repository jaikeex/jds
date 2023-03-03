import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { DarkModeIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Filled/DarkMode',
  component: DarkModeIcon
} as ComponentMeta<typeof DarkModeIcon>;

const Template: Story<SvgIconProps> = (args) => <DarkModeIcon {...args} />;

export const DarkMode = Template.bind({});
DarkMode.args = {};
