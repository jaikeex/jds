import { DownArrowIcon, UpArrowIcon } from 'components/icons';
import * as React from 'react';
import type { HeaderGroup } from 'react-table';

export interface ColumnSortControlProps {
  column: HeaderGroup<any>;
}

const ColumnSortControl: React.FC<ColumnSortControlProps> = ({ column }): JSX.Element => (
  <span style={{ display: 'flex' }}>
    {column.isSortedDesc ? (
      <DownArrowIcon size={14} disabled={!column.isSortedDesc} />
    ) : (
      <UpArrowIcon size={14} disabled={!column.isSorted || column.isSortedDesc} />
    )}
  </span>
);

export default ColumnSortControl;
