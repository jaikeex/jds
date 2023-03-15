import React, { useCallback, useEffect, useState } from 'react';
import type { Selectable, SelectProps } from 'components/Select/types';
import type { GroupBase, MultiValue, SingleValue } from 'react-select';
import { makeId } from 'core/utils';
import { useForwardedRef } from 'core/hooks';
import { CValueContainer } from 'components/Select/custom-components';
import { useSelectClasses } from 'components/Select/useSelectClasses';
import type SelectType from 'react-select/dist/declarations/src/Select';
import { default as RSelect } from 'react-select';

const Select = React.forwardRef<SelectType<Selectable, boolean, GroupBase<Selectable>>, SelectProps>(
  (
    {
      appearance = 'outlined',
      classes = {},
      className = '',
      color = 'primary',
      components = {},
      defaultValue = undefined,
      disabled = false,
      id = undefined,
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
    const inputRef = useForwardedRef<SelectType<Selectable, boolean, GroupBase<Selectable>>>(ref);
    const [selectedValue, setSelectedValue] = useState<SingleValue<Selectable> | MultiValue<Selectable> | undefined>(
      value
    );

    id ??= React.useMemo(() => makeId(5), [id, makeId]);

    const classNames = useSelectClasses({ appearance, transformLabel, className, color, disabled, width }, classes);

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
      <RSelect
        ref={inputRef}
        components={{
          ValueContainer: CValueContainer,
          ...components
        }}
        id={id}
        isDisabled={disabled}
        isMulti={isMulti}
        onChange={selectionChangeHandler}
        placeholder={label}
        styles={style}
        value={selectedValue}
        classNames={classNames}
        {...props}
      />
    );
  }
);

Select.displayName = 'Select';
export default Select;
