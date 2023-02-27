import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { ChevronDownIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/ChevronDown',
  component: ChevronDownIcon
} as ComponentMeta<typeof ChevronDownIcon>;

const Template: Story<SvgIconProps> = (args) => <ChevronDownIcon {...args} />;

export const ChevronDown = Template.bind({});
ChevronDown.args = {};
