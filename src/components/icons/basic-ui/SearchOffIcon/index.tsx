import React from 'react';
import type { SvgIconProps } from '@components/icons';
import { SvgIcon } from '@components/icons';

export const SearchOffIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M13.5 44q-3.9 0-6.7-2.8Q4 38.4 4 34.5q0-3.9 2.8-6.7Q9.6 25 13.5 25q3.9 0 6.7 2.8 2.8 2.8 2.8 6.7 0 3.9-2.8 6.7-2.8 2.8-6.7 2.8Zm-4.05-5.4q.25.25.6.25t.6-.25l2.85-2.85 2.85 2.85q.25.25.55.225.3-.025.55-.275.25-.25.25-.575 0-.325-.25-.575l-2.85-2.85 3-3q.25-.25.225-.575-.025-.325-.275-.575-.25-.25-.55-.25-.3 0-.55.25l-2.95 2.95-2.95-2.95q-.25-.25-.55-.25-.3 0-.55.25-.25.25-.25.575 0 .325.25.575l2.9 2.95-2.9 2.9q-.25.25-.25.6t.25.6Zm31.25 2.3L28.65 28.85q-.65.55-1.525 1.075-.875.525-1.725.875-.25-.7-.55-1.425-.3-.725-.7-1.325 2.7-1.05 4.575-3.475T30.6 18.8q0-4.05-2.85-6.925T20.85 9q-4.1 0-6.975 2.875T11 18.8q0 .85.175 1.775.175.925.425 1.575-.65.1-1.45.325-.8.225-1.45.525-.35-.9-.525-2Q8 19.9 8 18.8q0-5.35 3.75-9.075Q15.5 6 20.85 6q5.3 0 9.025 3.75Q33.6 13.5 33.6 18.8q0 2.15-.75 4.25T30.8 26.7l12.1 12q.45.45.45 1.1 0 .65-.45 1.1-.45.45-1.1.45-.65 0-1.1-.45Z"
    />
  </SvgIcon>
));
