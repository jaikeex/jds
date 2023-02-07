import { ColorVariants, Size } from '@core/types';
import React, { useEffect, useRef, useState } from 'react';
import './Checkbox.styles.scss';
import classNames from 'classnames';
import { CheckmarkThickIcon } from '@components/icons';
import { makeId } from '@core/utils';
import { Typography } from '@components/Typography';

export interface CheckboxProps {
  size?: Size;
  color?: ColorVariants;
  label?: string;
  labelColor?: ColorVariants;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconChecked?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
  style?: React.CSSProperties;
}

const Checkbox: React.FC<CheckboxProps> = ({
  size = 'medium',
  color = 'default',
  label = '',
  labelColor = 'default',
  disabled = false,
  defaultChecked = false,
  checked = defaultChecked,
  required = false,
  id = makeId(5),
  inputRef,
  onChange,
  icon,
  iconChecked = icon,
  style
}) => {
  const ref = inputRef || useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);

  const classes = classNames(
    'jds-checkbox',
    `jds-checkbox--size--${size}`,
    `jds-checkbox--color--${color}`,
    {
      'jds-checkbox__hidden': icon,
      'jds-checkbox--disabled': disabled
    }
  );

  const labelClasses = classNames(`jds-checkbox__label--color--${labelColor}`);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    onChange && onChange(event);
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <div className="jds-checkbox__container" style={style}>
      <input
        type="checkbox"
        ref={ref}
        className={classes}
        id={id}
        checked={isChecked}
        defaultChecked={defaultChecked}
        onChange={inputChangeHandler}
        disabled={disabled}
        required={required}
      />
      <label className="jds-checkbox__label" htmlFor={id}>
        {icon && !isChecked ? icon : iconChecked}
        <div className="jds-checkbox__mark">
          <CheckmarkThickIcon size="small" />
        </div>
        <Typography variant="label" className={labelClasses}>
          {label}
        </Typography>
      </label>
    </div>
  );
};

export default Checkbox;
