import React from 'react';
import type { SvgIconProps } from 'components/icons/SvgIcon';
import SvgIcon from 'components/icons/SvgIcon';

export const EmailIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm17-15.4q.25 0 .425-.075t.375-.175L40.5 14.1q.25-.15.375-.4t.125-.55q0-.65-.575-1.025-.575-.375-1.175.025L24 21.9 8.8 12.15q-.6-.4-1.2-.05-.6.35-.6 1 0 .3.15.575.15.275.35.425l15.7 10.25q.2.1.375.175.175.075.425.075Z"
    />
  </SvgIcon>
));
