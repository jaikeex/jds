import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { ChevronRightIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/ChevronRight',
  component: ChevronRightIcon
} as ComponentMeta<typeof ChevronRightIcon>;

const Template: Story<SvgIconProps> = args => <ChevronRightIcon {...args} />;

export const ChevronRight = Template.bind({});
ChevronRight.args = {};
