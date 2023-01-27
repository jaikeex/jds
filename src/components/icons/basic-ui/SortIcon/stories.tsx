import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SortIcon } from '.';
import { IconProps } from '@components/icons/types';

export default {
  title: 'Icons/Basic UI/Sort',
  component: SortIcon
} as ComponentMeta<typeof SortIcon>;

const Template: Story<IconProps> = args => <SortIcon {...args} />;

export const Sort = Template.bind({});
Sort.args = {};
