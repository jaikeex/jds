import React from 'react';
import './IconButton.styles.scss';
import classNames from 'classnames';
import { ColorVariants } from '@core/types';
import { IconButtonSize } from './types';

export interface IconButtonProps {
  size?: IconButtonSize;
  color?: ColorVariants;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({
  color = 'default',
  size = 'medium',
  className = '',
  style,
  onClick,
  children
}) => {
  const classes = classNames(
    'jds-icon-btn',
    `jds-icon-btn--size--${size}`,
    `jds-icon-btn--color--${color}`,
    className
  );

  return (
    <button className={classes} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default IconButton;
