import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SearchCheckIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/SearchCheck',
  component: SearchCheckIcon
} as ComponentMeta<typeof SearchCheckIcon>;

const Template: Story<SvgIconProps> = args => <SearchCheckIcon {...args} />;

export const SearchCheck = Template.bind({});
SearchCheck.args = {};
