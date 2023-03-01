import React from 'react';
import type { SvgIconProps } from '@components/icons';
import { SvgIcon } from '@components/icons';

export const RedoIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M19.6 38q-4.75 0-8.175-3.2Q8 31.6 8 26.9t3.425-7.9q3.425-3.2 8.175-3.2h14.7l-4.65-4.65q-.45-.45-.45-1.05 0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45l7.2 7.2q.25.25.35.5.1.25.1.55 0 .3-.1.55-.1.25-.35.5l-7.2 7.2q-.45.45-1.05.45-.6 0-1.05-.45-.45-.45-.45-1.05 0-.6.45-1.05l4.65-4.65H19.55q-3.5 0-6.025 2.325Q11 23.45 11 26.9t2.525 5.775Q16.05 35 19.55 35H32.5q.65 0 1.075.425Q34 35.85 34 36.5q0 .65-.425 1.075Q33.15 38 32.5 38Z"
    />
  </SvgIcon>
));
