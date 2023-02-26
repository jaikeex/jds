import { NumericRange } from '@core/types';
import React from 'react';
import './Sheet.styles.scss';
import classNames from 'classnames';

export interface SheetProps {
  children?: React.ReactNode;
  className?: string;
  level?: NumericRange<0, 12>;
  outlined?: boolean;
  sharpCorners?: boolean;
  style?: React.CSSProperties;
}

const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(
  (
    {
      children,
      className = '',
      level = 4,
      outlined = false,
      sharpCorners = false,
      style = {}
    },
    ref
  ) => {
    const classes = classNames(
      'jds-sheet',
      `jds-sheet--level--${level}`,
      className,
      {
        'jds-sheet--sharp-corners': sharpCorners,
        'jds-sheet--outlined': outlined
      }
    );

    return (
      <div className={classes} style={style} ref={ref}>
        {children}
      </div>
    );
  }
);

export default Sheet;