import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { FilterIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Filter',
  component: FilterIcon
} as ComponentMeta<typeof FilterIcon>;

const Template: Story<IconProps> = args => <FilterIcon {...args} />;

export const Filter = Template.bind({});
Filter.args = {};
