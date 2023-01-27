import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SwapHorizontalIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/SwapHorizontal',
  component: SwapHorizontalIcon
} as ComponentMeta<typeof SwapHorizontalIcon>;

const Template: Story<IconProps> = args => <SwapHorizontalIcon {...args} />;

export const SwapHorizontal = Template.bind({});
SwapHorizontal.args = {};
