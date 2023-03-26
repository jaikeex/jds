import React, { useEffect, useState } from 'react';
import type { Selectable, SelectProps } from 'components/Select/types';
import type { GroupBase } from 'react-select';
import { default as RAsyncSelect } from 'react-select/async';
import { makeId } from 'core/utils';
import { useForwardedRef } from 'core/hooks';
import { CLoadingIndicator, CValueContainer } from 'components/Select/custom-components';
import { useSelectStyles } from 'components/Select/useSelectStyles';
import type SelectType from 'react-select/dist/declarations/src/Select';
import { CInput } from 'components/Select/custom-components/CInput';
import { COption } from 'components/Select/custom-components/COption';
import SelectContextProvider from 'components/Select/SelectContextProvider';

export interface AsyncSelectProps extends SelectProps<boolean> {
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

    id ??= React.useMemo(() => makeId(5), [id, makeId]);

    const styles = useSelectStyles(
      {
        appearance,
        transformLabel,
        color,
        disabled,
        width,
        placeholder,
        isMulti,
        readonly
      },
      style
    );

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
          onChange={onChange as any}
          placeholder={label}
          styles={styles}
          defaultValue={defaultValue}
          value={value}
          className={className}
          menuIsOpen={menuIsOpen}
        />
      </SelectContextProvider>
    );
  }
);

AsyncSelect.displayName = 'AsyncSelect';
export default AsyncSelect;
