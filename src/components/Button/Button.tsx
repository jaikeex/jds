import React, { useCallback } from 'react';
import './Button.styles.scss';
import { useForwardedRef, useRippleEffect } from 'core/hooks';
import classNames from 'classnames';
import type { ButtonAppearance, ButtonSize, ButtonType } from './types';
import type { ColorVariants } from 'core/types';
import { classNameColor, classNameSize } from 'core/utils';
import { Typography } from 'components/Typography';

export interface ButtonProps extends React.PropsWithChildren {
  size?: ButtonSize;
  appearance?: ButtonAppearance;
  color?: Exclude<ColorVariants, 'dark'>;
  disabled?: boolean;
  disableRippleEffect?: boolean;
  disableUpperCase?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: ButtonType;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
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
      className = '',
      appearance = 'filled',
      color = 'default',
      style,
      onClick = () => {},
      children,
      ...props
    },
    ref
  ) => {
    const buttonRef = useForwardedRef<HTMLButtonElement>(ref);

    const createRippleEffect = useRippleEffect(buttonRef, appearance !== 'filled');

    const classes = classNames(
      'jds-btn',
      classNameSize('jds-btn', size),
      `${classNameColor('jds-btn', color)}--${appearance}`,
      {
        'jds-btn--disabled': disabled
      },
      className
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
        {...props}
        className={classes}
        style={style}
        ref={buttonRef}
        disabled={disabled}
        type={type}
        onClick={buttonClickHandler}
      >
        {iconLeft && <div className="jds-btn__icon">{iconLeft}</div>}
        <Typography variant="button" upperCase={disableUpperCase ? false : true}>
          {children}
        </Typography>
        {iconRight && <div className="jds-btn__icon">{iconRight}</div>}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default React.memo(Button);
