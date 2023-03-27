import React from 'react';
import type { NumericRange } from 'core/types';
import * as Styled from './styles';

export interface SheetProps {
  children?: React.ReactNode;
  className?: string;
  level?: NumericRange<0, 12>;
  outlined?: boolean;
  sharpCorners?: boolean;
  style?: React.CSSProperties;
}

const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(
  ({ children, className = '', level = 4, outlined = false, sharpCorners = false, style = {} }, ref) => {
    const styleProps = {
      level,
      outlined,
      sharpCorners
    };

    return (
      <Styled.SheetRoot {...styleProps} className={className} style={style} ref={ref}>
        {children}
      </Styled.SheetRoot>
    );
  }
);

Sheet.displayName = 'Sheet';
export default Sheet;
