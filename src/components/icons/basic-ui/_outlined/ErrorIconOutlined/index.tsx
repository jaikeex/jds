import React from 'react';
import type { SvgIconProps } from 'components/icons/SvgIcon';
import SvgIcon from 'components/icons/SvgIcon';

export const ErrorIconOutlined = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref} viewBox="0 96 960 960">
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M483.5 623q12.5 0 21-8.625T513 593V399q0-12-9-20.5t-21.5-8.5q-12.5 0-21 8.625T453 400v194q0 12 9 20.5t21.5 8.5Zm-3.518 153q14.018 0 23.518-9.482 9.5-9.483 9.5-23.5 0-14.018-9.482-23.518-9.483-9.5-23.5-9.5-14.018 0-23.518 9.482-9.5 9.483-9.5 23.5 0 14.018 9.482 23.518 9.483 9.5 23.5 9.5Zm-.482 200Q395 976 322 945.5T195 861q-54-54-84.5-127T80 576.5Q80 492 110.5 419T195 292q54-54 127-85t157.5-31q84.5 0 157.5 31t127 85q54 54 85 127t31 157.5q0 84.5-31 157.5t-85 127q-54 54-127 84.5T479.5 976Zm.5-400Zm0 340q140 0 240-100t100-240q0-140-100-240T480 236q-140 0-240 100T140 576q0 140 100 240t240 100Z"
    />
  </SvgIcon>
));
