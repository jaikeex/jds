import type { Column } from 'react-table';
import type { User } from './types';

export const mockColumnsAlign: Column<User>[] = [
  {
    Header: 'Id',
    accessor: 'id'
  },
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'Alias',
    accessor: 'alias'
  },
  {
    Header: 'E-mail',
    accessor: 'email'
  },
  {
    Header: 'Age',
    accessor: 'age',
    textAlign: 'end'
  },
  {
    Header: 'Visits',
    accessor: 'visits',
    textAlign: 'end'
  },
  {
    Header: 'Status',
    accessor: 'status',
    textAlign: 'end'
  }
];
