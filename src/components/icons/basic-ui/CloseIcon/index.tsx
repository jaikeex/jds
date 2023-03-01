import React from 'react';
import type { SvgIconProps } from '@components/icons';
import { SvgIcon } from '@components/icons';

export const CloseIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path d="M24 26.4 13.65 36.75q-.5.5-1.2.5t-1.2-.5q-.5-.5-.5-1.2t.5-1.2L21.6 24 11.25 13.65q-.5-.5-.5-1.2t.5-1.2q.5-.5 1.2-.5t1.2.5L24 21.6l10.35-10.35q.5-.5 1.2-.5t1.2.5q.5.5.5 1.2t-.5 1.2L26.4 24l10.35 10.35q.5.5.5 1.2t-.5 1.2q-.5.5-1.2.5t-1.2-.5Z" />
  </SvgIcon>
));
