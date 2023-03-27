import type { Column } from 'react-table';
import type { User } from './types';

export const mockColumnsBasic: Column<User>[] = [
  {
    'Header': 'Id',
    'accessor': 'id'
  },
  {
    'Header': 'Name',
    'accessor': 'name'
  },
  {
    'Header': 'Alias',
    'accessor': 'alias'
  },
  {
    'Header': 'E-mail',
    'accessor': 'email'
  },
  {
    'Header': 'Age',
    'accessor': 'age'
  },
  {
    'Header': 'Visits',
    'accessor': 'visits'
  },
  {
    'Header': 'Status',
    'accessor': 'status'
  }
];
