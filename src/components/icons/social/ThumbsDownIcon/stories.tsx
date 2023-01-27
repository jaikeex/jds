import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { ThumbsDownIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Social/ThumbsDown',
  component: ThumbsDownIcon
} as ComponentMeta<typeof ThumbsDownIcon>;

const Template: Story<IconProps> = args => <ThumbsDownIcon {...args} />;

export const ThumbsDown = Template.bind({});
ThumbsDown.args = {};
