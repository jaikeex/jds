import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { ChevronDownIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/ChevronDown',
  component: ChevronDownIcon
} as ComponentMeta<typeof ChevronDownIcon>;

const Template: Story<SvgIconProps> = args => <ChevronDownIcon {...args} />;

export const ChevronDown = Template.bind({});
ChevronDown.args = {};
