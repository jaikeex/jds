import React from 'react';
import type { SvgIconProps } from '@components/icons';
import { SvgIcon } from '@components/icons';

export const OpenOutsideIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref} viewBox="0 96 960 960">
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h249q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T429 276H180v600h600V627q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T840 627v249q0 24-18 42t-42 18H180Zm181.13-241.391Q353 686 352.5 674q-.5-12 8.5-21l377-377H549q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T549 216h261q12.75 0 21.375 8.625T840 246v261q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T780 507V319L403 696q-8.442 8-20.721 8t-21.149-9.391Z"
      />
    </SvgIcon>
  )
);
