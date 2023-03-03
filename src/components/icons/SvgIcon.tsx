import React from 'react';
import './styles.scss';
import { getIconClasses } from './utils';
import type { ColorVariants, ExtendedSize } from '@core/types';

export interface SvgIconProps extends React.PropsWithChildren {
  size?: ExtendedSize;
  color?: ColorVariants | `#${string}`;
  className?: string;
  style?: React.CSSProperties;
  testId?: string;
  ariaLabel?: string;
  width?: number;
  height?: number;
  viewBox?: string;
}

const SvgIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (
    {
      size = 'medium',
      color = 'default',
      className = '',
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
    const classes = getIconClasses(size, color, className);

    const styles = () => {
      const styles = { ...style };

      if (color.startsWith('#')) {
        styles.fill = color;
      }

      return styles;
    };

    return (
      <svg
        {...props}
        ref={ref}
        className={classes}
        style={styles()}
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

export default SvgIcon;
