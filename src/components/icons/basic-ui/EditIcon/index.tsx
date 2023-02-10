import React from 'react';
import { SvgIcon, SvgIconProps } from '@components/icons';

export const EditIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon {...props} ref={ref}>
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M7 48q-1.25 0-2.125-.875T4 45q0-1.3.875-2.175.875-.875 2.175-.875H41q1.25 0 2.125.875T44 44.95q0 1.3-.875 2.175Q42.25 48 41 48Zm2.6-11.35q-.65 0-1.075-.425Q8.1 35.8 8.1 35.15V30.6q0-.3.1-.55.1-.25.35-.5l18.2-18.2L33.4 18 15.2 36.2q-.25.25-.5.35-.25.1-.55.1Zm26-20.85-6.65-6.65 4.2-4.2q.55-.65 1.25-.675.7-.025 1.4.675l3.9 3.9q.65.65.65 1.375T39.8 11.6Z"
        />
      </SvgIcon>
    );
  }
);
