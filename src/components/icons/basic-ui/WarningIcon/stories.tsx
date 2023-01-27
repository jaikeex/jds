import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { WarningIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Warning',
  component: WarningIcon
} as ComponentMeta<typeof WarningIcon>;

const Template: Story<IconProps> = args => <WarningIcon {...args} />;

export const Warning = Template.bind({});
Warning.args = {};
