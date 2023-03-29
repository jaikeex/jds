import styled from '@emotion/styled';
import { TextField } from 'components/TextField';
import React from 'react';
import { useCallback } from 'react';
import type { ColumnFilterProps } from 'components/Table/types';

const ColumnTextFilter = <D extends object>({ column }: ColumnFilterProps<D>): JSX.Element => {
  const { filterValue, setFilter, preFilteredRows } = column;

  const inputChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setFilter(event.target.value || undefined),
    [setFilter]
  );

  return (
    <StyledTextFilter
      placeholder={`Filter ${preFilteredRows.length} rows...`}
      value={filterValue || ''}
      onChange={inputChangeHandler}
    />
  );
};

export default ColumnTextFilter;

const StyledTextFilter = styled(TextField)({
  height: '1.6rem',
  maxWidth: '9rem',
  'input': {
    fontSize: '0.875rem'
  }
});
