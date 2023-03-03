import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { CheckmarkIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Checkmark',
  component: CheckmarkIcon
} as ComponentMeta<typeof CheckmarkIcon>;

const Template: Story<SvgIconProps> = (args) => <CheckmarkIcon {...args} />;

export const Checkmark = Template.bind({});
Checkmark.args = {};
