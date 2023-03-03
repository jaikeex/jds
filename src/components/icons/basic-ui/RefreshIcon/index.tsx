import React from 'react';
import type { SvgIconProps } from 'components/icons/SvgIcon';
import SvgIcon from 'components/icons/SvgIcon';

export const RefreshIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M23.95 40.3q-6.75 0-11.525-4.775T7.65 24q0-6.75 4.775-11.525T23.95 7.7q4.35 0 7.6 1.75t5.65 4.8v-5q0-.65.45-1.1.45-.45 1.1-.45.7 0 1.15.45.45.45.45 1.1v9.9q0 .7-.5 1.2t-1.2.5h-9.9q-.65 0-1.1-.45-.45-.45-.45-1.15 0-.65.45-1.1.45-.45 1.1-.45h6.8q-1.9-2.95-4.8-4.775-2.9-1.825-6.8-1.825-5.4 0-9.15 3.75T11.05 24q0 5.4 3.75 9.15t9.15 3.75q3.85 0 7.05-2.025 3.2-2.025 4.8-5.475.2-.4.7-.725.5-.325 1-.325 1 0 1.45.65.45.65.05 1.5-1.9 4.45-5.975 7.125Q28.95 40.3 23.95 40.3Z"
    />
  </SvgIcon>
));
