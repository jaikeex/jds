import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SyncIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Sync',
  component: SyncIcon
} as ComponentMeta<typeof SyncIcon>;

const Template: Story<IconProps> = args => <SyncIcon {...args} />;

export const Sync = Template.bind({});
Sync.args = {};
