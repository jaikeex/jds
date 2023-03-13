import React, { useCallback, useEffect, useState } from 'react';
import type { ThemeColorVariants } from 'core/types';
import { makeId, mergeClasses } from 'core/utils';
import { useForwardedRef, useIsFocused } from 'core/hooks';
import { Typography } from 'components/Typography';
import { useStyles } from './useStyles';
import type { TextFieldClassKey } from './types';
import type { Classes } from 'jss';
import clsx from 'clsx';

export interface TextFieldProps {
  appearance?: 'outlined' | 'filled' | 'subtle';
  autoFocus?: boolean;
  classes?: Classes<TextFieldClassKey>;
  className?: string;
  color?: ThemeColorVariants;
  defaultValue?: string;
  disabled?: boolean;
  elementAfter?: React.ReactElement;
  elementBefore?: React.ReactElement;
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
      classes = {},
      className = '',
      color = 'primary',
      defaultValue = '',
      disabled = false,
      elementAfter = null,
      elementBefore = null,
      id = makeId(5),
      label = '',
      onBlur = () => {},
      onChange = () => {},
      onFocus = () => {},
      placeholder = '',
      readOnly = false,
      required = false,
      style = {},
      transformLabel = true,
      value = defaultValue,
      width = '20rem'
    },
    ref
  ) => {
    const inputRef = useForwardedRef<HTMLInputElement>(ref);
    const [inputValue, setInputValue] = useState<string>(value);
    const isFocused = useIsFocused(inputRef, autoFocus);
    const classNames = classes ? mergeClasses(useStyles({ color, disabled }), classes) : useStyles({ color, disabled });

    const rootClassNames = clsx(classNames.root, classNames[appearance], className);
    const inputClassNames = clsx(classNames.input);
    const labelClassNames = clsx(classNames.label, {
      [classNames.labelTransformed]: placeholder || inputValue || isFocused || elementBefore || !transformLabel
    });

    const styles = () => {
      const styles: React.CSSProperties = { ...style };
      if (width) {
        styles.width = typeof width === 'string' ? width : `${width}px`;
      }

      return styles;
    };

    const inputChangeHandler = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        onChange(event);
      },
      [setInputValue, onChange]
    );

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    return (
      <div className={rootClassNames}>
        {elementBefore && <div className={classNames.element}>{elementBefore}</div>}
        <label htmlFor={id} className={labelClassNames}>
          <Typography variant="label">{label}</Typography>
        </label>
        <input
          type="text"
          className={inputClassNames}
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
          style={styles()}
          value={inputValue}
        />
        {elementAfter && <div className={classNames.element}>{elementAfter}</div>}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
export default TextField;
