import type { ColorVariants, Position } from '@core/types';
import React from 'react';
import './Tooltip.styles.scss';
import classNames from 'classnames';
import type { TooltipSize } from './types';
import { usePopperTooltip } from 'react-popper-tooltip';
export interface TooltipProps {
  color?: ColorVariants;
  position?: Position;
  size?: TooltipSize;
  content: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode | React.ReactNode[];
}

const Tooltip: React.FC<TooltipProps> = ({
  color = 'default',
  position = 'right',
  size = 'default',
  className = '',
  style = {},
  content = null,
  children = null
}) => {
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } =
    usePopperTooltip({ placement: position });

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement, {
        ref: setTriggerRef
      });
    }
    return child;
  });

  const classes = classNames(
    'jds-tooltip__content',
    `jds-tooltip__content--color--${color}`,
    `jds-tooltip__content--size--${size}`,
    className
  );

  return (
    <React.Fragment>
      {childrenWithProps}
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ style: style, className: classes })}
        >
          {content}
        </div>
      )}
    </React.Fragment>
  );
};

export default Tooltip;
