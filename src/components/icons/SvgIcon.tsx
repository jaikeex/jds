import React from 'react';
import type { ThemeColorVariantsWithDefault } from 'core/types';
import * as Styled from './styles';

export interface SvgIconProps extends React.PropsWithChildren {
  size?: number;
  color?: ThemeColorVariantsWithDefault;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  testId?: string;
  viewBox?: string;
}

const SvgIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (
    {
      color = 'default',
      className = '',
      id = '',
      style = {},
      testId = '',
      size = 32,
      viewBox = '0 0 48 48',
      children,
      ...props
    },
    ref
  ) => (
    <Styled.IconRoot
      {...props}
      as={'svg'}
      color={color}
      ref={ref}
      id={id}
      className={className}
      style={style}
      data-testid={testId}
      width={size}
      height={size}
      viewBox={viewBox}
      shapeRendering="geometricPrecision"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
    >
      {children}
    </Styled.IconRoot>
  )
);

export default SvgIcon;
