import React from 'react';
import type { IconClassKey, IconColorVariants } from './types';
import type { Classes } from 'jss';
import { mergeClasses } from 'core/utils';
import { useStyles } from './useStyles';

export interface SvgIconProps extends React.PropsWithChildren {
  size?: number;
  color?: IconColorVariants;
  className?: string;
  classes?: Classes<IconClassKey>;
  style?: React.CSSProperties;
  testId?: string;
  viewBox?: string;
}

const SvgIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (
    {
      color = 'default',
      className = '',
      classes = {},
      style = {},
      testId = '',
      size = 48,
      viewBox = '0 0 48 48',
      children,
      ...props
    },
    ref
  ) => {
    const classNames = classes ? mergeClasses(useStyles({ color }), classes) : useStyles({ color });

    return (
      <svg
        {...props}
        ref={ref}
        className={classNames.root}
        style={style}
        data-testid={testId}
        width={size}
        height={size}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
      >
        {children}
      </svg>
    );
  }
);

export default SvgIcon;
