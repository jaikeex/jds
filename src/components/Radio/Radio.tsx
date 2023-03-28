import * as React from 'react';
import type { Size, ThemeColorVariants } from 'core/types';
import { makeId } from 'core/utils';
import { Typography } from 'components/Typography';
import { useEffect, useState, useCallback } from 'react';
import { useForwardedRef } from 'core/hooks';
import RadioBackgroundIcon from './icons/RadioBackgroundIcon';
import RadioCenterIcon from './icons/RadioCenterIcon';
import * as Styled from './styles';

export interface RadioProps {
  checked?: boolean;
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
  size?: Size;
  style?: React.CSSProperties;
  value?: string;
}

const Radio: React.FC<RadioProps> = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      defaultChecked = false,
      checked = defaultChecked,
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
      <div className={className}>
        <Styled.RadioInput
          ref={inputRef}
          checked={isChecked}
          value={value}
          onChange={radioChangeHandler}
          type="radio"
          id={id}
          name={name}
          required={required}
          disabled={disabled}
        />
        <Styled.RadioLabel style={style} htmlFor={id} labelPosition={labelPosition} disabled={disabled}>
          <Styled.RadioButton size={size}>
            <RadioBackgroundIcon data-icon-id="radio-background" color={color} />
            <RadioCenterIcon data-icon-id="radio-center" color={color} visible={isChecked} />
          </Styled.RadioButton>
          <Typography variant="label">{label}</Typography>
        </Styled.RadioLabel>
      </div>
    );
  }
);

Radio.displayName = 'Radio';
export default Radio;
