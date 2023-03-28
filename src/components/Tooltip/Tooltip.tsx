import React from 'react';
import type { Position, ThemeColorVariantsWithDefault } from 'core/types';
import { usePopperTooltip } from 'react-popper-tooltip';
import * as Styled from './styles';

export interface TooltipProps {
  color?: ThemeColorVariantsWithDefault;
  position?: Position;
  content?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
}

const Tooltip: React.FC<TooltipProps> = ({
  className = '',
  color = 'default',
  position = 'right',
  style = {},
  content = null,
  children = null
}) => {
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip({ placement: position });

  const styleProps = {
    color
  };

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
        <Styled.TooltipRoot
          ref={setTooltipRef}
          {...styleProps}
          {...getTooltipProps({ style: style, className: className })}
        >
          {content}
        </Styled.TooltipRoot>
      )}
    </React.Fragment>
  );
};

export default Tooltip;
