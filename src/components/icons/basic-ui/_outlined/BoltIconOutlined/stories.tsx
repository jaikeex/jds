import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { BoltIconOutlined } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Outlined/Bolt',
  component: BoltIconOutlined
} as ComponentMeta<typeof BoltIconOutlined>;

const Template: Story<SvgIconProps> = args => <BoltIconOutlined {...args} />;

export const Bolt = Template.bind({});
Bolt.args = {};
