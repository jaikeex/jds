import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import type { Size, ThemeColorVariants, ThemeColorVariantsWithDefault } from 'core/types';
import { CheckmarkThickIcon, RemoveIcon } from 'components/icons';
import { makeId } from 'core/utils';
import { Typography } from 'components/Typography';
import * as Styled from './styles';
import { useForwardedRef } from 'core/hooks';

export interface CheckboxProps extends Omit<React.ComponentProps<'input'>, 'ref' | 'size'> {
  /**
   * If true, the component is in the "checked" state.
   */
  checked?: boolean;
  /**
   * Css class passed to the root element.
   */
  className?: string;
  /**
   * The color of the checkbox. Can be any of the theme colors.
   */
  color?: ThemeColorVariants;
  /**
   * If true, the component will be checked by default.
   */
  defaultChecked?: boolean;
  /**
   * If true, the component will be disabled
   */
  disabled?: boolean;
  /**
   * If provided, the icon will be displayed instead of the default checkbox appearance in its unchecked state.
   */
  icon?: React.ReactNode;
  /**
   * If provided, the icon will be displayed instead of the default checkbox appearance in its checked state.
   */
  iconChecked?: React.ReactNode;
  /**
   * Id of the input element.
   */
  id?: string;
  /**
   * If true, the input will appear in the "indeterminate" state.
   */
  indeterminate?: boolean;
  /**
   * Label for the input.
   */
  label?: string;
  /**
   * Text color of the input label.
   */
  labelColor?: ThemeColorVariantsWithDefault;
  /**
   * Sets the position in which the label will be displayed.
   */
  labelPosition?: 'right' | 'left' | 'top' | 'bottom';
  /**
   * Function called when the input changes.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Size of the checkbox.
   */
  size?: Size;
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
      size = 'medium',
      style = {},
      ...props
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
          {...props}
          {...styleProps}
          type="checkbox"
          ref={inputRef}
          id={id}
          checked={isChecked}
          onChange={inputChangeHandler}
        />
        <Styled.CheckboxLabel disabled={disabled} htmlFor={id}>
          {icon && !isChecked ? icon : iconChecked}
          <Styled.CheckboxMark data-id="checkbox-mark" {...styleProps}>
            {indeterminate ? <RemoveIcon /> : <CheckmarkThickIcon />}
          </Styled.CheckboxMark>
          <Typography variant="label" color={labelColor} disabled={disabled}>
            {label}
          </Typography>
        </Styled.CheckboxLabel>
      </Styled.CheckboxRoot>
    );
  }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
