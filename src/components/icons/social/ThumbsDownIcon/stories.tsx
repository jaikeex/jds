import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { ThumbsDownIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Social/ThumbsDown',
  component: ThumbsDownIcon
} as ComponentMeta<typeof ThumbsDownIcon>;

const Template: Story<SvgIconProps> = args => <ThumbsDownIcon {...args} />;

export const ThumbsDown = Template.bind({});
ThumbsDown.args = {};
