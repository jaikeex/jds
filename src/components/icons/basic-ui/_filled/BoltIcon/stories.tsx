import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { BoltIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Filled/Bolt',
  component: BoltIcon
} as ComponentMeta<typeof BoltIcon>;

const Template: Story<SvgIconProps> = args => <BoltIcon {...args} />;

export const Bolt = Template.bind({});
Bolt.args = {};
