import React from 'react';
import type { SvgIconProps } from '@components/icons';
import { SvgIcon } from '@components/icons';

export const SwapVerticalIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M28.8 38.2V23.9q0-.65.425-1.075.425-.425 1.075-.425.65 0 1.075.425.425.425.425 1.075v14.35l5.1-5.05q.4-.4 1-.4t1.05.45q.45.45.45 1.05 0 .6-.45 1.05L31.4 42.9q-.25.25-.525.35-.275.1-.525.1-.3 0-.575-.1-.275-.1-.475-.35l-7.6-7.65q-.4-.4-.4-1t.45-1.05q.4-.45 1.025-.425.625.025 1.075.475ZM16.1 9.7l-5 5q-.4.4-1 .4t-1.05-.45q-.45-.45-.45-1.05 0-.6.45-1.05L16.6 5q.25-.25.5-.35.25-.1.55-.1.3 0 .55.1.25.1.5.35l7.6 7.6q.4.4.4 1t-.45 1.05q-.45.45-1.05.45-.6 0-1.05-.45l-5.05-5V24q0 .65-.425 1.075-.425.425-1.075.425-.65 0-1.075-.425Q16.1 24.65 16.1 24Z"
      />
    </SvgIcon>
  )
);
