import React from 'react';
import type { SvgIconProps } from 'components/icons/SvgIcon';
import SvgIcon from 'components/icons/SvgIcon';

export const HelpIconOutlined = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref} viewBox="0 96 960 960">
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M484 809q16 0 27-11t11-27q0-16-11-27t-27-11q-16 0-27 11t-11 27q0 16 11 27t27 11Zm-1-413q34 0 55 18.5t21 47.5q0 20-12 39.5T508 544q-26 23-41.5 48.5T451 639q0 11 8.5 17.5T479 663q12 0 20-8t10-20q3-20 13.5-35.5T555 566q30-25 43.5-50t13.5-56q0-53-34.5-85T486 343q-38 0-70 15t-53 44q-8 11-6.5 22.5T366 442q11 8 23.5 5t20.5-14q13-18 31.5-27.5T483 396Zm-3 580q-84 0-157-30.5T196 861q-54-54-85-127T80 576q0-84 31-157t85-127q54-54 127-85t157-31q83 0 156 31t127 85q54 54 85.5 127T880 576q0 85-31.5 158T763 861q-54 54-127 84.5T480 976Zm0-411Zm0 351q141 0 240.5-100T820 576q0-140-99.5-240T480 236q-143 0-241.5 100T140 576q0 140 98.5 240T480 916Z"
    />
  </SvgIcon>
));
