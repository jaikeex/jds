import React from 'react';
import type { SvgIconProps } from 'components/icons/SvgIcon';
import SvgIcon from 'components/icons/SvgIcon';

export const RemoveIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref} viewBox="0 0 24 24">
    <path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0V0z" fill="none" />
    <path xmlns="http://www.w3.org/2000/svg" d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z" />
  </SvgIcon>
));
