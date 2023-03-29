import React from 'react';
import type { Column, DefaultFilterTypes, PluginHook, CellProps, HeaderProps } from 'react-table';
import { useTable, useSortBy, usePagination, useFilters, useRowSelect } from 'react-table';
import { TableContextProvider } from './TableContextProvider';
import { TableBody } from './TableBody';
import { TableHead } from './TableHead';
import styled from '@emotion/styled';
import { ColumnTextFilter } from './ColumnTextFilter';
import { ColumnRangeFilter } from './ColumnRangeFilter';
import { TablePagination } from './TablePagination';
import { Checkbox } from 'components/Checkbox';
import { useEffect } from 'react';
import { ColumnSelectFilter } from './ColumnSelectFilter';
import type { ColumnFilterProps } from './types';
import type { PaginationProps } from 'components/Pagination';

export interface TableProps<D extends object> {
  className?: string;
  columns?: readonly Column<D>[];
  data?: D[];
  removeRowBorders?: boolean;
  removeHeadBorder?: boolean;
  padding?: 'none' | 'small' | 'medium' | 'large';
  paginated?: boolean;
  paginationProps?: PaginationProps;
  disableRowHighlight?: boolean;
  selectableRows?: boolean;
  disableSelectOnRowClick?: boolean;
  onSelectionChange?: (selectedRows: D[]) => void;
}

const Table = <D extends object>({
  className = '',
  columns = [],
  removeHeadBorder = false,
  removeRowBorders = false,
  data = [],
  padding = 'medium',
  paginated = false,
  disableRowHighlight = false,
  paginationProps = {},
  selectableRows = false,
  onSelectionChange = () => {}
}: TableProps<D>): JSX.Element => {
  const columnFilterComponentsMap: Partial<Record<DefaultFilterTypes, React.FC<ColumnFilterProps<D>>>> = {
    text: ColumnTextFilter,
    between: ColumnRangeFilter,
    exact: ColumnSelectFilter
  };

  const columnsWithOptions: readonly Column<D>[] = React.useMemo(
    () =>
      columns.map((col) => {
        if (!col.sortable) {
          col.disableSortBy = true;
        }

        if (!col.filter) {
          col.disableFilters = true;
        } else {
          col.Filter = columnFilterComponentsMap[col.filter];
        }

        return col;
      }),
    [columns]
  );

  const useTableArgs: Array<PluginHook<D>> = [];

  if (paginated) {
    useTableArgs.push(usePagination);
  }

  if (selectableRows) {
    useTableArgs.push(useRowSelect, (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }: HeaderProps<D>) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }: CellProps<D, any>) => <Checkbox {...row.getToggleRowSelectedProps()} />
        },
        ...columns
      ]);
    });
  }

  const tableInstance = useTable<D>(
    {
      columns: columnsWithOptions,
      data: data,
      disableSortRemove: true
    },
    useFilters,
    useSortBy,
    ...useTableArgs
  );

  const { getTableProps, selectedFlatRows } = tableInstance;

  useEffect(() => {
    if (selectableRows) {
      onSelectionChange(selectedFlatRows.map((row) => row.original));
    }
  }, [selectedFlatRows]);

  return (
    <TableContextProvider
      tableInstance={tableInstance}
      padding={padding}
      disableRowHighlight={disableRowHighlight}
      removeRowBorders={removeRowBorders}
    >
      <StyledTable className={className} {...getTableProps()}>
        <TableHead removeHeadBorder={removeHeadBorder} />
        <TableBody />
      </StyledTable>
      {paginated && <TablePagination {...paginationProps} />}
    </TableContextProvider>
  );
};

Table.displayName = 'Table';
export default Table;

const StyledTable = styled('table')<TableProps<Record<string, never>>>((props) => ({
  width: '100%',
  backgroundColor: props.theme.palette.background.default,
  position: 'relative',
  overflow: 'auto',
  borderCollapse: 'collapse'
}));
