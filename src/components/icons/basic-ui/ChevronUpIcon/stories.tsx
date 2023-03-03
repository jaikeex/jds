import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { ChevronUpIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/ChevronUp',
  component: ChevronUpIcon
} as ComponentMeta<typeof ChevronUpIcon>;

const Template: Story<SvgIconProps> = (args) => <ChevronUpIcon {...args} />;

export const ChevronUp = Template.bind({});
ChevronUp.args = {};
