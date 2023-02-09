import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import List, { ListProps } from './List';

export default {
  title: 'List',
  component: List
} as ComponentMeta<typeof List>;

const Template: Story<ListProps> = args => <List {...args} />;

export const Default = Template.bind({});
Default.args = {};
