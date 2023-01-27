import React from 'react';
import './styles.scss';
import classNames from 'classnames';
import { ButtonSize } from '@/core/types';

export interface IconButtonProps {
  size?: ButtonSize;
  appearance?: 'success' | 'danger' | 'default';
  styles?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({
  appearance = 'default',
  size = 'medium',
  className = '',
  styles,
  onClick,
  children
}) => {
  const classes = classNames(
    'jds-icon-btn',
    `jds-icon-btn--${size}`,
    `jds-icon-btn--${appearance}`,
    className
  );

  return (
    <button className={classes} style={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default IconButton;
