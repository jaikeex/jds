import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import Navigation, { NavigationProps } from './Navigation';

export default {
  title: 'Navigation',
  component: Navigation
} as ComponentMeta<typeof Navigation>;

const Template: Story<NavigationProps> = args => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {};
