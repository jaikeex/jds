import type { SvgIconProps } from 'components/icons';
import { SvgIcon } from 'components/icons';
import * as React from 'react';

const RadioBackgroundIcon: React.FC<SvgIconProps> = ({ ...props }): JSX.Element => (
  <SvgIcon viewBox="0 0 24 24" {...props} style={{ position: 'absolute' }}>
    <path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0z" fill="none" />{' '}
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
    />
  </SvgIcon>
);

export default RadioBackgroundIcon;
