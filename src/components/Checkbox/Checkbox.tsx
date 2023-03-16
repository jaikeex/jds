import React, { useCallback, useEffect, useState } from 'react';
import type { Size, ThemeColorVariants, ThemeColorVariantsWithDefault } from 'core/types';
import { CheckmarkThickIcon } from 'components/icons';
import { makeId, mergeClasses } from 'core/utils';
import { Typography } from 'components/Typography';
import type { CheckboxClassKey } from './types';
import type { Classes } from 'jss';
import { useStyles } from './useStyles';
import clsx from 'clsx';

export interface CheckboxProps {
  checked?: boolean;
  classes?: Classes<CheckboxClassKey>;
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
      classes = {},
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
    const classNames = mergeClasses(useStyles({ color, icon, size, labelPosition, disabled }), classes);

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
      <div className={clsx(classNames.root, disabled && classNames.disabled, className)} style={style}>
        <input
          type="checkbox"
          ref={ref}
          className={clsx(classNames.input, classNames[size])}
          id={id}
          checked={isChecked}
          onChange={inputChangeHandler}
          disabled={disabled}
          required={required}
        />
        <label className={classNames.label} htmlFor={id}>
          {icon && !isChecked ? icon : iconChecked}
          <div className={classNames.mark}>
            <CheckmarkThickIcon />
          </div>
          <Typography variant="label" color={labelColor}>
            {label}
          </Typography>
        </label>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
