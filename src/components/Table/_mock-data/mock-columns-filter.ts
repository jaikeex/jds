import type { Column } from 'react-table';
import type { User } from './types';

export const mockColumnsFilter: Column<User>[] = [
  {
    Header: 'Id',
    accessor: 'id'
  },
  {
    Header: 'Name',
    accessor: 'name',
    filter: 'text'
  },
  {
    Header: 'Alias',
    accessor: 'alias',
    filter: 'text'
  },
  {
    Header: 'E-mail',
    accessor: 'email',
    filter: 'text'
  },
  {
    Header: 'Age',
    accessor: 'age',
    filter: 'between'
  },
  {
    Header: 'Visits',
    accessor: 'visits',
    filter: 'between'
  },
  {
    Header: 'Status',
    accessor: 'status',
    filter: 'exact'
  }
];
