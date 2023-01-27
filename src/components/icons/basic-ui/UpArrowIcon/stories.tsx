import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { UpArrowIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/UpArrow',
  component: UpArrowIcon
} as ComponentMeta<typeof UpArrowIcon>;

const Template: Story<IconProps> = args => <UpArrowIcon {...args} />;

export const UpArrow = Template.bind({});
UpArrow.args = {};
