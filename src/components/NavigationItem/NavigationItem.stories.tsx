import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import NavigationItem, { NavigationItemProps } from './NavigationItem';

export default {
  title: 'NavigationItem',
  component: NavigationItem
} as ComponentMeta<typeof NavigationItem>;

const Template: Story<NavigationItemProps> = args => (
  <NavigationItem {...args} />
);

export const Default = Template.bind({});
Default.args = {};
