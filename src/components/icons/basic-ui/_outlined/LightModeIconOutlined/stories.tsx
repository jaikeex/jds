import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { LightModeIconOutlined } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Outlined/LightMode',
  component: LightModeIconOutlined
} as ComponentMeta<typeof LightModeIconOutlined>;

const Template: Story<SvgIconProps> = args => (
  <LightModeIconOutlined {...args} />
);

export const LightMode = Template.bind({});
LightMode.args = {};
