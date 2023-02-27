import React, { useCallback, useEffect, useState } from 'react';
import type { ColorVariants } from '@core/types';
import './TextField.styles.scss';
import { makeId } from '@core/utils';
import classNames from 'classnames';
import { useForwardedRef, useIsFocused } from '@core/hooks';

export interface TextFieldProps {
  appearance?: 'outlined' | 'filled' | 'subtle';
  autoFocus?: boolean;
  className?: string;
  color?: ColorVariants;
  defaultValue?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  elementAfter?: React.ReactElement;
  elementBefore?: React.ReactElement;
  id?: string;
  label?: string;
  labelPosition?: 'top' | 'bottom';
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  style?: React.CSSProperties;
  value?: string;
  width?: string | number;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      appearance = 'outlined',
      autoFocus = false,
      className = '',
      color = 'default',
      defaultValue = '',
      disabled = false,
      fullWidth = false,
      elementAfter = null,
      elementBefore = null,
      id = makeId(5),
      label = '',
      labelPosition = 'top',
      onBlur = () => {},
      onChange = () => {},
      onFocus = () => {},
      placeholder = '',
      readOnly = false,
      required = false,
      style = {},
      value = defaultValue,
      width = undefined
    },
    ref
  ) => {
    const inputRef = useForwardedRef<HTMLInputElement>(ref);
    const [inputValue, setInputValue] = useState<string>(value);
    const isFocused = useIsFocused(inputRef, autoFocus);

    const classes = classNames(
      'jds-textfield__input',
      `jds-textfield__input--color--${color}--${appearance}`,

      className,
      {
        'jds-textfield__input--fullWidth': fullWidth,
        'jds-textfield__input--disabled': disabled,
        'u-padding-left-3rem': elementBefore,
        'u-padding-right-3rem': elementAfter
      }
    );

    const labelClasses = classNames(
      'jds-textfield__label',
      `jds-textfield__label--position--${labelPosition}`,
      {
        'jds-textfield__label--transformed':
          placeholder || inputValue || isFocused,
        'u-margin-left-3rem': elementBefore,
        'u-margin-right-3rem': elementAfter
      }
    );

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
      <div className="jds-textfield">
        {elementBefore && (
          <div className="jds-textfield__element jds-textfield__element--before">
            {elementBefore}
          </div>
        )}
        {elementAfter && (
          <div className="jds-textfield__element jds-textfield__element--after">
            {elementAfter}
          </div>
        )}
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
        <input
          type="text"
          className={classes}
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
      </div>
    );
  }
);

TextField.displayName = 'TextField';
export default TextField;
