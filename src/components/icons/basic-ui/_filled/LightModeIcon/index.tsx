import React from 'react';
import type { SvgIconProps } from '@components/icons';
import { SvgIcon } from '@components/icons';

export const LightModeIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M24 9.5q-.65 0-1.075-.425Q22.5 8.65 22.5 8V3.5q0-.65.425-1.075Q23.35 2 24 2q.65 0 1.075.425.425.425.425 1.075V8q0 .65-.425 1.075Q24.65 9.5 24 9.5Zm10.25 4.25q-.45-.45-.45-1.05 0-.6.45-1.05l3.15-3.2Q37.85 8 38.475 8t1.075.45Q40 8.9 40 9.5q0 .6-.45 1.05l-3.2 3.2q-.45.45-1.05.45-.6 0-1.05-.45ZM40 25.5q-.65 0-1.075-.425Q38.5 24.65 38.5 24q0-.65.425-1.075Q39.35 22.5 40 22.5h4.5q.65 0 1.075.425Q46 23.35 46 24q0 .65-.425 1.075-.425.425-1.075.425ZM24 46q-.65 0-1.075-.425-.425-.425-.425-1.075V40q0-.65.425-1.075Q23.35 38.5 24 38.5q.65 0 1.075.425.425.425.425 1.075v4.5q0 .65-.425 1.075Q24.65 46 24 46ZM11.65 13.75l-3.2-3.15Q8 10.15 8 9.525t.45-1.075Q8.9 8 9.5 8q.6 0 1.05.45l3.2 3.2q.45.45.45 1.05 0 .6-.45 1.05-.45.4-1.075.4t-1.025-.4Zm25.8 25.8-3.2-3.2q-.45-.45-.45-1.05 0-.6.45-1.05.4-.4 1.025-.4.625 0 1.075.4l3.25 3.15q.45.45.425 1.075Q40 39.1 39.6 39.55q-.45.45-1.075.45t-1.075-.45ZM3.5 25.5q-.65 0-1.075-.425Q2 24.65 2 24q0-.65.425-1.075Q2.85 22.5 3.5 22.5H8q.65 0 1.075.425Q9.5 23.35 9.5 24q0 .65-.425 1.075Q8.65 25.5 8 25.5Zm4.95 14.05Q8 39.1 8 38.5q0-.6.45-1.05l3.2-3.2q.4-.4 1.025-.4.625 0 1.075.4.45.45.45 1.075t-.45 1.075l-3.15 3.15q-.45.45-1.075.45t-1.075-.45ZM24 36q-5 0-8.5-3.5T12 24q0-5 3.5-8.5T24 12q5 0 8.5 3.5T36 24q0 5-3.5 8.5T24 36Z"
    />
  </SvgIcon>
));
