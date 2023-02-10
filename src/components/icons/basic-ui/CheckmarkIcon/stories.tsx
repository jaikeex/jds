import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { CheckmarkIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Checkmark',
  component: CheckmarkIcon
} as ComponentMeta<typeof CheckmarkIcon>;

const Template: Story<SvgIconProps> = args => <CheckmarkIcon {...args} />;

export const Checkmark = Template.bind({});
Checkmark.args = {};
