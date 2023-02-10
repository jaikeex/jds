import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SortIcon } from '.';
import { SvgIconProps } from '@components/icons';

export default {
  title: 'Icons/Basic UI/Sort',
  component: SortIcon
} as ComponentMeta<typeof SortIcon>;

const Template: Story<SvgIconProps> = args => <SortIcon {...args} />;

export const Sort = Template.bind({});
Sort.args = {};
