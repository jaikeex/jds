import React from 'react';
import type { SvgIconProps } from 'components/icons/SvgIcon';
import SvgIcon from 'components/icons/SvgIcon';

export const StarIconOutlined = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="m17.15 35.85 6.85-5.2 6.85 5.2-2.75-8.65 6.3-4.1h-7.55L24 14.45l-2.85 8.65H13.6l6.3 4.1ZM24 34.6l-8.65 6.6q-.45.35-.9.3-.45-.05-.85-.3-.4-.25-.575-.675-.175-.425-.025-.975l3.3-10.75-8.5-6.1q-.45-.3-.575-.775-.125-.475.025-.875t.5-.725Q8.1 20 8.65 20H19.2l3.35-11.2q.15-.55.575-.825Q23.55 7.7 24 7.7t.875.275q.425.275.575.825L28.8 20h10.55q.55 0 .9.325t.5.725q.15.4.025.875t-.575.775l-8.5 6.1L35 39.55q.15.55-.025.975-.175.425-.575.675-.4.25-.85.3-.45.05-.9-.3Zm0-9.45Z"
    />
  </SvgIcon>
));
