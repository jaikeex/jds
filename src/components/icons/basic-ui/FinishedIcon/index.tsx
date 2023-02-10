import React from 'react';
import { SvgIcon, SvgIconProps } from '@components/icons';

export const FinishedIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon {...props} ref={ref}>
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M11.5 40q-.65 0-1.075-.425Q10 39.15 10 38.5q0-.65.425-1.075Q10.85 37 11.5 37h25q.65 0 1.075.425Q38 37.85 38 38.5q0 .65-.425 1.075Q37.15 40 36.5 40Zm7.5-9.15q-.3 0-.55-.1-.25-.1-.5-.35l-9.2-9.2q-.45-.45-.425-1.05.025-.6.475-1.05.45-.45 1.05-.45.6 0 1.05.45l8.1 8.1L37.15 9.05q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.075t-.45 1.075l-19.2 19.2q-.25.25-.5.35-.25.1-.55.1Z"
        />
      </SvgIcon>
    );
  }
);
