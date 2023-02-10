import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { RefreshIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Refresh',
  component: RefreshIcon
} as ComponentMeta<typeof RefreshIcon>;

const Template: Story<SvgIconProps> = args => <RefreshIcon {...args} />;

export const Refresh = Template.bind({});
Refresh.args = {};
