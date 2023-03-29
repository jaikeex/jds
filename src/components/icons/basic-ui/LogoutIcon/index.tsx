import React from 'react';
import type { SvgIconProps } from 'components/icons/SvgIcon';
import SvgIcon from 'components/icons/SvgIcon';

export const LogoutIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M32.1 31.95q-.5-.5-.5-1.225 0-.725.5-1.225l3.8-3.8H20.3q-.7 0-1.2-.5t-.5-1.2q0-.75.5-1.225.5-.475 1.2-.475h15.5l-3.85-3.85q-.45-.45-.45-1.15t.5-1.25q.5-.5 1.225-.5.725 0 1.225.5l6.8 6.8q.25.3.375.6t.125.6q0 .35-.125.625t-.375.575L34.5 32q-.45.45-1.15.45t-1.25-.5ZM9 42.3q-1.4 0-2.425-1.025T5.55 38.9V9.1q0-1.4 1.025-2.4T9 5.7h12.9q.75 0 1.225.5.475.5.475 1.2 0 .75-.475 1.225-.475.475-1.225.475H9v29.8h12.9q.75 0 1.225.5.475.5.475 1.2 0 .75-.475 1.225-.475.475-1.225.475Z"
    />
  </SvgIcon>
));