import React from 'react';
import type { SvgIconProps } from 'components/icons/SvgIcon';
import SvgIcon from 'components/icons/SvgIcon';

export const ErrorIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref} viewBox="0 96 960 960">
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M483 623q13 0 21.5-8.5T513 593V399q0-12-9-20.5t-21-8.5q-13 0-21.5 8.5T453 400v194q0 12 9 20.5t21 8.5Zm-3 153q14 0 23.5-9.5T513 743q0-14-9.5-23.5T480 710q-14 0-23.5 9.5T447 743q0 14 9.5 23.5T480 776Zm0 200q-85 0-158-30.5T195 861q-54-54-84.5-127T80 576q0-84 30.5-157T195 292q54-54 127-85t158-31q84 0 157 31t127 85q54 54 85 127t31 157q0 85-31 158t-85 127q-54 54-127 84.5T480 976Z"
    />
  </SvgIcon>
));
