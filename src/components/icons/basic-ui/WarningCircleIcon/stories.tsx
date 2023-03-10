import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { WarningCircleIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/WarningCircle',
  component: WarningCircleIcon
} as ComponentMeta<typeof WarningCircleIcon>;

const Template: Story<SvgIconProps> = (args) => <WarningCircleIcon {...args} />;

export const WarningCircle = Template.bind({});
WarningCircle.args = {};
