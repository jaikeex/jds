import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { ChevronDownIcon } from '.';
import { IconProps } from '../../types';

export default {
  title: 'Icons/Basic UI/ChevronDown',
  component: ChevronDownIcon
} as ComponentMeta<typeof ChevronDownIcon>;

const Template: Story<IconProps> = args => <ChevronDownIcon {...args} />;

export const ChevronDown = Template.bind({});
ChevronDown.args = {};
