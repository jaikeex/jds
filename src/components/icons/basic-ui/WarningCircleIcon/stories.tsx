import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { WarningCircleIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/WarningCircle',
  component: WarningCircleIcon
} as ComponentMeta<typeof WarningCircleIcon>;

const Template: Story<IconProps> = args => <WarningCircleIcon {...args} />;

export const WarningCircle = Template.bind({});
WarningCircle.args = {};
