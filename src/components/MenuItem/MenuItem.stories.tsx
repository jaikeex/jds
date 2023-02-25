import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import MenuItem, { MenuItemProps } from './MenuItem';

export default {
  title: 'MenuItem',
  component: MenuItem
} as ComponentMeta<typeof MenuItem>;

const Template: Story<MenuItemProps> = args => <MenuItem {...args} />;

export const Default = Template.bind({});
Default.args = {};
