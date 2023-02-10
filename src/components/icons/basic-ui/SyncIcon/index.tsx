import React from 'react';
import { SvgIcon, SvgIconProps } from '@components/icons';

export const SyncIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon {...props} ref={ref}>
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M30.7 38.7q-.85.4-1.55-.075-.7-.475-.7-1.475 0-.5.325-.95.325-.45.775-.7 3.4-1.55 5.325-4.725Q36.8 27.6 36.8 23.85q0-2.35-1.15-4.775-1.15-2.425-3-4.325l-1.4-1.2v4.4q0 .65-.45 1.1-.45.45-1.15.45-.65 0-1.1-.45-.45-.45-.45-1.1V9.5q0-.7.5-1.2t1.2-.5h8.4q.7 0 1.15.45.45.45.45 1.15t-.45 1.125q-.45.425-1.15.425h-4.65l.6.6q3.05 2.85 4.575 6.075 1.525 3.225 1.525 6.225 0 4.85-2.6 8.825-2.6 3.975-6.95 6.025ZM9.95 40.2q-.7 0-1.15-.45-.45-.45-.45-1.15t.45-1.125q.45-.425 1.15-.425h4.6l-.6-.5q-3.2-2.6-4.7-5.625t-1.5-6.775q0-4.9 2.65-8.875 2.65-3.975 7-5.975.85-.35 1.525.125.675.475.675 1.475 0 .45-.325.9t-.775.7q-3.35 1.55-5.325 4.725T11.2 24.15q0 3.1 1.15 5.375T15.5 33.5l1.4.95v-4.4q0-.65.45-1.1.45-.45 1.15-.45.65 0 1.1.45.45.45.45 1.1v8.45q0 .7-.5 1.2t-1.2.5Z"
        />
      </SvgIcon>
    );
  }
);
