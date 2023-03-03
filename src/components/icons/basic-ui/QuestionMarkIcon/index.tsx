import React from 'react';
import type { SvgIconProps } from 'components/icons/SvgIcon';
import SvgIcon from 'components/icons/SvgIcon';

export const QuestionMarkIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M24.05 31.5q-1.15 0-1.825-.8t-.525-1.95q.25-1.8 1.075-3.2.825-1.4 2.525-2.9 2.1-1.9 3.225-3.525t1.125-3.475q0-2.25-1.5-3.75t-4.2-1.5q-1.85 0-3.075.75T18.9 13q-.55.8-1.4 1.1-.85.3-1.65-.05-1-.4-1.225-1.45-.225-1.05.325-1.9 1.4-2.05 3.675-3.375Q20.9 6 23.95 6q5 0 7.7 2.775t2.7 6.675q0 2.4-1.025 4.35-1.025 1.95-3.275 4.1-1.75 1.7-2.45 2.75-.7 1.05-.9 2.4-.15 1.05-.9 1.75t-1.75.7Zm-.1 12.5q-1.45 0-2.475-1.025Q20.45 41.95 20.45 40.5q0-1.45 1.025-2.475Q22.5 37 23.95 37q1.45 0 2.475 1.025Q27.45 39.05 27.45 40.5q0 1.45-1.025 2.475Q25.4 44 23.95 44Z"
    />
  </SvgIcon>
));
