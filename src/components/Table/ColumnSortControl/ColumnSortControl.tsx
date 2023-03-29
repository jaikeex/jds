import { DownArrowIcon, UpArrowIcon } from 'components/icons';
import React from 'react';
import type { HeaderGroup } from 'react-table';

export interface ColumnSortControlProps {
  column: HeaderGroup<any>;
}

const ColumnSortControl: React.FC<ColumnSortControlProps> = ({ column }): JSX.Element => (
  <span style={{ display: 'flex' }}>
    {column.isSortedDesc ? (
      <DownArrowIcon size={14} disabled={!column.isSortedDesc} color={'primary'} />
    ) : (
      <UpArrowIcon size={14} disabled={!column.isSorted || column.isSortedDesc} color={'primary'} />
    )}
  </span>
);

export default ColumnSortControl;
