import React, { useCallback, useEffect, useState } from 'react';
import type { Selectable, SelectProps } from 'components/Select/types';
import type { ActionMeta, GroupBase, MultiValue, SingleValue } from 'react-select';
import { makeId } from 'core/utils';
import { useForwardedRef } from 'core/hooks';
import { CLoadingIndicator, CValueContainer } from 'components/Select/custom-components';
import { useSelectClasses } from 'components/Select/useSelectClasses';
import type SelectType from 'react-select/dist/declarations/src/Select';
import { default as RSelect } from 'react-select';
import CheckboxOption from './CheckboxOption';
import { CInput } from 'components/Select/custom-components/CInput';
import SelectContextProvider from 'components/Select/SelectContextProvider';

export type CheckboxSelectProps = Omit<SelectProps, 'isMulti'>;

const CheckboxSelect: React.FC<CheckboxSelectProps> = React.forwardRef<
  SelectType<Selectable, boolean, GroupBase<Selectable>>,
  CheckboxSelectProps
>(
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
      onChange = () => {},
      label = '',
      placeholder = '',
      style = {},
      preventOverflow = false,
      readonly = false,
      transformLabel = false,
      value = defaultValue,
      width = undefined,
      ...props
    },
    ref
  ): JSX.Element => {
    const inputRef = useForwardedRef<SelectType<Selectable, boolean, GroupBase<Selectable>>>(ref);
    const [menuIsOpen, setMenuIsOpen] = useState<boolean | undefined>(false);
    const [selectedValue, setSelectedValue] = useState<SingleValue<Selectable> | MultiValue<Selectable> | undefined>(
      value
    );

    id ??= React.useMemo(() => makeId(5), [id, makeId]);

    const classNames = useSelectClasses(
      {
        appearance,
        transformLabel,
        className,
        color,
        disabled,
        width,
        placeholder,
        isMulti: true,
        readonly,
        preventOverflow
      },
      classes
    );
    const selectionChangeHandler = useCallback(
      (value: SingleValue<Selectable> | MultiValue<Selectable>, actionMeta: ActionMeta<Selectable>) => {
        setSelectedValue(value);
        onChange(value, actionMeta);
      },
      [setSelectedValue, onChange]
    );

    useEffect(() => {
      setSelectedValue(value);
    }, [value]);

    useEffect(() => {
      setMenuIsOpen(readonly ? false : undefined);
    }, []);

    return (
      <SelectContextProvider color={color} readonly={readonly}>
        <RSelect
          {...props}
          ref={inputRef}
          components={{
            ValueContainer: CValueContainer,
            Option: CheckboxOption,
            LoadingIndicator: CLoadingIndicator,
            Input: CInput,
            ...components
          }}
          id={id}
          isDisabled={disabled}
          isMulti
          hideSelectedOptions={false}
          closeMenuOnSelect={false}
          onChange={selectionChangeHandler}
          placeholder={label}
          styles={style}
          value={selectedValue}
          classNames={classNames}
          menuIsOpen={menuIsOpen}
        />
      </SelectContextProvider>
    );
  }
);

CheckboxSelect.displayName = 'ChgeckboxSelect';
export default CheckboxSelect;
