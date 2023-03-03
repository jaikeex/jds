import React from 'react';
import type { SvgIconProps } from '@components/icons/SvgIcon';
import SvgIcon from '@components/icons/SvgIcon';

export const MaximizeIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} viewBox="0 0 512 512" ref={ref}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      enableBackground="new 0 0 512 512"
      height="512"
      viewBox="0 0 512 512"
      width="512"
    >
      <path d="m512 32v150c0 17.7-14.3 32-32 32s-32-14.3-32-32v-72.7l-120.2 120.2c-6.2 6.2-14.4 9.4-22.6 9.4s-16.4-3.1-22.6-9.4c-12.5-12.5-12.5-32.8 0-45.3l120.1-120.2h-72.7c-17.7 0-32-14.3-32-32s14.3-32 32-32h150c17.7 0 32 14.3 32 32zm-327.8 250.5-120.2 120.2v-72.7c0-17.7-14.3-32-32-32s-32 14.3-32 32v150c0 17.7 14.3 32 32 32h150c17.7 0 32-14.3 32-32s-14.3-32-32-32h-72.7l120.2-120.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
    </svg>
  </SvgIcon>
));
