import React from 'react';
import type { SvgIconProps } from 'components/icons/SvgIcon';
import SvgIcon from 'components/icons/SvgIcon';

export const UploadIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M24 40q-.65 0-1.075-.425-.425-.425-.425-1.075V21.45l-4.95 4.95q-.45.45-1.05.425-.6-.025-1.05-.475-.45-.45-.45-1.075t.45-1.075l7.5-7.5q.25-.25.5-.35.25-.1.55-.1.3 0 .55.1.25.1.5.35l7.55 7.55q.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.075.45t-1.075-.45l-4.95-4.9V38.5q0 .65-.425 1.075Q24.65 40 24 40ZM9.5 18.15q-.65 0-1.075-.425Q8 17.3 8 16.65V11q0-1.2.9-2.1Q9.8 8 11 8h26q1.2 0 2.1.9.9.9.9 2.1v5.65q0 .65-.425 1.075-.425.425-1.075.425-.65 0-1.075-.425Q37 17.3 37 16.65V11H11v5.65q0 .65-.425 1.075-.425.425-1.075.425Z"
    />
  </SvgIcon>
));
