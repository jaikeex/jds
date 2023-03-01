import React from 'react';
import type { SvgIconProps } from '@components/icons';
import { SvgIcon } from '@components/icons';

export const CheckmarkCircleIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M24 44.3q-4.25 0-7.95-1.6t-6.425-4.325Q6.9 35.65 5.3 31.95 3.7 28.25 3.7 24t1.575-7.95Q6.85 12.35 9.6 9.625 12.35 6.9 16.05 5.3T24 3.7q3.25 0 6.15.925 2.9.925 5.35 2.625l-3.2 3.2q-1.8-1.1-3.9-1.725Q26.3 8.1 24 8.1q-6.65 0-11.275 4.625T8.1 24q0 6.65 4.625 11.275T24 39.9q6.65 0 11.275-4.625T39.9 24q0-.9-.1-1.75t-.25-1.65l3.55-3.55q.6 1.65.9 3.375.3 1.725.3 3.575 0 4.25-1.6 7.95t-4.325 6.45q-2.725 2.75-6.425 4.325Q28.25 44.3 24 44.3Zm-2.8-11-8.65-8.65 3.1-3.1 5.6 5.6 20-20 3.05 3.05Z"
    />
  </SvgIcon>
));
