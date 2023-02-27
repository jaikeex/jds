import React from 'react';
import type { SvgIconProps } from '@components/icons';
import { SvgIcon } from '@components/icons';

export const DownArrowIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} viewBox="0 0 512 512" ref={ref}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="m288 32v370.745l98.551-98.551a32 32 0 0 1 45.255 45.255l-153.179 153.178a32 32 0 0 1 -45.254 0l-153.179-153.178a32 32 0 0 1 45.255-45.255l98.551 98.551v-370.745a32 32 0 0 1 64 0z"
      />
    </SvgIcon>
  )
);
