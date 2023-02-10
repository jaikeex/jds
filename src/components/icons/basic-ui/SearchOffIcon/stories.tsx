import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SearchOffIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/SearchOff',
  component: SearchOffIcon
} as ComponentMeta<typeof SearchOffIcon>;

const Template: Story<SvgIconProps> = args => <SearchOffIcon {...args} />;

export const SearchOff = Template.bind({});
SearchOff.args = {};
