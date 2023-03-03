import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { WarningIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Warning',
  component: WarningIcon
} as ComponentMeta<typeof WarningIcon>;

const Template: Story<SvgIconProps> = (args) => <WarningIcon {...args} />;

export const Warning = Template.bind({});
Warning.args = {};
