import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { NavigationItemProps } from './NavigationItem';
import NavigationItem from './NavigationItem';

export default {
  title: 'Design System/NavigationItem',
  component: NavigationItem
} as ComponentMeta<typeof NavigationItem>;

const Template: Story<NavigationItemProps> = (args) => <NavigationItem {...args} />;

export const Default = Template.bind({});
Default.args = {};
