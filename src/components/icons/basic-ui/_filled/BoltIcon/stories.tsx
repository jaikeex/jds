import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { BoltIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Filled/Bolt',
  component: BoltIcon
} as ComponentMeta<typeof BoltIcon>;

const Template: Story<IconProps> = args => <BoltIcon {...args} />;

export const Bolt = Template.bind({});
Bolt.args = {};
