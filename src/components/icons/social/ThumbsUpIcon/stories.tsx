import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { ThumbsUpIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Social/ThumbsUp',
  component: ThumbsUpIcon
} as ComponentMeta<typeof ThumbsUpIcon>;

const Template: Story<SvgIconProps> = args => <ThumbsUpIcon {...args} />;

export const ThumbsUp = Template.bind({});
ThumbsUp.args = {};
