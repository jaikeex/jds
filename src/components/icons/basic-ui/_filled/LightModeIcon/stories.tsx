import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { LightModeIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Filled/LightMode',
  component: LightModeIcon
} as ComponentMeta<typeof LightModeIcon>;

const Template: Story<IconProps> = args => <LightModeIcon {...args} />;

export const LightMode = Template.bind({});
LightMode.args = {};
