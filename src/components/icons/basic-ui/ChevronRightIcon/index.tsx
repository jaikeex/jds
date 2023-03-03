import React from 'react';
import type { SvgIconProps } from '@components/icons/SvgIcon';
import SvgIcon from '@components/icons/SvgIcon';

export const ChevronRightIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M17.55 35.05q-.45-.55-.475-1.25-.025-.7.475-1.2l8.65-8.65-8.7-8.7q-.45-.45-.425-1.225.025-.775.475-1.225.55-.55 1.225-.525.675.025 1.175.525l9.95 9.95q.25.3.375.575.125.275.125.625t-.125.625q-.125.275-.375.575l-9.9 9.9q-.5.5-1.2.475-.7-.025-1.25-.475Z"
    />
  </SvgIcon>
));
