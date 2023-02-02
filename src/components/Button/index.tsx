import React, { useRef } from 'react';
import './styles.scss';
import { useRippleEffect } from '@core/hooks';
import { ButtonAppearance, ButtonSize, ButtonType } from '@/core/types';
import classNames from 'classnames';

export interface ButtonProps {
  size?: ButtonSize;
  appearance?: 'subtle' | 'filled' | 'outlined';
  color?: 'default' | 'warning' | 'success' | 'danger' | 'focus' | 'accented';
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: ButtonType;
  className?: string;
  styles?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  className = '',
  appearance = 'filled',
  color = 'default',
  styles,
  onClick,
  children,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  const createRippleEffect = useRippleEffect(ref);

  const buttonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    createRippleEffect(event);
    onClick && onClick(event);
  };

  const classes = classNames(
    'jds-btn',
    `jds-btn--${size}`,
    `jds-btn--${color}--${appearance}`,
    {
      'jds-btn--disabled': disabled
    },
    className
  );

  return (
    <button
      {...props}
      className={classes}
      style={styles}
      ref={ref}
      disabled={disabled}
      type={type}
      onClick={buttonClickHandler}
    >
      {iconLeft && <div className="jds-btn__icon">{iconLeft}</div>}
      <span className="jds-btn__text">{children}</span>
      {iconRight && <div className="jds-btn__icon">{iconRight}</div>}
    </button>
  );
};

export default Button;
