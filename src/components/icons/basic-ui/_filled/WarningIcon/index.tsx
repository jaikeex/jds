import React from 'react';
import type { SvgIconProps } from 'components/icons/SvgIcon';
import SvgIcon from 'components/icons/SvgIcon';

export const WarningIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref} viewBox="0 96 960 960">
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M92 936q-9 0-15.652-4.125Q69.696 927.75 66 921q-4.167-6.6-4.583-14.3Q61 899 66 891l388-670q5-8 11.5-11.5T480 206q8 0 14.5 3.5T506 221l388 670q5 8 4.583 15.7-.416 7.7-4.583 14.3-3.696 6.75-10.348 10.875Q877 936 868 936H92Zm392.175-117q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5Zm0-111q12.825 0 21.325-8.625T514 678V514q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T454 514v164q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625Z"
    />
  </SvgIcon>
));
