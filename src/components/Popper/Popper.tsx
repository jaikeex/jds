import { Position } from '@core/types';
import React, { useEffect } from 'react';
import { TriggerType, usePopperTooltip } from 'react-popper-tooltip';
import './Popper.styles.scss';

export interface PopperProps {
  children?: React.ReactNode | React.ReactNode[];
  closeOnOutsideClick?: boolean;
  interactive?: boolean;
  offset?: [number, number];
  position?: Position;
  referenceElement: HTMLElement | null;
  trigger?: TriggerType | TriggerType[];
}

const Popper: React.FC<PopperProps> = ({
  children,
  closeOnOutsideClick = true,
  interactive = true,
  offset = [0, 6],
  position = 'bottom',
  referenceElement = null,
  trigger = 'click'
}) => {
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } =
    usePopperTooltip({
      closeOnOutsideClick: closeOnOutsideClick,
      interactive: interactive,
      offset: offset,
      placement: position,
      trigger: trigger
    });

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        ref: setTooltipRef,
        ...getTooltipProps(child.props)
      });
    }
    return child;
  });

  useEffect(() => {
    if (referenceElement) {
      setTriggerRef(referenceElement);
    }
  }, [referenceElement]);

  return <React.Fragment>{visible && childrenWithProps}</React.Fragment>;
};

export default Popper;
