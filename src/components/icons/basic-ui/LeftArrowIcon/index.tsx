import React from 'react';
import { SvgIcon, SvgIconProps } from '@components/icons';

export const LeftArrowIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon {...props} viewBox="0 0 512 512" ref={ref}>
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="m512 256a32 32 0 0 1 -32 32h-370.745l98.55 98.551a32 32 0 0 1 -45.254 45.255l-153.178-153.179a32 32 0 0 1 0-45.254l153.178-153.179a32 32 0 0 1 45.254 45.255l-98.55 98.551h370.745a32 32 0 0 1 32 32z"
        />
      </SvgIcon>
    );
  }
);
