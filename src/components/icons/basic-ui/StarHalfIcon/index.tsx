import React from 'react';
import type { SvgIconProps } from '@components/icons';
import { SvgIcon } from '@components/icons';

export const StarHalfIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M24 13.7v19.35l7.85 4.75-2.1-8.9 6.9-6-9.1-.8Zm0 22.85-9.3 5.6q-.4.25-.85.225-.45-.025-.8-.275-.35-.25-.525-.65-.175-.4-.075-.9l2.45-10.6-8.2-7.15q-.4-.35-.475-.775-.075-.425.025-.825.1-.4.45-.675t.85-.325l10.85-.95 4.2-10q.2-.45.6-.675.4-.225.8-.225t.8.225q.4.225.6.675l4.2 10 10.85.95q.5.05.85.325t.45.675q.1.4.025.825-.075.425-.475.775l-8.2 7.15 2.45 10.6q.1.5-.075.9t-.525.65q-.35.25-.8.275-.45.025-.85-.225Z"
      />
    </SvgIcon>
  )
);
