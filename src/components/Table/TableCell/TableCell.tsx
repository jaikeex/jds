import * as React from 'react';
export interface TableCellOwnProps<E extends React.ElementType> extends React.PropsWithChildren {
  align?: 'center' | 'inherit' | 'left' | 'right';
  component?: E;
  padding?: 'none' | 'small' | 'medium' | 'large';
  size?: 'small' | 'medium' | 'large';
}

export type TableCellProps<E extends React.ElementType> = TableCellOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TableCellOwnProps<E>>;

const TableCell = <E extends React.ElementType = 'td'>({
  align = 'inherit',
  children = null,
  component,
  padding = undefined,
  size = undefined
}: TableCellProps<E>): JSX.Element => {
  const Component = component || 'td';

  return <Component>{children}</Component>;
};

export default TableCell;
