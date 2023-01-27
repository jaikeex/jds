import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { RefreshIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Refresh',
  component: RefreshIcon
} as ComponentMeta<typeof RefreshIcon>;

const Template: Story<IconProps> = args => <RefreshIcon {...args} />;

export const Refresh = Template.bind({});
Refresh.args = {};
