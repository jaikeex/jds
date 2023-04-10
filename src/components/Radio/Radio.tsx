import React from 'react';
import type { Size, ThemeColorVariants } from 'core/types';
import { makeId } from 'core/utils';
import { Typography } from 'components/Typography';
import { useEffect, useState, useCallback } from 'react';
import { useForwardedRef } from 'core/hooks';
import RadioBackgroundIcon from './icons/RadioBackgroundIcon';
import RadioCenterIcon from './icons/RadioCenterIcon';
import * as Styled from './styles';

export interface RadioProps extends Omit<React.ComponentProps<'input'>, 'ref' | 'size' | 'onChange'> {
  /**
   * If true, the component is in the checked state.
   */
  checked?: boolean;
  /**
   * The color of the radio, can be any of the theme colors.
   */
  color?: ThemeColorVariants;
  /**
   * If true, the radio is checked by default.
   */
  defaultChecked?: boolean;
  /**
   * if true, the component is disabled.
   */
  disabled?: boolean;
  /**
   * The label for the radio button.
   */
  label?: string;
  /**
   * Sets the position of the input label.
   */
  labelPosition?: 'left' | 'right' | 'bottom' | 'top';
  /**
   * Callback fired when the radio state changes.
   * @param event React.ChangeEvent<HTMLInputElement> - the source event of the callback.
   * @param value string - value of the radio
   * @returns void
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  /**
   * The size of the component.
   */
  size?: Size;
  /**
   * The value of the radio button.
   */
  value: string;
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
      size = 'medium',
      style = {},
      value = '',
      ...props
    },
    ref
  ): JSX.Element => {
    const inputRef = useForwardedRef<HTMLInputElement>(ref);
    const [isChecked, setIsChecked] = useState<boolean>(checked);

    id ??= React.useMemo(() => makeId(5), [id, makeId]);

    const radioChangeHandler = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) {
          return;
        }
        setIsChecked(event.target.checked);
        onChange(event, value);
      },
      [setIsChecked, onChange, disabled]
    );

    useEffect(() => {
      setIsChecked(checked);
    }, [checked]);

    return (
      <div className={className}>
        <Styled.RadioInput
          {...props}
          ref={inputRef}
          checked={isChecked}
          value={value}
          onChange={radioChangeHandler}
          type="radio"
          id={id}
          name={name}
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
