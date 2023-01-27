import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SearchIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Search',
  component: SearchIcon
} as Meta;

const Template: Story<IconProps> = args => <SearchIcon {...args} />;

export const Search = Template.bind({});
Search.args = {};
