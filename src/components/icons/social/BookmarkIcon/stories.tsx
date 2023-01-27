import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { BookmarkIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Social/Bookmark',
  component: BookmarkIcon
} as ComponentMeta<typeof BookmarkIcon>;

const Template: Story<IconProps> = args => <BookmarkIcon {...args} />;

export const Bookmark = Template.bind({});
Bookmark.args = {};
