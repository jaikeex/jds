import * as React from 'react';
import { useTableContext } from 'components/Table/TableContextProvider';
import styled from '@emotion/styled';
import { TableCell } from 'components/Table/TableCell';
import { UpArrowIcon, DownArrowIcon } from 'components/icons';
import type { Column, UseSortByColumnProps } from 'react-table';

export interface TableHeadProps {
  removeHeadBorder?: boolean;
}

const TableHead: React.FC<TableHeadProps> = ({ removeHeadBorder = false }): JSX.Element => {
  const { headerGroups } = useTableContext();

  return (
    <Header removeHeadBorder={removeHeadBorder}>
      {headerGroups.map((headerGroup, index) => (
        <tr {...headerGroup.getHeaderGroupProps()} key={index}>
          {headerGroup.headers.map((column, index) => (
            <TableCell {...column.getHeaderProps()} key={index} component="th" style={{ verticalAlign: 'text-top' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                }}
              >
                <StyledTh
                  {...column.getSortByToggleProps()}
                  canSort={column.canSort}
                  isSorted={column.isSorted}
                  column={column}
                >
                  {column.render('Header')}
                  {column.canSort ? (
                    <span style={{ display: 'flex' }}>
                      {column.isSortedDesc ? (
                        <DownArrowIcon size={14} disabled={!column.isSortedDesc} />
                      ) : (
                        <UpArrowIcon size={14} disabled={!column.isSorted || column.isSortedDesc} />
                      )}
                    </span>
                  ) : (
                    ''
                  )}
                </StyledTh>
                <div style={{ marginTop: '0.5rem' }}>{column.canFilter ? column.render('Filter') : null}</div>
              </div>
            </TableCell>
          ))}
        </tr>
      ))}
    </Header>
  );
};

export default TableHead;

const Header = styled('thead')<TableHeadProps>((props) => ({
  top: 0,
  left: 0,
  width: '100%',
  height: '2.5rem',
  padding: '1rem',
  borderBottom: props.removeHeadBorder ? 'none' : `1px solid ${props.theme.palette.divider}`
}));

const StyledTh = styled('div')<TableHeadProps & Partial<UseSortByColumnProps<any>> & { column: Column; }>((props) => ({
  cursor: props.canSort ? 'pointer' : 'default',
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
  justifyContent: props.column.textAlign,
  flexDirection: props.column.textAlign === 'end' ? 'row-reverse' : 'row',

  '& > span': {
    opacity: props.isSorted ? 1 : 0,
    transition: 'all 0.15s'
  },

  ...(props.canSort && {
    '&:hover': {
      '& > span': {
        opacity: 1
      }
    }
  })
}));
