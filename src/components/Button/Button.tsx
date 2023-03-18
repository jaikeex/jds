import React, { useCallback } from 'react';
import { useForwardedRef, useRippleEffect } from 'core/hooks';
import type { ButtonAppearance, ButtonSize } from './types';
import type { ThemeColorVariants } from 'core/types';
import { Typography } from 'components/Typography';
import { useStyles } from './useStyles';
import type { ButtonClassKey } from './types';
import clsx from 'clsx';
import type { Classes } from 'jss';
import { mergeClasses } from 'core/utils';
import type { SvgColoredIconProps, SvgIconProps } from 'components/icons';

export interface ButtonProps extends React.PropsWithChildren, Omit<React.ComponentProps<'button'>, 'ref'> {
  appearance?: ButtonAppearance;
  classes?: Partial<Classes<ButtonClassKey>>;
  color?: ThemeColorVariants;
  disableRippleEffect?: boolean;
  disableUpperCase?: boolean;
  iconLeft?: React.ReactElement<SvgIconProps | SvgColoredIconProps>;
  iconRight?: React.ReactElement<SvgIconProps | SvgColoredIconProps>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: ButtonSize;
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
      classes = {},
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
    const classNames = mergeClasses(useStyles({ color, disabled }), classes);
    const rootClasses = clsx(classNames.root, classNames[size], classNames[appearance], className);

    const buttonClickHandler = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        disableRippleEffect || createRippleEffect(event);
        onClick(event);
      },
      [disableRippleEffect, createRippleEffect, onClick]
    );

    return (
      <button className={rootClasses} ref={buttonRef} disabled={disabled} onClick={buttonClickHandler} {...props}>
        {iconLeft && <div className={classNames.icon}>{iconLeft}</div>}
        <Typography variant="button" upperCase={disableUpperCase ? false : true} className={classNames.text}>
          {children}
        </Typography>
        {iconRight && <div className={classNames.icon}>{iconRight}</div>}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
