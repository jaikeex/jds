import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SearchCheckIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/SearchCheck',
  component: SearchCheckIcon
} as ComponentMeta<typeof SearchCheckIcon>;

const Template: Story<IconProps> = args => <SearchCheckIcon {...args} />;

export const SearchCheck = Template.bind({});
SearchCheck.args = {};
