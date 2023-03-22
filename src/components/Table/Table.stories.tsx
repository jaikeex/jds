import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { TableProps } from './Table';
import Table from './Table';

export default {
  title: 'Table',
  component: Table
} as ComponentMeta<typeof Table>;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {};
