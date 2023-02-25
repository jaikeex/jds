import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import MenuList, { MenuListProps } from './MenuList';

export default {
  title: 'Design System/MenuList',
  component: MenuList
} as ComponentMeta<typeof MenuList>;

const Template: Story<MenuListProps> = args => <MenuList {...args} />;

export const Default = Template.bind({});
Default.args = {};
