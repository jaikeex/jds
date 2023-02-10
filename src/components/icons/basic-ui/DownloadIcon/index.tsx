import React from 'react';
import { SvgIcon, SvgIconProps } from '@components/icons';

export const DownloadIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => {
    return (
      <SvgIcon {...props} ref={ref}>
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M24 31.4q-.35 0-.625-.1t-.575-.4l-7.7-7.7q-.5-.5-.475-1.2.025-.7.525-1.2.55-.5 1.25-.5t1.2.5l4.7 4.75V8.85q0-.7.5-1.2t1.2-.5q.75 0 1.225.5.475.5.475 1.2v16.7l4.75-4.75q.5-.5 1.2-.5t1.25.5q.5.5.5 1.2t-.5 1.2l-7.7 7.7q-.3.3-.6.4-.3.1-.6.1Zm-13.2 9.15q-1.35 0-2.375-1T7.4 37.15v-6q0-.7.5-1.2t1.25-.5q.7 0 1.175.5.475.5.475 1.2v6h26.35v-6q0-.7.5-1.2t1.25-.5q.7 0 1.175.5.475.5.475 1.2v6q0 1.4-1 2.4t-2.4 1Z"
        />
      </SvgIcon>
    );
  }
);
