import React, { useCallback, useEffect, useState } from 'react';
import type { Size, ThemeColorVariants, ThemeColorVariantsWithDefault } from 'core/types';
import { CheckmarkThickIcon } from 'components/icons';
import { makeId } from 'core/utils';
import { Typography } from 'components/Typography';
import * as Styled from './styles';

export interface CheckboxProps {
  checked?: boolean;
  className?: string;
  color?: ThemeColorVariants;
  defaultChecked?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconChecked?: React.ReactNode;
  id?: string;
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
      checked = defaultChecked,
      className = '',
      color = 'primary',
      disabled = false,
      icon = null,
      iconChecked = icon,
      id = undefined,
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
    const [isChecked, setIsChecked] = useState<boolean>(checked);

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
        setIsChecked(event.target.checked);
        onChange(event);
      },
      [setIsChecked, onChange]
    );

    useEffect(() => {
      setIsChecked(checked);
    }, [checked]);

    return (
      <Styled.CheckboxRoot className={className} size={size} labelPosition={labelPosition} style={style}>
        {/* @ts-ignore */}
        <Styled.CheckboxInput
          type="checkbox"
          ref={ref}
          id={id}
          checked={isChecked}
          onChange={inputChangeHandler}
          required={required}
          {...styleProps}
        />
        <Styled.CheckboxLabel disabled={disabled} htmlFor={id}>
          {icon && !isChecked ? icon : iconChecked}
          <Styled.CheckboxMark data-id="checkbox-mark" {...styleProps}>
            <CheckmarkThickIcon />
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
