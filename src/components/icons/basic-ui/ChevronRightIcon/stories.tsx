import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { ChevronRightIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/ChevronRight',
  component: ChevronRightIcon
} as ComponentMeta<typeof ChevronRightIcon>;

const Template: Story<IconProps> = args => <ChevronRightIcon {...args} />;

export const ChevronRight = Template.bind({});
ChevronRight.args = {};
