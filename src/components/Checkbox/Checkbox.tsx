import React, { useCallback, useEffect, useState } from 'react';
import type { Size, ThemeColorVariants, ThemeColorVariantsWithDefault } from 'core/types';
import { CheckmarkThickIcon, RemoveIcon } from 'components/icons';
import { makeId } from 'core/utils';
import { Typography } from 'components/Typography';
import * as Styled from './styles';
import { useForwardedRef } from 'core/hooks';

export interface CheckboxProps {
  checked?: boolean;
  className?: string;
  color?: ThemeColorVariants;
  defaultChecked?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconChecked?: React.ReactNode;
  id?: string;
  indeterminate?: boolean;
  label?: string;
  labelColor?: ThemeColorVariantsWithDefault;
  labelPosition?: 'right' | 'left' | 'top' | 'bottom';
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  size?: Size;
  style?: React.CSSProperties;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      defaultChecked = false,
      checked = undefined,
      className = '',
      color = 'primary',
      disabled = false,
      icon = null,
      iconChecked = icon,
      id = undefined,
      indeterminate = false,
      label = '',
      labelColor = 'default',
      labelPosition = 'right',
      onChange = () => {},
      required = false,
      size = 'medium',
      style = {}
    },
    ref
  ) => {
    const inputRef = useForwardedRef<HTMLInputElement>(ref);
    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);

    const styleProps = {
      color,
      icon,
      size,
      disabled,
      labelPosition
    };

    id ??= React.useMemo(() => makeId(5), [id, makeId]);

    const inputChangeHandler = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (checked === undefined) {
          setIsChecked(event.target.checked);
        }
        onChange(event);
      },
      [setIsChecked, onChange]
    );

    useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(checked);
      }
    }, [checked]);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [inputRef, indeterminate]);

    return (
      <Styled.CheckboxRoot className={className} size={size} labelPosition={labelPosition} style={style}>
        {/* @ts-ignore */}
        <Styled.CheckboxInput
          type="checkbox"
          ref={inputRef}
          id={id}
          checked={isChecked}
          onChange={inputChangeHandler}
          required={required}
          {...styleProps}
        />
        <Styled.CheckboxLabel disabled={disabled} htmlFor={id}>
          {icon && !isChecked ? icon : iconChecked}
          <Styled.CheckboxMark data-id="checkbox-mark" {...styleProps}>
            {indeterminate ? <RemoveIcon /> : <CheckmarkThickIcon />}
          </Styled.CheckboxMark>
          <Typography variant="label" color={labelColor}>
            {label}
          </Typography>
        </Styled.CheckboxLabel>
      </Styled.CheckboxRoot>
    );
  }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
