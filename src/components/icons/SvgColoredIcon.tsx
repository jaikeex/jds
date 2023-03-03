import React from 'react';
import './styles.scss';
import type { ExtendedSize } from '@core/types';
import { getFlatIconClasses } from '@components/icons/utils';

export interface SvgColoredIconProps extends React.PropsWithChildren {
  size?: ExtendedSize;
  style?: React.CSSProperties;
  testId?: string;
  ariaLabel?: string;
  width?: number;
  height?: number;
  viewBox?: string;
}

const SvgColoredIcon = React.forwardRef<SVGSVGElement, SvgColoredIconProps>(
  (
    {
      size = 'medium',
      style = {},
      testId = '',
      ariaLabel,
      width = 48,
      height = 48,
      viewBox = '0 0 48 48',
      children,
      ...props
    },
    ref
  ) => {
    const classes = getFlatIconClasses(size);

    return (
      <svg
        {...props}
        ref={ref}
        className={classes}
        style={style}
        data-testid={testId}
        aria-label={ariaLabel}
        width={width}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
      >
        {children}
      </svg>
    );
  }
);

export default SvgColoredIcon;
