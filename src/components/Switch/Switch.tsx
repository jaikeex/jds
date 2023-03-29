import React from 'react';
import { Typography } from 'components/Typography';
import { useForwardedRef } from 'core/hooks';
import type { Size, ThemeColorVariants, ThemeColorVariantsWithDefault } from 'core/types';
import { makeId } from 'core/utils';
import { useCallback, useEffect, useState } from 'react';
import * as Styled from './styles';

export interface SwitchProps extends Omit<React.ComponentProps<'input'>, 'ref' | 'size'> {
  /**
   * If true, the component is in the "checked" state.
   */
  checked?: boolean;
  /**
   * Css class passed to the root element.
   */
  className?: string;
  /**
   * The color of the component. Can be any of the theme colors.
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
   * Id of the input element.
   */
  id?: string;
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
   * Size of the switch.
   */
  size?: Size;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      defaultChecked = false,
      checked = undefined,
      color = 'primary',
      labelColor = 'default',
      onChange = () => {},
      size = 'medium',
      id = undefined,
      disabled = false,
      className = '',
      style = {},
      label = '',
      labelPosition = 'right',
      ...props
    },
    ref
  ): JSX.Element => {
    const inputRef = useForwardedRef<HTMLInputElement>(ref);
    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);

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

    return (
      <Styled.SwitchLabel
        htmlFor={id}
        disabled={disabled}
        labelPosition={labelPosition}
        className={className}
        style={style}
      >
        <Styled.SwitchInput
          {...props}
          disabled={disabled}
          color={color}
          id={id}
          type="checkbox"
          ref={inputRef}
          checked={isChecked}
          onChange={inputChangeHandler}
        />
        <Styled.SwitchToggle disabled={disabled} size={size} color={color} />
        <Typography variant="label" color={labelColor} disabled={disabled}>
          {label}
        </Typography>
      </Styled.SwitchLabel>
    );
  }
);

Switch.displayName = 'Switch';
export default Switch;
