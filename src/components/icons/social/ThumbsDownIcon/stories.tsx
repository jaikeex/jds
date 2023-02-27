import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { ThumbsDownIcon } from '.';
import type { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Social/ThumbsDown',
  component: ThumbsDownIcon
} as ComponentMeta<typeof ThumbsDownIcon>;

const Template: Story<SvgIconProps> = (args) => <ThumbsDownIcon {...args} />;

export const ThumbsDown = Template.bind({});
ThumbsDown.args = {};
