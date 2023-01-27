import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { RightArrowIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/RightArrow',
  component: RightArrowIcon
} as ComponentMeta<typeof RightArrowIcon>;

const Template: Story<IconProps> = args => <RightArrowIcon {...args} />;

export const RightArrow = Template.bind({});
RightArrow.args = {};
