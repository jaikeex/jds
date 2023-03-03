import React from 'react';
import type { SvgIconProps } from '@components/icons/SvgIcon';
import SvgIcon from '@components/icons/SvgIcon';

export const AddUserIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M38 28q-.65 0-1.075-.425-.425-.425-.425-1.075v-5h-5q-.65 0-1.075-.425Q30 20.65 30 20q0-.65.425-1.075.425-.425 1.075-.425h5v-5q0-.65.425-1.075Q37.35 12 38 12q.65 0 1.075.425.425.425.425 1.075v5h5q.65 0 1.075.425Q46 19.35 46 20q0 .65-.425 1.075-.425.425-1.075.425h-5v5q0 .65-.425 1.075Q38.65 28 38 28Zm-20-4.05q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM3.5 40q-.65 0-1.075-.425Q2 39.15 2 38.5v-3.2q0-1.75.9-3.175Q3.8 30.7 5.4 30q3.75-1.65 6.675-2.325Q15 27 18 27t5.925.675Q26.85 28.35 30.55 30q1.6.75 2.525 2.15.925 1.4.925 3.15v3.2q0 .65-.425 1.075Q33.15 40 32.5 40Z"
    />
  </SvgIcon>
));
