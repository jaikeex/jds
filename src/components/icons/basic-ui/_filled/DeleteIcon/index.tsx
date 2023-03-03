import React from 'react';
import type { SvgIconProps } from 'components/icons/SvgIcon';
import SvgIcon from 'components/icons/SvgIcon';

export const DeleteIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M12.95 42.3q-1.4 0-2.4-1.025t-1-2.375V10.6H9q-.75 0-1.225-.5Q7.3 9.6 7.3 8.9q0-.75.475-1.225Q8.25 7.2 9 7.2h8.2q0-.75.5-1.25t1.2-.5h10.2q.7 0 1.2.5t.5 1.25H39q.75 0 1.225.5.475.5.475 1.2 0 .75-.475 1.225-.475.475-1.225.475h-.55v28.3q0 1.35-1 2.375t-2.4 1.025Zm5.25-9.2q0 .65.475 1.125t1.125.475q.7 0 1.15-.475.45-.475.45-1.125V16.35q0-.65-.475-1.125T19.8 14.75q-.7 0-1.15.475-.45.475-.45 1.125Zm8.4 0q0 .65.475 1.125t1.125.475q.7 0 1.15-.475.45-.475.45-1.125V16.35q0-.65-.45-1.125t-1.15-.475q-.7 0-1.15.475-.45.475-.45 1.125Z"
    />
  </SvgIcon>
));
