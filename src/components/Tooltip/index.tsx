import { TooltipAppearance, TooltipPosition } from '@/core/types';
import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';

export interface TooltipProps {
  appearance?: TooltipAppearance;
  position?: TooltipPosition;
  size?: 'short-text' | 'long-text' | 'default' | number;
  content: React.ReactNode;
  children?: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
  appearance = 'default',
  position = 'right',
  size = 'default',
  content,
  children
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  let isInitialRender = useRef(true);

  const getClassName = () => {
    let className = 'jds-tooltip__content';
    className = className.concat(` jds-tooltip__content--pos--${position}`);
    className = className.concat(` jds-tooltip__content--color--${appearance}`);
    if (typeof size === 'string') {
      className = className.concat(` jds-tooltip__content--size--${size}`);
    }

    return className;
  };

  const getStyles = () => {
    const styles = {} as React.CSSProperties;

    if (typeof size === 'number') {
      styles.width = `${size}px`;
    }

    return styles;
  };

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
        <div style={getStyles()} className={getClassName()}>
          {content}
        </div>
      )}
      {children}
    </div>
  );
};

/*

Wraps around the component which should display the tooltip

The container is an inline, relative positioned element with appropriate mouse event handlers

*/
