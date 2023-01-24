import React, { useRef } from 'react';
import './styles.scss';
import { useRippleEffect } from '@core/hooks';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  appearance?: 'subtle' | 'contained' | 'outlined' | 'success' | 'danger';
  disabled?: boolean;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  disabled = false,
  icon = null,
  type = 'button',
  className = '',
  appearance = 'contained',
  onClick,
  children,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  const createRippleEffect = useRippleEffect(ref);

  const buttonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    createRippleEffect(event);
    onClick(event);
  };

  const getClassName = () => {
    const classNameGeneral = disabled ? 'jds-btn jds-btn--disabled' : 'jds-btn';
    const classNameSize = `jds-btn--${size}`;
    const classNameAppearance = appearance && `jds-btn--${appearance}`;

    return `${classNameGeneral} ${classNameSize} ${classNameAppearance} ${className}`;
  };

  return (
    <button
      {...props}
      className={getClassName()}
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
