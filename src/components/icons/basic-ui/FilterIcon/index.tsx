import React from 'react';
import type { SvgIconProps } from '@components/icons/SvgIcon';
import SvgIcon from '@components/icons/SvgIcon';

export const FilterIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M21.5 36.35q-.7 0-1.2-.5t-.5-1.25q0-.7.5-1.175.5-.475 1.2-.475h5q.7 0 1.2.475t.5 1.225q0 .7-.5 1.2t-1.2.5Zm-14-21.3q-.7 0-1.2-.475t-.5-1.225q0-.7.5-1.2t1.2-.5h33q.7 0 1.2.5t.5 1.25q0 .7-.5 1.175-.5.475-1.2.475Zm6 10.65q-.7 0-1.2-.5t-.5-1.2q0-.75.5-1.225.5-.475 1.2-.475h21q.7 0 1.2.5t.5 1.2q0 .75-.5 1.225-.5.475-1.2.475Z"
    />
  </SvgIcon>
));
