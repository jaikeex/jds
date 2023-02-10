import React from 'react';
import { SvgIcon, SvgIconProps } from '@components/icons';

export const MoreHorizontalIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon {...props} ref={ref}>
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M10.1 26.55q-1 0-1.75-.75T7.6 24q0-1.05.75-1.8t1.8-.75q1 0 1.75.75t.75 1.8q0 1.05-.75 1.8t-1.8.75Zm13.9 0q-1.05 0-1.8-.75t-.75-1.8q0-1.05.75-1.8t1.8-.75q1.05 0 1.8.75t.75 1.8q0 1.05-.75 1.8t-1.8.75Zm13.85 0q-1.05 0-1.775-.75-.725-.75-.725-1.8t.75-1.8q.75-.75 1.8-.75t1.775.75q.725.75.725 1.8t-.75 1.8q-.75.75-1.8.75Z"
        />
      </SvgIcon>
    );
  }
);
