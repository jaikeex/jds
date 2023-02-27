import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { BoltIconOutlined } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Outlined/Bolt',
  component: BoltIconOutlined
} as ComponentMeta<typeof BoltIconOutlined>;

const Template: Story<SvgIconProps> = (args) => <BoltIconOutlined {...args} />;

export const Bolt = Template.bind({});
Bolt.args = {};
