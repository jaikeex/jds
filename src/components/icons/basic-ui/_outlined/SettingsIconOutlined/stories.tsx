import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SettingsIconOutlined } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Outlined/Settings',
  component: SettingsIconOutlined
} as ComponentMeta<typeof SettingsIconOutlined>;

const Template: Story<SvgIconProps> = args => (
  <SettingsIconOutlined {...args} />
);

export const Settings = Template.bind({});
Settings.args = {};
