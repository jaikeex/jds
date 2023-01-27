import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SettingsIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Settings',
  component: SettingsIcon
} as ComponentMeta<typeof SettingsIcon>;

const Template: Story<IconProps> = args => <SettingsIcon {...args} />;

export const Settings = Template.bind({});
Settings.args = {};
