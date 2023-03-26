import type { FilterProps } from 'react-table';

export interface TableColumn {
  label: string;
  value: string;
}

export enum TablePadding {
  'none' = 0,
  'small' = 4,
  'medium' = 6,
  'large' = 8
}

export type ColumnFilterProps<D extends object> = FilterProps<D>;
