import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { SyncIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Sync',
  component: SyncIcon
} as ComponentMeta<typeof SyncIcon>;

const Template: Story<SvgIconProps> = (args) => <SyncIcon {...args} />;

export const Sync = Template.bind({});
Sync.args = {};
