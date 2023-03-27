import styled from '@emotion/styled';
import type { Selectable } from 'components/Select';
import { Select } from 'components/Select';
import * as React from 'react';
import { useCallback } from 'react';
import type { ColumnFilterProps } from 'components/Table/types';

const ColumnSelectFilter = <D extends object>({ column }: ColumnFilterProps<D>): JSX.Element => {
  const { filterValue, setFilter, preFilteredRows, id } = column;

  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });

    const selectOptions = Array.from(options).map((option: any) => ({ value: option.toString(), label: option }));
    selectOptions.unshift({ label: 'All', value: '' });
    return selectOptions;
  }, [id, preFilteredRows]);

  const SelectChangeHandler = useCallback(
    (value: Selectable) => {
      setFilter(value.value || undefined);
    },
    [setFilter]
  );

  return (
    <StyledSelectFilter
      value={{ value: filterValue, label: filterValue }}
      options={options}
      isSearchable={false}
      height="1.6rem"
      width={'8rem'}
      onChange={SelectChangeHandler}
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
    />
  );
};

export default ColumnSelectFilter;

const StyledSelectFilter = styled(Select)({
  'input': {
    fontSize: '0.875rem'
  }
});
