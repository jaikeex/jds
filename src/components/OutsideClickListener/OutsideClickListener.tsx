import React, { useRef } from 'react';
import { useOutsideClick } from './useOutsideClick';

export interface OutsideClickListenerProps {
  children?: React.ReactNode;
  onOutsideClick?: (event: MouseEvent) => void;
}

const OutsideClickListener: React.FC<OutsideClickListenerProps> = ({
  children,
  onOutsideClick = () => {}
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, onOutsideClick);

  return <div ref={ref}>{children}</div>;
};

export default OutsideClickListener;
