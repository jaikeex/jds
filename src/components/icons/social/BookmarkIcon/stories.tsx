import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { BookmarkIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Social/Bookmark',
  component: BookmarkIcon
} as ComponentMeta<typeof BookmarkIcon>;

const Template: Story<SvgIconProps> = args => <BookmarkIcon {...args} />;

export const Bookmark = Template.bind({});
Bookmark.args = {};
