import React, { useRef } from 'react';
import './styles.scss';
import { useRippleEffect } from '@core/hooks';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large' | 'wide';
  appearance?: 'subtle' | 'contained' | 'outlined';
  disabled?: boolean;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  disabled = false,
  icon = null,
  type = 'button',
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
    const classNameGeneral = `mds-btn ${disabled && 'mds-btn--disabled'}`;
    const classNameSize = `mds-btn--${size}`;

    return `${classNameGeneral} ${classNameSize}`;
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
      {icon && <span className="mds-btn__icon">{icon}</span>}
      <span className="mds-btn__text">{children}</span>
    </button>
  );
};
