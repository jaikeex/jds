import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SettingsIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Filled/Settings',
  component: SettingsIcon
} as ComponentMeta<typeof SettingsIcon>;

const Template: Story<SvgIconProps> = args => <SettingsIcon {...args} />;

export const Settings = Template.bind({});
Settings.args = {};
