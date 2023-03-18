import React, { useCallback, useEffect, useState } from 'react';
import type { Selectable, SelectProps } from 'components/Select/types';
import type { ActionMeta, GroupBase, MultiValue, SingleValue } from 'react-select';
import { default as RAsyncSelect } from 'react-select/async';
import { makeId } from 'core/utils';
import { useForwardedRef } from 'core/hooks';
import { CLoadingIndicator, CValueContainer } from 'components/Select/custom-components';
import { useSelectClasses } from 'components/Select/useSelectClasses';
import type SelectType from 'react-select/dist/declarations/src/Select';
import { CInput } from 'components/Select/custom-components/CInput';
import { COption } from 'components/Select/custom-components/COption';
import SelectContextProvider from 'components/Select/SelectContextProvider';

export interface AsyncSelectProps extends SelectProps {
  cacheOptions?: boolean | ReadonlyArray<Selectable | GroupBase<Selectable>>;
  defaultOptions?: boolean | ReadonlyArray<Selectable | GroupBase<Selectable>>;
  loadOptions?: (
    query: string,
    callback: (options: ReadonlyArray<Selectable | GroupBase<Selectable>>) => void
  ) => void | Promise<ReadonlyArray<Selectable | GroupBase<Selectable>>>;
}

const AsyncSelect = React.forwardRef<SelectType<Selectable, boolean, GroupBase<Selectable>>, AsyncSelectProps>(
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
      placeholder = '',
      preventOverflow = false,
      style = {},
      readonly = false,
      transformLabel = false,
      value = defaultValue,
      width = undefined,
      ...props
    },
    ref
  ) => {
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
        isMulti,
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
        <RAsyncSelect
          {...props}
          ref={inputRef}
          components={{
            ValueContainer: CValueContainer,
            Option: COption,
            LoadingIndicator: CLoadingIndicator,
            Input: CInput,
            ...components
          }}
          id={id}
          isDisabled={disabled}
          isMulti={isMulti}
          closeMenuOnSelect={!isMulti}
          hideSelectedOptions={false}
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

AsyncSelect.displayName = 'AsyncSelect';
export default AsyncSelect;
