import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SearchIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Search',
  component: SearchIcon
} as Meta;

const Template: Story<SvgIconProps> = args => <SearchIcon {...args} />;

export const Search = Template.bind({});
Search.args = {};
