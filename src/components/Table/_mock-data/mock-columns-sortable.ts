import type { Column } from 'react-table';
import type { User } from './types';

export const mockColumnsSortable: Column<User>[] = [
  {
    Header: 'Id',
    accessor: 'id',
    sortable: true
  },
  {
    Header: 'Name',
    accessor: 'name',
    sortable: true
  },
  {
    Header: 'Alias',
    accessor: 'alias',
    sortable: true
  },
  {
    Header: 'E-mail',
    accessor: 'email',
    sortable: true
  },
  {
    Header: 'Age',
    accessor: 'age',
    sortable: true
  },
  {
    Header: 'Visits',
    accessor: 'visits',
    sortable: true
  },
  {
    Header: 'Status',
    accessor: 'status',
    sortable: true
  }
];
