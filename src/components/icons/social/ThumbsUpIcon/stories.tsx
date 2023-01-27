import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { ThumbsUpIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Social/ThumbsUp',
  component: ThumbsUpIcon
} as ComponentMeta<typeof ThumbsUpIcon>;

const Template: Story<IconProps> = args => <ThumbsUpIcon {...args} />;

export const ThumbsUp = Template.bind({});
ThumbsUp.args = {};
