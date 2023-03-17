import * as React from 'react';
import type { ThemeColorVariants } from 'core/types';
import { makeId, mergeClasses } from 'core/utils';
import type { Classes } from 'jss';
import type { RadioClassKey } from './types';
import { useStyles } from './useStyles';
import { Typography } from 'components/Typography';
import clsx from 'clsx';
import { useEffect, useState, useCallback } from 'react';
import { useForwardedRef } from 'core/hooks';
import RadioBackgroundIcon from './icons/RadioBackgroundIcon';
import RadioCenterIcon from './icons/RadioCenterIcon';

export interface RadioProps {
  checked?: boolean;
  classes?: Classes<RadioClassKey>;
  className?: string;
  color?: ThemeColorVariants;
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
  label?: string;
  labelPosition?: 'left' | 'right' | 'bottom' | 'top';
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  required?: boolean;
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  value?: string;
}

const Radio: React.FC<RadioProps> = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      defaultChecked = false,
      checked = defaultChecked,
      classes = {},
      className = '',
      color = 'primary',
      disabled = false,
      id = undefined,
      label = '',
      labelPosition = 'right',
      name = '',
      onChange = () => {},
      required = false,
      size = 'medium',
      style = {},
      value = ''
    },
    ref
  ): JSX.Element => {
    const inputRef = useForwardedRef<HTMLInputElement>(ref);
    const [isChecked, setIsChecked] = useState<boolean>(checked);
    const classNames = mergeClasses(useStyles({ labelPosition, color }), classes);

    id ??= React.useMemo(() => makeId(5), [id, makeId]);

    const radioChangeHandler = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
        onChange(event, value);
      },
      [setIsChecked, onChange]
    );

    useEffect(() => {
      setIsChecked(checked);
    }, [checked]);

    return (
      <div className={classNames.root}>
        <input
          ref={inputRef}
          checked={isChecked}
          value={value}
          onChange={radioChangeHandler}
          className={classNames.input}
          type="radio"
          id={id}
          name={name}
          required={required}
          disabled={disabled}
        />
        <label
          className={clsx(classNames.label, classNames[size], disabled && classNames.disabled, className)}
          style={style}
          htmlFor={id}
        >
          <div className={classNames.button}>
            <RadioBackgroundIcon id="radio-background" color={color} />
            <RadioCenterIcon id="radio-center" color={color} visible={isChecked} />
          </div>
          <Typography variant="label">{label}</Typography>
        </label>
      </div>
    );
  }
);

Radio.displayName = 'Radio';
export default Radio;
