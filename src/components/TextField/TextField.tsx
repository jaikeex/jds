import React, { useCallback, useEffect, useState } from 'react';
import type { ThemeColorVariants } from 'core/types';
import { makeId } from 'core/utils';
import { useForwardedRef, useIsFocused } from 'core/hooks';
import { Typography } from 'components/Typography';
import * as Styled from './styles';

export interface TextFieldProps extends Omit<React.ComponentProps<'input'>, 'ref'> {
  appearance?: 'outlined' | 'filled' | 'subtle';
  autoFocus?: boolean;
  className?: string;
  color?: ThemeColorVariants;
  defaultValue?: string;
  disabled?: boolean;
  elementAfter?: React.ReactElement | null;
  elementBefore?: React.ReactElement | null;
  id?: string;
  label?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  style?: React.CSSProperties;
  transformLabel?: boolean;
  value?: string;
  width?: string | number;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      appearance = 'outlined',
      autoFocus = false,
      className = '',
      color = 'primary',
      defaultValue = '',
      disabled = false,
      elementAfter = null,
      elementBefore = null,
      id = undefined,
      label = '',
      onBlur = () => {},
      onChange = () => {},
      onFocus = () => {},
      placeholder = '',
      readOnly = false,
      required = false,
      style = {},
      transformLabel = true,
      value = undefined,
      width = undefined,
      ...props
    },
    ref
  ) => {
    const inputRef = useForwardedRef<HTMLInputElement>(ref);

    const [inputValue, setInputValue] = useState<string>(defaultValue);
    const isFocused = useIsFocused(inputRef, autoFocus);

    const styleProps = {
      color,
      disabled,
      width,
      appearance,
      inputValue,
      isFocused,
      transformLabel,
      elementBefore
    };

    id ??= React.useMemo(() => makeId(5), [id, makeId]);

    const inputChangeHandler = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (value === undefined) {
          setInputValue(event.currentTarget.value);
        }
        onChange(event);
      },
      [setInputValue, onChange]
    );

    useEffect(() => {
      if (value !== undefined) {
        setInputValue(value);
      }
    }, [value]);

    return (
      <Styled.TextFieldRoot className={className} {...styleProps} style={style}>
        {elementBefore && <Styled.TextFieldDecorator {...styleProps}>{elementBefore}</Styled.TextFieldDecorator>}
        <Styled.Label {...styleProps} htmlFor={id}>
          <Typography variant="label">{label}</Typography>
        </Styled.Label>
        <Styled.TextFieldInput
          {...props}
          {...styleProps}
          data-testid="jds-textfield"
          type="text"
          autoFocus={autoFocus}
          disabled={disabled}
          id={id}
          ref={inputRef}
          onBlur={onBlur}
          onChange={inputChangeHandler}
          onFocus={onFocus}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          value={inputValue}
        />
        {elementAfter && <Styled.TextFieldDecorator {...styleProps}>{elementAfter}</Styled.TextFieldDecorator>}
      </Styled.TextFieldRoot>
    );
  }
);

TextField.displayName = 'TextField';
export default TextField;
