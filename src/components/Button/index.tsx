import React, { useRef } from 'react';
import './styles.scss';
import { useRippleEffect } from '@core/hooks';
import { ButtonAppearance, ButtonSize, ButtonType } from '@/core/types';
import classNames from 'classnames';

export interface ButtonProps {
  size?: ButtonSize;
  appearance?: ButtonAppearance;
  disabled?: boolean;
  icon?: React.ReactNode;
  type?: ButtonType;
  className?: string;
  styles?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  disabled = false,
  icon = null,
  type = 'button',
  className = '',
  appearance = 'contained',
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
    `jds-btn--${appearance}`,
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
      {icon && <div className="jds-btn__icon">{icon}</div>}
      <span className="jds-btn__text">{children}</span>
    </button>
  );
};

export default Button;
