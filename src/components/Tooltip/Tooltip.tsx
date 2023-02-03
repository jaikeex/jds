import { ColorVariants, Position } from '@core/types';
import React, { useEffect, useRef, useState } from 'react';
import './Tooltip.styles.scss';
import classNames from 'classnames';
import { TooltipSize } from './types';

export interface TooltipProps {
  color?: ColorVariants;
  position?: Position;
  size?: TooltipSize;
  content: React.ReactNode;
  className?: string;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  color = 'default',
  position = 'right',
  size = 'default',
  className = '',
  styles,
  content,
  children
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  let isInitialRender = useRef(true);

  const classes = classNames(
    'jds-tooltip__content',
    `jds-tooltip__content--pos--${position}`,
    `jds-tooltip__content--color--${color}`,
    `jds-tooltip__content--size--${size}`,
    className
  );

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
    }
  }, [isVisible]);

  return (
    <div
      className="jds-tooltip__container"
      onMouseOver={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {isVisible && (
        <div style={styles} className={classes}>
          {content}
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
