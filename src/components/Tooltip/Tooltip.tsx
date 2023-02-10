import { ColorVariants, Position } from '@core/types';
import React, { useEffect, useRef, useState } from 'react';
import './Tooltip.styles.scss';
import classNames from 'classnames';
import { TooltipSize } from './types';
import { usePopper } from 'react-popper';

export interface TooltipProps {
  color?: ColorVariants;
  position?: Position;
  size?: TooltipSize;
  content: React.ReactNode;
  className?: string;
  referenceElement: React.RefObject<HTMLElement>;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  color = 'default',
  position = 'right',
  size = 'default',
  className = '',
  referenceElement,
  style,
  content,
  children
}) => {
  const tooltipElement = useRef(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  let isInitialRender = useRef(true);

  const { styles, attributes } = usePopper(
    referenceElement.current,
    tooltipElement.current,
    {
      placement: position
    }
  );

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
    <React.Fragment>
      {children}
      <div ref={tooltipElement} style={styles.popper} {...attributes.popper}>
        {content}
      </div>
      {/* <div
        className="jds-tooltip__container"
        onMouseOver={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {isVisible && (
          <div style={style} className={classes}>
            {content}
          </div>
        )}
      </div> */}
    </React.Fragment>
  );
};

export default Tooltip;
