import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { CheckmarkThickIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/CheckmarkThick',
  component: CheckmarkThickIcon
} as ComponentMeta<typeof CheckmarkThickIcon>;

const Template: Story<SvgIconProps> = (args) => <CheckmarkThickIcon {...args} />;

export const CheckmarkThick = Template.bind({});
CheckmarkThick.args = {};
