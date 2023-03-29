import styled from '@emotion/styled';
import React from 'react';
import type { Row } from 'react-table';
import { TableCell } from 'components/Table/TableCell';
import { useTableContext } from 'components/Table/TableContextProvider';
import { useCallback } from 'react';

export interface TableRowProps<D extends object> {
  row: Row<D>;
}

const TableRow = <D extends object>({ row }: TableRowProps<D>): JSX.Element => {
  const { disableRowHighlight, removeRowBorders } = useTableContext();

  const rowClickHandler = useCallback(() => {
    row.toggleRowSelected && row.toggleRowSelected();
  }, [row.toggleRowSelected]);

  return (
    <StyledTableRow
      disableRowHighlight={disableRowHighlight}
      removeRowBorders={removeRowBorders}
      onClick={rowClickHandler}
      row={row}
      {...row.getRowProps()}
    >
      {row.cells.map((cell, index) => (
        <TableCell {...cell.getCellProps()} key={index} textAlign={cell.column.textAlign}>
          {cell.render('Cell')}
        </TableCell>
      ))}
    </StyledTableRow>
  );
};

TableRow.displayName = 'TableRow';
export default TableRow;

const StyledTableRow = styled('tr')<TableRowProps<any> & { disableRowHighlight?: boolean; removeRowBorders?: boolean; }>(
  (props) => ({
    background: 'inherit',
    '&:not(:first-child)': {
      borderTop: props.removeRowBorders
        ? 'none'
        : `1px solid ${props.theme.palette.rgba(props.theme.palette.text.primary, 0.2)}`
    },

    ...(!props.disableRowHighlight && {
      '&:hover': {
        backgroundColor: props.theme.palette.rgba(props.theme.palette.text.primary, 0.1)
      }
    }),

    /* @ts-ignore */
    ...(props.row.toggleRowSelected && {
      cursor: 'pointer'
    })
  })
);
