import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { MoreHorizontalIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/MoreHorizontal',
  component: MoreHorizontalIcon
} as ComponentMeta<typeof MoreHorizontalIcon>;

const Template: Story<IconProps> = args => <MoreHorizontalIcon {...args} />;

export const MoreHorizontal = Template.bind({});
MoreHorizontal.args = {};
