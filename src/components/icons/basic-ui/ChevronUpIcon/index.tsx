import React from 'react';
import type { SvgIconProps } from '@components/icons';
import { SvgIcon } from '@components/icons';

export const ChevronUpIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M12.95 29.8q-.5-.55-.525-1.225-.025-.675.475-1.175l9.9-9.9q.3-.3.575-.4.275-.1.625-.1t.625.1q.275.1.575.4l9.9 9.85q.5.45.5 1.175 0 .725-.5 1.225-.5.5-1.225.5-.725 0-1.225-.5L24 21.15l-8.65 8.7q-.45.5-1.175.475-.725-.025-1.225-.525Z"
    />
  </SvgIcon>
));
