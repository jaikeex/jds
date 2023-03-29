import styled from '@emotion/styled';
import { Typography } from 'components/Typography';
import React from 'react';
import { useTableContext } from 'components/Table/TableContextProvider';
export interface TableCellOwnProps<E extends React.ElementType = 'td'> extends React.PropsWithChildren {
  textAlign?: 'center' | 'start' | 'end';
  component?: E;
  padding?: 0 | 4 | 6 | 8;
}

export type TableCellProps<E extends React.ElementType> = TableCellOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TableCellOwnProps<E>>;

const TableCell = <E extends React.ElementType = 'td'>({
  textAlign = 'start',
  children = null,
  component,
  ...props
}: TableCellProps<E>): JSX.Element => {
  const { padding } = useTableContext();

  const Component = component || 'td';

  return (
    <StyledTd as={Component} padding={padding} {...props}>
      <Typography variant={'body2'} bold={component === 'th'} textAlign={textAlign} style={{ height: '100%' }}>
        {children}
      </Typography>
    </StyledTd>
  );
};

export default TableCell;

const StyledTd = styled('td')<TableCellOwnProps>((props) => ({
  textAlign: props.textAlign,
  /* @ts-ignore */
  padding: `${props.theme.spacing[props.padding || 4]} ${props.theme.spacing[props.padding * 2 || 4]}`,
  color: props.theme.palette.text.primary
}));
