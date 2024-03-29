import React, { useEffect, useState } from 'react';
import type { Selectable, SelectProps } from 'components/Select/types';
import type { GroupBase } from 'react-select';
import { makeId } from 'core/utils';
import { useForwardedRef } from 'core/hooks';
import { CLoadingIndicator, CValueContainer } from 'components/Select/custom-components';
import { useSelectStyles } from 'components/Select/useSelectStyles';
import type SelectType from 'react-select/dist/declarations/src/Select';
import { COption } from './custom-components/COption';
import { CInput } from './custom-components/CInput';
import SelectContextProvider from './SelectContextProvider';
import * as Styled from './styles';

const Select = React.forwardRef<SelectType<Selectable, boolean, GroupBase<Selectable>>, SelectProps<boolean>>(
  (
    {
      appearance = 'outlined',
      className = '',
      color = 'primary',
      components = {},
      defaultValue = undefined,
      disabled = false,
      height = undefined,
      id = undefined,
      isMulti = false,
      onChange = () => {},
      label = '',
      placeholder = '',
      style = {},
      readonly = false,
      transformLabel = false,
      value = undefined,
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
        readonly,
        height
      },
      style
    );

    useEffect(() => {
      setMenuIsOpen(readonly ? false : undefined);
    }, []);

    return (
      <SelectContextProvider color={color} readonly={readonly}>
        <Styled.Select
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
          styles={styles}
          isDisabled={disabled}
          isMulti={isMulti}
          closeMenuOnSelect={!isMulti}
          hideSelectedOptions={false}
          onChange={onChange as any}
          placeholder={label}
          value={value}
          className={className}
          defaultValue={defaultValue}
          menuIsOpen={menuIsOpen}
          width={width}
        />
      </SelectContextProvider>
    );
  }
);

Select.displayName = 'Select';
export default Select;
