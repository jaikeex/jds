import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { CheckmarkThickIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/CheckmarkThick',
  component: CheckmarkThickIcon
} as ComponentMeta<typeof CheckmarkThickIcon>;

const Template: Story<IconProps> = args => <CheckmarkThickIcon {...args} />;

export const CheckmarkThick = Template.bind({});
CheckmarkThick.args = {};
