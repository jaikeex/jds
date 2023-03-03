import React from 'react';
import type { SvgIconProps } from 'components/icons/SvgIcon';
import SvgIcon from 'components/icons/SvgIcon';

export const AttachmentIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M14.9 35q-4.55 0-7.725-3.225T4 24q0-4.55 3.125-7.775Q10.25 13 14.8 13h21.5q3.2 0 5.45 2.275T44 20.75q0 3.2-2.25 5.475Q39.5 28.5 36.3 28.5H16.55q-1.9 0-3.225-1.3Q12 25.9 12 24q0-1.9 1.375-3.2 1.375-1.3 3.275-1.3H35.3q.4 0 .7.3.3.3.3.7 0 .4-.3.7-.3.3-.7.3H16.6q-1.05 0-1.825.725Q14 22.95 14 24q0 1.05.75 1.775.75.725 1.8.725H36.3q2.4 0 4.05-1.675T42 20.75q0-2.4-1.65-4.075Q38.7 15 36.3 15H14.7q-3.65 0-6.175 2.65T6 24q0 3.75 2.575 6.375T14.85 33H35.3q.4 0 .7.3.3.3.3.7 0 .4-.3.7-.3.3-.7.3Z"
    />
  </SvgIcon>
));
