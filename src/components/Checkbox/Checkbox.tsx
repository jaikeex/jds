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
  size?: Size;
  color?: ThemeColorVariants;
  className?: string;
  classes?: Classes<CheckboxClassKey>;
  label?: string;
  labelColor?: ThemeColorVariantsWithDefault;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconChecked?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
  style?: React.CSSProperties;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = 'medium',
      color = 'primary',
      className = '',
      classes = {},
      label = '',
      labelColor = 'default',
      disabled = false,
      defaultChecked = false,
      checked = defaultChecked,
      required = false,
      id = undefined,
      onChange = () => {},
      icon = null,
      iconChecked = icon,
      style = {}
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked);
    const classNames = mergeClasses(useStyles({ color, icon, size }), classes);

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
      <div className={clsx(classNames.root, className)} style={style}>
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
        <label className={clsx(classNames.label, disabled && classNames.disabled)} htmlFor={id}>
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
