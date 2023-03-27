import React, { useCallback } from 'react';
import { useForwardedRef, useRippleEffect } from 'core/hooks';
import type { ButtonAppearance } from './types';
import type { Size, ThemeColorVariants } from 'core/types';
import { Typography } from 'components/Typography';
import type { SvgColoredIconProps, SvgIconProps } from 'components/icons';
import * as Styled from './styles';

export interface ButtonProps extends React.PropsWithChildren, Omit<React.ComponentProps<'button'>, 'ref'> {
  /**
   * The appearance of the button.
   */
  appearance?: ButtonAppearance;
  /**
   * The color of the button. Can be any of the theme colors.
   */
  color?: ThemeColorVariants;
  /**
   * If true, no ripple effect will appear upon clicking the button.
   */
  disableRippleEffect?: boolean;
  /**
   * If true, the text of the button will not be forced to uppercase.
   */
  disableUpperCase?: boolean;
  /**
   * Element placed before the children
   */
  iconLeft?: React.ReactElement<SvgIconProps | SvgColoredIconProps>;
  /**
   * Ëlement placed after the children
   */
  iconRight?: React.ReactElement<SvgIconProps | SvgColoredIconProps>;
  /**
   * Function called when clicking the button.
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Size of the button.
   */
  size?: Size;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'medium',
      disabled = false,
      disableRippleEffect = false,
      disableUpperCase = false,
      iconLeft = null,
      iconRight = null,
      className = '',
      appearance = 'filled',
      color = 'primary',
      onClick = () => {},
      children = null,
      ...props
    },
    ref
  ) => {
    const buttonRef = useForwardedRef<HTMLButtonElement>(ref);
    const createRippleEffect = useRippleEffect(buttonRef, { color: appearance === 'filled' ? 'default' : color });

    const styleProps = {
      size,
      appearance,
      disabled,
      color
    };

    const buttonClickHandler = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        disableRippleEffect || createRippleEffect(event);
        onClick(event);
      },
      [disableRippleEffect, createRippleEffect, onClick]
    );

    return (
      <Styled.ButtonRoot className={className} ref={buttonRef} onClick={buttonClickHandler} {...styleProps} {...props}>
        {iconLeft && <Styled.ButtonIcon {...styleProps}>{iconLeft}</Styled.ButtonIcon>}
        <Typography variant="button" upperCase={disableUpperCase ? false : true}>
          {children}
        </Typography>
        {iconRight && <Styled.ButtonIcon {...styleProps}>{iconRight}</Styled.ButtonIcon>}
      </Styled.ButtonRoot>
    );
  }
);

Button.displayName = 'Button';
export default Button;
