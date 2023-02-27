import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { LightModeIconOutlined } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Outlined/LightMode',
  component: LightModeIconOutlined
} as ComponentMeta<typeof LightModeIconOutlined>;

const Template: Story<SvgIconProps> = (args) => (
  <LightModeIconOutlined {...args} />
);

export const LightMode = Template.bind({});
LightMode.args = {};
