import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { MoreVerticalIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/MoreVertical',
  component: MoreVerticalIcon
} as ComponentMeta<typeof MoreVerticalIcon>;

const Template: Story<SvgIconProps> = (args) => <MoreVerticalIcon {...args} />;

export const MoreVertical = Template.bind({});
MoreVertical.args = {};
