import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SearchOffIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/SearchOff',
  component: SearchOffIcon
} as ComponentMeta<typeof SearchOffIcon>;

const Template: Story<IconProps> = args => <SearchOffIcon {...args} />;

export const SearchOff = Template.bind({});
SearchOff.args = {};
