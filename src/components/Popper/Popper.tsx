import type { Position } from '@core/types';
import React, { useEffect } from 'react';
import type { PopperOptions, TriggerType } from 'react-popper-tooltip';
import { usePopperTooltip } from 'react-popper-tooltip';
import './Popper.styles.scss';

export interface PopperProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  closeOnOutsideClick?: boolean;
  delayHide?: number;
  interactive?: boolean;
  isVisible?: boolean | undefined;
  offset?: [number, number];
  onVisibleChange?: (state: boolean) => void;
  popperOptions?: PopperOptions;
  position?: Position;
  referenceElement: HTMLElement | null;
  trigger?: TriggerType | TriggerType[];
}

const Popper: React.FC<PopperProps> = ({
  children = null,
  className = '',
  closeOnOutsideClick = true,
  delayHide = 0,
  interactive = true,
  isVisible = undefined,
  offset = [0, 6],
  onVisibleChange = () => {},
  popperOptions = {},
  position = 'bottom',
  referenceElement = null,
  trigger = 'click'
}) => {
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip(
    {
      closeOnOutsideClick: closeOnOutsideClick,
      interactive: interactive,
      offset: offset,
      placement: position,
      trigger: trigger,
      visible: isVisible,
      delayHide: delayHide,
      onVisibleChange: onVisibleChange
    },
    popperOptions
  );

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement, {
        ref: setTooltipRef,
        className: className,
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
