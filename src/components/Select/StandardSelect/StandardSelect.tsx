import React, { useCallback, useEffect, useState } from 'react';
import '../Select.styles.scss';
import type { Selectable, SelectProps } from 'components/Select/types';
import type { GroupBase, MultiValue, SingleValue } from 'react-select';
import { makeId } from 'core/utils';
import { useForwardedRef } from 'core/hooks';
import { CValueContainer } from 'components/Select/custom-components';
import { useSelectClasses } from 'components/Select/useSelectClasses';
import type Select from 'react-select/dist/declarations/src/Select';
import { SelectBase } from '../SelectBase';

const StandardSelect = React.forwardRef<Select<Selectable, boolean, GroupBase<Selectable>>, SelectProps>(
  (
    {
      appearance = 'outlined',
      className = '',
      color = 'primary',
      components = {},
      defaultValue = undefined,
      disabled = false,
      id = makeId(5),
      isMulti = false,
      onChange = () => {},
      label = '',
      style = {},
      transformLabel = false,
      value = defaultValue,
      width = undefined,
      ...props
    },
    ref
  ) => {
    const inputRef = useForwardedRef<Select<Selectable, boolean, GroupBase<Selectable>>>(ref);
    const [selectedValue, setSelectedValue] = useState<SingleValue<Selectable> | MultiValue<Selectable> | undefined>(
      value
    );

    const selectionChangeHandler = useCallback(
      (value: SingleValue<Selectable> | MultiValue<Selectable>) => {
        setSelectedValue(value);
        onChange(value);
      },
      [setSelectedValue, onChange]
    );

    useEffect(() => {
      setSelectedValue(value);
    }, [value]);

    return (
      <SelectBase
        appearance={appearance}
        color={color}
        transformLabel={transformLabel}
        className={className}
        ref={inputRef}
        components={{
          ValueContainer: CValueContainer,
          ...components
        }}
        id={id}
        disabled={disabled}
        isMulti={isMulti}
        onChange={selectionChangeHandler}
        label={label}
        style={style}
        value={selectedValue}
        {...props}
      />
    );
  }
);

StandardSelect.displayName = 'StandardSelect';
export default StandardSelect;
