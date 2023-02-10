import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { DownArrowIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/DownArrow',
  component: DownArrowIcon
} as ComponentMeta<typeof DownArrowIcon>;

const Template: Story<SvgIconProps> = args => <DownArrowIcon {...args} />;

export const DownArrow = Template.bind({});
DownArrow.args = {};
