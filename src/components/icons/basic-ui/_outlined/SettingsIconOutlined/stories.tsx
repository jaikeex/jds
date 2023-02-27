import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { SettingsIconOutlined } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Outlined/Settings',
  component: SettingsIconOutlined
} as ComponentMeta<typeof SettingsIconOutlined>;

const Template: Story<SvgIconProps> = (args) => (
  <SettingsIconOutlined {...args} />
);

export const Settings = Template.bind({});
Settings.args = {};
