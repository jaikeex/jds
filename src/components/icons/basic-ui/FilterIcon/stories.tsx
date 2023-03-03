import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { FilterIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Filter',
  component: FilterIcon
} as ComponentMeta<typeof FilterIcon>;

const Template: Story<SvgIconProps> = (args) => <FilterIcon {...args} />;

export const Filter = Template.bind({});
Filter.args = {};
