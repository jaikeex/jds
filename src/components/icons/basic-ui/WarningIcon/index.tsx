import React from 'react';
import type { SvgIconProps } from '@components/icons';
import { SvgIcon } from '@components/icons';

export const WarningIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon {...props} ref={ref}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M24 42q-1.45 0-2.475-1.025Q20.5 39.95 20.5 38.5q0-1.45 1.025-2.475Q22.55 35 24 35q1.45 0 2.475 1.025Q27.5 37.05 27.5 38.5q0 1.45-1.025 2.475Q25.45 42 24 42Zm0-12q-1.45 0-2.475-1.025Q20.5 27.95 20.5 26.5v-17q0-1.45 1.025-2.475Q22.55 6 24 6q1.45 0 2.475 1.025Q27.5 8.05 27.5 9.5v17q0 1.45-1.025 2.475Q25.45 30 24 30Z"
      />
    </SvgIcon>
  )
);
