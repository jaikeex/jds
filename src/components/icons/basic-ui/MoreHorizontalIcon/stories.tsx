import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { MoreHorizontalIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/MoreHorizontal',
  component: MoreHorizontalIcon
} as ComponentMeta<typeof MoreHorizontalIcon>;

const Template: Story<SvgIconProps> = (args) => <MoreHorizontalIcon {...args} />;

export const MoreHorizontal = Template.bind({});
MoreHorizontal.args = {};
