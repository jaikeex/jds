import React from 'react';
import { useContext } from 'react';
import type { TableInstance } from 'react-table';
import { TablePadding } from './types';

export interface TableContextProps extends TableInstance {
  padding?: 0 | 4 | 6 | 8;
  disableRowHighlight?: boolean;
  removeRowBorders?: boolean;
}

export interface TableContextProviderProps extends React.PropsWithChildren {
  padding?: 'none' | 'small' | 'medium' | 'large';
  disableRowHighlight?: boolean;
  tableInstance: TableInstance<any>;
  removeRowBorders: boolean;
}

export const TableContext = React.createContext<TableContextProps>({} as TableContextProps);

export const useTableContext = () => useContext(TableContext);

export const TableContextProvider: React.FC<TableContextProviderProps> = ({
  children = null,
  padding = 'medium',
  disableRowHighlight = false,
  removeRowBorders = false,
  tableInstance
}): JSX.Element => {
  const paddingAmount = TablePadding[padding];

  const defaultValue = React.useMemo(
    () => ({
      ...tableInstance,
      padding: paddingAmount,
      disableRowHighlight,
      removeRowBorders
    }),
    [
      tableInstance.rows,
      tableInstance.data,
      tableInstance.page,
      tableInstance.selectedFlatRows,
      tableInstance.columns,
      tableInstance.pageCount,
      paddingAmount,
      disableRowHighlight,
      removeRowBorders
    ]
  );

  return <TableContext.Provider value={defaultValue}>{children}</TableContext.Provider>;
};
