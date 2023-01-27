import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SwapVerticalIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/SwapVertical',
  component: SwapVerticalIcon
} as ComponentMeta<typeof SwapVerticalIcon>;

const Template: Story<IconProps> = args => <SwapVerticalIcon {...args} />;

export const SwapVertical = Template.bind({});
SwapVertical.args = {};
