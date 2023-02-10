import React, { useRef } from 'react';
import './Button.styles.scss';
import { useForwardedRef, useRippleEffect } from '@core/hooks';
import classNames from 'classnames';
import { ButtonAppearance, ButtonSize, ButtonType } from './types';
import { ColorVariants } from '@core/types';
import { classNameColor, classNameSize } from '@core/utils';

export interface ButtonProps {
  size?: ButtonSize;
  appearance?: ButtonAppearance;
  color?: Exclude<ColorVariants, 'dark'>;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: ButtonType;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'medium',
      disabled = false,
      iconLeft = null,
      iconRight = null,
      type = 'button',
      className = '',
      appearance = 'filled',
      color = 'default',
      style,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const buttonRef = useForwardedRef<HTMLButtonElement>(ref);

    const createRippleEffect = useRippleEffect(
      buttonRef,
      appearance !== 'filled'
    );

    const buttonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      createRippleEffect(event);
      onClick && onClick(event);
    };

    const classes = classNames(
      'jds-btn',
      classNameSize('jds-btn', size),
      `${classNameColor('jds-btn', color)}--${appearance}`,
      {
        'jds-btn--disabled': disabled
      },
      className
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
        <span className="jds-btn__text">{children}</span>
        {iconRight && <div className="jds-btn__icon">{iconRight}</div>}
      </button>
    );
  }
);

export default Button;
