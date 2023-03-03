import React from 'react';
import type { SvgIconProps } from 'components/icons/SvgIcon';
import SvgIcon from 'components/icons/SvgIcon';

export const BoltIconOutlined = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M19.65 39.75 33.6 23h-9l1.8-14.3L13.75 27h7.7ZM18 30h-7.15q-.9 0-1.325-.8-.425-.8.125-1.55l16.9-24.4q.4-.55 1-.75.6-.2 1.2.05t.95.8q.35.55.25 1.2L28 20h8.8q.95 0 1.35.85.4.85-.2 1.6L19.4 44.7q-.4.5-1.025.65-.625.15-1.175-.1-.55-.3-.875-.825Q16 43.9 16.1 43.25Zm5.65-5.75Z"
    />
  </SvgIcon>
));
