import React from 'react';
import type { SvgIconProps } from 'components/icons/SvgIcon';
import SvgIcon from 'components/icons/SvgIcon';

export const MoreVerticalIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M24 40.4q-1.05 0-1.8-.75t-.75-1.8q0-1 .75-1.75t1.8-.75q1.05 0 1.8.75t.75 1.8q0 1-.75 1.75t-1.8.75Zm0-13.85q-1.05 0-1.8-.75t-.75-1.8q0-1.05.75-1.8t1.8-.75q1.05 0 1.8.75t.75 1.8q0 1.05-.75 1.8t-1.8.75Zm0-13.9q-1.05 0-1.8-.75t-.75-1.8q0-1.05.75-1.775.75-.725 1.8-.725t1.8.75q.75.75.75 1.8t-.75 1.775q-.75.725-1.8.725Z"
    />
  </SvgIcon>
));
