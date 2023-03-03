import React from 'react';
import type { SvgIconProps } from 'components/icons/SvgIcon';
import SvgIcon from 'components/icons/SvgIcon';

export const LoginIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M19.1 31.95q-.55-.5-.55-1.225 0-.725.55-1.225l3.8-3.8H7.25q-.7 0-1.2-.5t-.5-1.2q0-.75.5-1.225.5-.475 1.2-.475H22.8l-3.9-3.85q-.45-.45-.45-1.15t.55-1.25q.45-.5 1.175-.5.725 0 1.275.5l6.75 6.8q.3.3.4.6.1.3.1.6 0 .35-.1.625t-.4.575L21.45 32q-.45.45-1.15.45t-1.2-.5Zm7 10.35q-.75 0-1.225-.5-.475-.5-.475-1.2 0-.75.475-1.225.475-.475 1.225-.475H39V9.1H26.1q-.75 0-1.225-.5-.475-.5-.475-1.2 0-.75.475-1.225Q25.35 5.7 26.1 5.7H39q1.4 0 2.425 1.025T42.45 9.1v29.8q0 1.35-1.025 2.375T39 42.3Z"
    />
  </SvgIcon>
));
