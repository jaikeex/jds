import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import { SortIcon } from '.';
import type { SvgIconProps } from 'components/icons';

export default {
  title: 'Icons/Basic UI/Sort',
  component: SortIcon
} as ComponentMeta<typeof SortIcon>;

const Template: Story<SvgIconProps> = (args) => <SortIcon {...args} />;

export const Sort = Template.bind({});
Sort.args = {};
