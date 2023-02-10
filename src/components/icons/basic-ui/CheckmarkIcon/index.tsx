import React from 'react';
import { SvgIcon, SvgIconProps } from '@components/icons';

export const CheckmarkIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon {...props} ref={ref}>
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M18.9 35.3q-.35 0-.625-.125T17.7 34.8l-9.05-9.05q-.5-.5-.5-1.25t.5-1.25q.5-.5 1.2-.5t1.2.5l7.85 7.85 18-18q.5-.5 1.2-.5t1.25.5q.5.5.5 1.225 0 .725-.5 1.225L20.1 34.8q-.3.25-.575.375-.275.125-.625.125Z"
        />
      </SvgIcon>
    );
  }
);
