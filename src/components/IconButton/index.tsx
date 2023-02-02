import React from 'react';
import './styles.scss';
import classNames from 'classnames';

export interface IconButtonProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'default' | 'warning' | 'success' | 'danger' | 'focus' | 'accented';
  styles?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({
  color = 'default',
  size = 'medium',
  className = '',
  styles,
  onClick,
  children
}) => {
  const classes = classNames(
    'jds-icon-btn',
    `jds-icon-btn--${size}`,
    `jds-icon-btn--${color}`,
    className
  );

  return (
    <button className={classes} style={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default IconButton;
