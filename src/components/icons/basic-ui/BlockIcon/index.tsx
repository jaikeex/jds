import React from 'react';
import type { SvgIconProps } from 'components/icons/SvgIcon';
import SvgIcon from 'components/icons/SvgIcon';

export const BlockIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M24 44.3q-4.2 0-7.9-1.6t-6.45-4.35Q6.9 35.6 5.3 31.9 3.7 28.2 3.7 24t1.6-7.925q1.6-3.725 4.35-6.45Q12.4 6.9 16.1 5.3T24 3.7q4.2 0 7.9 1.6t6.45 4.325q2.75 2.725 4.35 6.45Q44.3 19.8 44.3 24q0 4.2-1.6 7.9t-4.35 6.45Q35.6 41.1 31.9 42.7q-3.7 1.6-7.9 1.6Zm0-3.4q7.05 0 11.975-4.925T40.9 24q0-2.95-1-5.7t-2.85-5L13.3 37q2.2 1.95 4.975 2.925Q21.05 40.9 24 40.9Zm-13-6.2L34.7 11q-2.25-1.9-5-2.9t-5.7-1q-7.05 0-11.975 4.9T7.1 24q0 2.95 1.05 5.7t2.85 5Z"
    />
  </SvgIcon>
));
