import React from 'react';
import type { Story, ComponentMeta } from '@storybook/react';
import type { TableProps } from './Table';
import Table from './Table';
import { makeData, mockColumnsAlign, mockColumnsBasic, mockColumnsFilter, mockColumnsSortable } from './_mock-data';
import type { User } from './_mock-data/types';

export default {
  title: 'Design System/Table',
  component: Table
} as ComponentMeta<typeof Table>;

const Template: Story<TableProps<User>> = (args) => (
  <div style={{}}>
    <Table {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  columns: mockColumnsBasic,
  data: makeData(15)
};

export const SortableColumns = Template.bind({});
SortableColumns.args = {
  columns: mockColumnsSortable,
  data: makeData(15)
};

export const AlignColumns = Template.bind({});
AlignColumns.args = {
  columns: mockColumnsAlign,
  data: makeData(15)
};

export const WithoutDividers = Template.bind({});
WithoutDividers.args = {
  columns: mockColumnsBasic,
  data: makeData(15),
  removeHeadBorder: true,
  removeRowBorders: true
};

export const SelectableRows = Template.bind({});
SelectableRows.args = {
  columns: mockColumnsBasic,
  data: makeData(15),
  selectableRows: true
};

export const Pagination = Template.bind({});
Pagination.args = {
  columns: mockColumnsSortable,
  data: makeData(200),
  paginated: true
};

export const FilterColumns = Template.bind({});
FilterColumns.args = {
  columns: mockColumnsFilter,
  data: makeData(200)
};

export const Compact = Template.bind({});
Compact.args = {
  columns: mockColumnsBasic,
  data: makeData(15),
  padding: 'small'
};
