import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SettingsIconOutlined } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Outlined/Settings',
  component: SettingsIconOutlined
} as ComponentMeta<typeof SettingsIconOutlined>;

const Template: Story<IconProps> = args => <SettingsIconOutlined {...args} />;

export const Settings = Template.bind({});
Settings.args = {};
