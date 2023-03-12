import React from 'react';
import type { Position } from 'core/types';
import type { TooltipClassKey, TooltipColorVariants } from './types';
import { usePopperTooltip } from 'react-popper-tooltip';
import type { Classes } from 'jss';
import { mergeClasses } from 'core/utils';
import { useStyles } from './useStyles';

export interface TooltipProps {
  color?: TooltipColorVariants;
  position?: Position;
  content?: React.ReactNode;
  className?: string;
  classes?: Classes<TooltipClassKey>;
  style?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
}

const Tooltip: React.FC<TooltipProps> = ({
  color = 'default',
  position = 'right',
  classes = {},
  style = {},
  content = null,
  children = null
}) => {
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip({ placement: position });
  const classNames = classes ? mergeClasses(useStyles({ color }), classes) : useStyles({ color });

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement, {
        ref: setTriggerRef
      });
    }
    return child;
  });

  return (
    <React.Fragment>
      {childrenWithProps}
      {visible && (
        <div ref={setTooltipRef} {...getTooltipProps({ style: style, className: classNames.content })}>
          {content}
        </div>
      )}
    </React.Fragment>
  );
};

export default Tooltip;
