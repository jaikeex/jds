import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { UserGroupIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Social/UserGroup',
  component: UserGroupIcon
} as ComponentMeta<typeof UserGroupIcon>;

const Template: Story<SvgIconProps> = (args) => <UserGroupIcon {...args} />;

export const UserGroup = Template.bind({});
UserGroup.args = {};
