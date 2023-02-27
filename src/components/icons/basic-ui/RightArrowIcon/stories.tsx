import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { RightArrowIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/RightArrow',
  component: RightArrowIcon
} as ComponentMeta<typeof RightArrowIcon>;

const Template: Story<SvgIconProps> = (args) => <RightArrowIcon {...args} />;

export const RightArrow = Template.bind({});
RightArrow.args = {};
