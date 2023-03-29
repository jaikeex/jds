import styled from '@emotion/styled';
import { TextField } from 'components/TextField';
import { Typography } from 'components/Typography';
import React from 'react';
import { useState, useCallback } from 'react';
import type { ColumnFilterProps } from 'components/Table/types';

const ColumnRangeFilter = <D extends object>({ column }: ColumnFilterProps<D>): JSX.Element => {
  const { filterValue = [], setFilter, preFilteredRows, id } = column;

  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach((row) => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);

  const [minValue, setMinValue] = useState<string>(filterValue[0]);
  const [maxValue, setMaxValue] = useState<string>(filterValue[1]);

  const minChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (parseInt(value)) {
        setMinValue(value);
        setFilter((old = []) => [value ? parseInt(value, 10) : undefined, old[1]]);
      } else {
        setMinValue('');
        setFilter('');
      }
    },
    [setMinValue, setFilter]
  );

  const maxChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (parseInt(value)) {
        setMaxValue(value);
        setFilter((old = []) => [old[0], value ? parseInt(value, 10) : undefined]);
      } else {
        setMaxValue('');
        setFilter('');
      }
    },
    [setMaxValue, setFilter]
  );

  return (
    <StyledWrapper>
      <StyledRangeFilter placeholder={`${min}`} value={minValue || ''} onChange={minChangeHandler} />
      <Typography variant="body2">to</Typography>
      <StyledRangeFilter placeholder={`${max}`} value={maxValue || ''} onChange={maxChangeHandler} />
    </StyledWrapper>
  );
};

export default ColumnRangeFilter;

const StyledWrapper = styled('div')({
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center'
});

const StyledRangeFilter = styled(TextField)({
  height: '1.6rem',
  width: '4rem',
  'input': {
    fontSize: '0.875rem'
  }
});
