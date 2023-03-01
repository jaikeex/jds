import React from 'react';
import type { SvgIconProps } from '@components/icons';
import { SvgIcon } from '@components/icons';

export const ChevronDownIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path d="M24 30.35q-.35 0-.625-.125t-.575-.375l-9.9-9.9q-.45-.5-.425-1.25.025-.75.475-1.2.55-.55 1.225-.475.675.075 1.175.525L24 26.2l8.65-8.65q.45-.45 1.225-.5.775-.05 1.225.5.55.45.475 1.175-.075.725-.525 1.275l-9.85 9.85q-.3.25-.575.375-.275.125-.625.125Z" />
  </SvgIcon>
));
