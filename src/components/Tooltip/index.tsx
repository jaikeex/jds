import { TooltipAppearance, TooltipPosition } from '@/core/types';
import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import classNames from 'classnames';

export interface TooltipProps {
  appearance?: TooltipAppearance;
  position?: TooltipPosition;
  size?: 'short-text' | 'long-text' | 'default';
  content: React.ReactNode;
  className?: string;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  appearance = 'default',
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
    `jds-tooltip__content--color--${appearance}`,
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
