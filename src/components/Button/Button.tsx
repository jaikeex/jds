import React, { useCallback, useEffect } from 'react';
import { useForwardedRef, useRippleEffect } from 'core/hooks';
import type { ButtonAppearance, ButtonSize, ButtonType } from './types';
import type { ThemeColorVariants } from 'core/types';
import { Typography } from 'components/Typography';
import { useStyles } from './useStyles';
import type { ButtonClassKey } from './types';
import clsx from 'clsx';
import type { Classes } from 'jss';
import { mergeClasses } from 'core/utils';
import type { JdsIcon, SvgColoredIconProps, SvgIconProps } from 'components/icons';

export interface ButtonProps extends React.PropsWithChildren {
  appearance?: ButtonAppearance;
  classes?: Classes<ButtonClassKey>;
  color?: ThemeColorVariants;
  disabled?: boolean;
  disableRippleEffect?: boolean;
  disableUpperCase?: boolean;
  iconLeft?: React.ReactElement<SvgIconProps | SvgColoredIconProps>;
  iconRight?: React.ReactElement<SvgIconProps | SvgColoredIconProps>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: ButtonSize;
  style?: React.CSSProperties;
  type?: ButtonType;
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
      type = 'button',
      classes = undefined,
      appearance = 'filled',
      color = 'primary',
      style = {},
      onClick = () => {},
      children = null
    },
    ref
  ) => {
    const buttonRef = useForwardedRef<HTMLButtonElement>(ref);

    const createRippleEffect = useRippleEffect(buttonRef, { color: appearance === 'filled' ? 'default' : color });
    const classNames = classes ? mergeClasses(useStyles({ color }), classes) : useStyles({ color });
    const rootClasses = clsx(
      classNames.root,
      classNames[size],
      classNames[appearance],
      disabled && classNames.disabled
    );

    const buttonClickHandler = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        disableRippleEffect || createRippleEffect(event);
        onClick(event);
      },
      [disableRippleEffect, createRippleEffect, onClick]
    );

    return (
      <button
        className={rootClasses}
        style={style}
        ref={buttonRef}
        disabled={disabled}
        type={type}
        onClick={buttonClickHandler}
      >
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
