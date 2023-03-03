import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { SwapHorizontalIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/SwapHorizontal',
  component: SwapHorizontalIcon
} as ComponentMeta<typeof SwapHorizontalIcon>;

const Template: Story<SvgIconProps> = (args) => <SwapHorizontalIcon {...args} />;

export const SwapHorizontal = Template.bind({});
SwapHorizontal.args = {};
