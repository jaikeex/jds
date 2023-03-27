import styled from '@emotion/styled';
import type { PaginationProps } from 'components/Pagination';
import { Pagination } from 'components/Pagination';
import type { Selectable } from 'components/Select';
import { Select } from 'components/Select';
import { Typography } from 'components/Typography';
import * as React from 'react';
import type { UsePaginationState } from 'react-table';
import { useTableContext } from 'components/Table/TableContextProvider';
import { useCallback } from 'react';

export type TablePaginationProps = PaginationProps;

const TablePagination = <D extends object>(props: TablePaginationProps): JSX.Element => {
  const { state, pageCount, setPageSize, gotoPage } = useTableContext();
  const { pageIndex } = state as UsePaginationState<D>;

  const pageSizeChangeHandler = useCallback((value: Selectable) => setPageSize(parseInt(value?.value)), [setPageSize]);

  const pageNumberChangeHandler = useCallback((page: number) => gotoPage(page - 1), [gotoPage]);

  return (
    <StyledTablePagination>
      <StyledPagesOptions>
        <Typography variant="body2">
          Page {<span style={{ fontWeight: 'bold' }}>{pageIndex + 1}</span>} of
          {<span style={{ fontWeight: 'bold' }}> {pageCount}</span>}
        </Typography>
        <Typography variant="body2">|</Typography>
        <Typography variant="body2" style={{ marginRight: '0.5rem' }}>
          Items per page:
        </Typography>
        <Select
          appearance="subtle"
          options={[10, 20, 30, 40, 50, 100].map((size) => ({ label: size, value: size.toString() }))}
          defaultValue={{ label: 10, value: '10' }}
          width="max-content"
          height="1.8rem"
          style={{
            dropdownIndicator: () => ({
              padding: 0
            }),
            indicatorsContainer: () => ({
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              '& svg': {
                height: '1rem',
                width: '1rem'
              }
            }),
            menu: () => ({
              minWidth: '8rem',
              width: 'max-content'
            })
          }}
          onChange={pageSizeChangeHandler}
        />
      </StyledPagesOptions>
      {pageCount > 1 && (
        <Pagination {...props} page={pageIndex + 1} totalPages={pageCount} onChange={pageNumberChangeHandler} />
      )}
    </StyledTablePagination>
  );
};

TablePagination.displayName = 'TablePagination';
export default TablePagination;

const StyledTablePagination = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '2rem auto',
  gap: '0.5rem',
  width: '100%'
});

const StyledPagesOptions = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  width: 'max-content'
});
