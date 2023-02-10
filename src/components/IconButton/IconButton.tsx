import React from 'react';
import './IconButton.styles.scss';
import classNames from 'classnames';
import { ColorVariants } from '@core/types';
import { IconButtonSize } from './types';
import { classNameColor, classNameSize } from '@core/utils';

export interface IconButtonProps {
  size?: IconButtonSize;
  color?: ColorVariants;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: React.ReactNode;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      color = 'default',
      size = 'medium',
      className = '',
      style,
      onClick,
      children
    },
    ref
  ) => {
    const classes = classNames(
      'jds-icon-btn',
      classNameColor('jds-icon-btn', color),
      classNameSize('jds-icon-btn', size),
      className
    );

    return (
      <button ref={ref} className={classes} style={style} onClick={onClick}>
        {children}
      </button>
    );
  }
);

export default IconButton;
