import React from 'react';
import type { SvgIconProps } from '@components/icons/SvgIcon';
import SvgIcon from '@components/icons/SvgIcon';

export const BoltIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M21.15 42.3q-.55 0-.85-.35-.3-.35-.2-.9l1.85-13.1h-7.4q-.6 0-.85-.5t.05-.95l12-20.15q.15-.25.525-.45T27 5.7q.55 0 .85.35.3.35.2.9L26.2 20h7.3q.55 0 .85.5.3.5 0 .95L22.4 41.65q-.15.25-.525.45t-.725.2Z"
    />
  </SvgIcon>
));
