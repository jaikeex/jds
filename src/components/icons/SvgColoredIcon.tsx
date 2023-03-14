import React from 'react';

export interface SvgColoredIconProps extends React.PropsWithChildren {
  size?: number;
  style?: React.CSSProperties;
  testId?: string;
  viewBox?: string;
  className?: string;
}

const SvgColoredIcon = React.forwardRef<SVGSVGElement, SvgColoredIconProps>(
  ({ size = 32, style = {}, testId = '', className = '', viewBox = '0 0 48 48', children, ...props }, ref) => (
    <svg
      {...props}
      ref={ref}
      className={className}
      style={style}
      data-testid={testId}
      width={size}
      height={size}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
    >
      {children}
    </svg>
  )
);

export default SvgColoredIcon;
