import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { ChevronUpIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/ChevronUp',
  component: ChevronUpIcon
} as ComponentMeta<typeof ChevronUpIcon>;

const Template: Story<IconProps> = args => <ChevronUpIcon {...args} />;

export const ChevronUp = Template.bind({});
ChevronUp.args = {};
