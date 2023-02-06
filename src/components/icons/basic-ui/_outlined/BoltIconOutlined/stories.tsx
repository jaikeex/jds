import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { BoltIconOutlined } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Outlined/Bolt',
  component: BoltIconOutlined
} as ComponentMeta<typeof BoltIconOutlined>;

const Template: Story<IconProps> = args => <BoltIconOutlined {...args} />;

export const Bolt = Template.bind({});
Bolt.args = {};
