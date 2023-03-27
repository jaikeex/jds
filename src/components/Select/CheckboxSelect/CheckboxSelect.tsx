import React, { useEffect, useState } from 'react';
import type { Selectable, SelectProps } from 'components/Select/types';
import type { GroupBase } from 'react-select';
import { makeId } from 'core/utils';
import { useForwardedRef } from 'core/hooks';
import { CLoadingIndicator, CValueContainer } from 'components/Select/custom-components';
import { useSelectStyles } from 'components/Select/useSelectStyles';
import type SelectType from 'react-select/dist/declarations/src/Select';
import { default as RSelect } from 'react-select';
import CheckboxOption from './CheckboxOption';
import { CInput } from 'components/Select/custom-components/CInput';
import SelectContextProvider from 'components/Select/SelectContextProvider';

export type CheckboxSelectProps = Omit<SelectProps<boolean>, 'isMulti'>;

const CheckboxSelect: React.FC<CheckboxSelectProps> = React.forwardRef<
  SelectType<Selectable, boolean, GroupBase<Selectable>>,
  CheckboxSelectProps
>(
  (
    {
      appearance = 'outlined',
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

    id ??= React.useMemo(() => makeId(5), [id, makeId]);

    const styles = useSelectStyles(
      {
        appearance,
        transformLabel,
        color,
        disabled,
        width,
        placeholder,
        isMulti: true,
        readonly
      },
      style
    );

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

CheckboxSelect.displayName = 'ChgeckboxSelect';
export default CheckboxSelect;
