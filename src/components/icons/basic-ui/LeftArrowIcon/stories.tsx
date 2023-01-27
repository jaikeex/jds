import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { LeftArrowIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/LeftArrow',
  component: LeftArrowIcon
} as ComponentMeta<typeof LeftArrowIcon>;

const Template: Story<IconProps> = args => <LeftArrowIcon {...args} />;

export const LeftArrow = Template.bind({});
LeftArrow.args = {};
