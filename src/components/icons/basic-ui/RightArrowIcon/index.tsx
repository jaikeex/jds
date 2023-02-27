import React from 'react';
import type { SvgIconProps } from '@components/icons';
import { SvgIcon } from '@components/icons';

export const RightArrowIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} viewBox="0 0 512 512" ref={ref}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="m0 256a32 32 0 0 1 32-32h370.745l-98.545-98.551a32 32 0 1 1 45.254-45.255l153.173 153.179a32 32 0 0 1 0 45.254l-153.178 153.179a32 32 0 1 1 -45.249-45.255l98.545-98.551h-370.745a32 32 0 0 1 -32-32z"
      />
    </SvgIcon>
  )
);
