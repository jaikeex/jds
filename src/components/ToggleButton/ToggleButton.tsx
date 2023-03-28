import * as React from 'react';
import type { Size, ThemeColorVariantsWithDefault } from 'core/types';
import { Typography } from 'components/Typography';
import { useForwardedRef, useRippleEffect } from 'core/hooks';
import { useCallback, useEffect, useState } from 'react';
import * as Styled from './styles';
import type { ButtonAppearance } from 'components/Button';

export interface ToggleButtonProps extends React.PropsWithChildren {
  appearance?: ButtonAppearance;
  className?: string;
  color?: ThemeColorVariantsWithDefault;
  defaultSelected?: boolean;
  disabled?: boolean;
  disableRippleEffect?: boolean;
  disableUpperCase?: boolean;
  onChange?: (selected: boolean, value: string) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>, value: string) => void;
  removeBorder?: boolean;
  selected?: boolean;
  size?: Size;
  style?: React.CSSProperties;
  value?: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
  (
    {
      appearance = 'outlined',
      children = null,
      className = '',
      color = 'default',
      defaultSelected = undefined,
      disabled = false,
      disableRippleEffect = false,
      disableUpperCase = false,
      onChange = () => {},
      onClick = () => {},
      removeBorder = false,
      selected = undefined,
      size = 'medium',
      style = {},
      value = ''
    },
    ref
  ): JSX.Element => {
    const buttonRef = useForwardedRef<HTMLButtonElement>(ref);
    const createRippleEffect = useRippleEffect(buttonRef, { color: color, animationTime: 400 });
    const [active, setActive] = useState<boolean>(defaultSelected || false);

    const styleProps = {
      color,
      removeBorder,
      active,
      size,
      disabled
    };

    const buttonClickHandler = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        disableRippleEffect || disabled || createRippleEffect(event);
        selected === undefined && setActive((prevState) => !prevState);
        onClick(event, value);
      },
      [setActive, disableRippleEffect, createRippleEffect, onClick]
    );

    const getChildren = useCallback(() => {
      if (typeof children === 'string') {
        return (
          <Typography variant="button" upperCase={disableUpperCase ? false : true}>
            {children}
          </Typography>
        );
      } else {
        return children;
      }
    }, [children, disableUpperCase]);

    useEffect(() => {
      onChange(active, value);
    }, [active]);

    useEffect(() => {
      if (selected !== undefined) {
        setActive(selected);
      }
    }, [selected]);

    return (
      <Styled.ToggleButtonRoot
        {...styleProps}
        appearance={appearance}
        ref={buttonRef}
        className={className}
        style={style}
        onClick={buttonClickHandler}
        disabled={disabled}
        value={value}
      >
        {getChildren()}
      </Styled.ToggleButtonRoot>
    );
  }
);

ToggleButton.displayName = 'ToggleButton';
export default ToggleButton;
