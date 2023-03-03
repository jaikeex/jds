import React from 'react';
import type { SvgIconProps } from '@components/icons/SvgIcon';
import SvgIcon from '@components/icons/SvgIcon';

export const SendIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M8.1 39.1q-.75.3-1.425-.125T6 37.75V28.9q0-.55.325-.95.325-.4.825-.5L21.1 24 7.15 20.45q-.5-.1-.825-.5Q6 19.55 6 19v-8.75q0-.8.675-1.225Q7.35 8.6 8.1 8.9l32.6 13.7q.9.4.9 1.4 0 1-.9 1.4Z"
    />
  </SvgIcon>
));
