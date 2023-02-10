import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import Menu, { MenuProps } from './Menu';

export default {
  title: 'Design System/Menu',
  component: Menu
} as ComponentMeta<typeof Menu>;

const Template: Story<MenuProps> = args => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {};
