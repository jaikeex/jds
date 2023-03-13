import React from 'react';
import type { NumericRange } from 'core/types';
import type { SheetClassKey } from './types';
import type { Classes } from 'jss';
import { mergeClasses } from 'core/utils';
import { useStyles } from './useStyles';
import clsx from 'clsx';

export interface SheetProps {
  children?: React.ReactNode;
  classes?: Classes<SheetClassKey>;
  className?: string;
  level?: NumericRange<0, 12>;
  outlined?: boolean;
  sharpCorners?: boolean;
  style?: React.CSSProperties;
}

const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(
  ({ children, classes = {}, className = '', level = 4, outlined = false, sharpCorners = false, style = {} }, ref) => {
    const classNames = classes
      ? mergeClasses(useStyles({ sharpCorners, outlined, level }), classes)
      : useStyles({ sharpCorners, outlined, level });

    return (
      <div className={clsx(classNames.root, className)} style={style} ref={ref}>
        {children}
      </div>
    );
  }
);

Sheet.displayName = 'Sheet';
export default Sheet;
