import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { NavigationProps } from './Navigation';
import Navigation from './Navigation';

export default {
  title: 'Design System/Navigation',
  component: Navigation
} as ComponentMeta<typeof Navigation>;

const Template: Story<NavigationProps> = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {};
