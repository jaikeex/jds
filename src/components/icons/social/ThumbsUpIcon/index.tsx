import React from 'react';
import type { SvgIconProps } from '@components/icons';
import { SvgIcon } from '@components/icons';

export const ThumbsUpIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M15.7 42q-1.25 0-2.125-.875T12.7 39V17.6q0-.55.225-1.1t.625-.95L23.9 4.65q.7-.7 1.675-.85.975-.15 1.825.35t1.275 1.4q.425.9.225 1.85l-1.9 9h16q1.15 0 2.075.925Q46 18.25 46 19.4v4.1q0 .55-.125 1.275-.125.725-.375 1.275l-5.8 13.4q-.45 1.05-1.475 1.8Q37.2 42 36.05 42Zm-8.85 0q-1.15 0-2-.85-.85-.85-.85-2v-19.9q0-1.15.85-2 .85-.85 2-.85t2 .85q.85.85.85 2v19.9q0 1.15-.85 2-.85.85-2 .85Z"
      />
    </SvgIcon>
  )
);
