import React from 'react';
import type { SvgIconProps } from 'components/icons/SvgIcon';
import SvgIcon from 'components/icons/SvgIcon';

export const SortIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M16.5 36.35h-9q-.7 0-1.2-.5t-.5-1.25q0-.7.5-1.175.5-.475 1.2-.475h9q.7 0 1.2.475t.5 1.225q0 .7-.5 1.2t-1.2.5Zm24-21.3h-33q-.7 0-1.2-.475t-.5-1.225q0-.7.5-1.2t1.2-.5h33q.7 0 1.2.5t.5 1.25q0 .7-.5 1.175-.5.475-1.2.475Zm-12 10.65h-21q-.7 0-1.2-.5T5.8 24q0-.75.5-1.225.5-.475 1.2-.475h21q.7 0 1.2.5t.5 1.2q0 .75-.5 1.225-.5.475-1.2.475Z"
    />
  </SvgIcon>
));
