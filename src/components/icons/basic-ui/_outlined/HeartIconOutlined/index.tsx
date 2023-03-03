import React from 'react';
import type { SvgIconProps } from '@components/icons/SvgIcon';
import SvgIcon from '@components/icons/SvgIcon';

export const HeartIconOutlined = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="m21.95 40.2-2.65-2.45Q13.1 32 8.55 26.775T4 15.85q0-4.5 3.025-7.525Q10.05 5.3 14.5 5.3q2.55 0 5.05 1.225T24 10.55q2.2-2.8 4.55-4.025Q30.9 5.3 33.5 5.3q4.45 0 7.475 3.025Q44 11.35 44 15.85q0 5.7-4.55 10.925Q34.9 32 28.7 37.75l-2.65 2.45q-.85.8-2.05.8-1.2 0-2.05-.8Zm.75-26.35q-1.35-2.45-3.55-4-2.2-1.55-4.65-1.55-3.3 0-5.4 2.125Q7 12.55 7 15.85q0 2.9 1.95 6.075Q10.9 25.1 13.6 28.1t5.6 5.575Q22.1 36.25 24 38q1.9-1.7 4.8-4.3 2.9-2.6 5.6-5.625 2.7-3.025 4.65-6.2Q41 18.7 41 15.85q0-3.3-2.125-5.425T33.5 8.3q-2.5 0-4.675 1.525T25.2 13.85q-.25.4-.55.575-.3.175-.7.175-.4 0-.725-.175-.325-.175-.525-.575Zm1.3 9.3Z"
    />
  </SvgIcon>
));
