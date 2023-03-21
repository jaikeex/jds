import React from 'react';
import type { TypographyVariants } from './types';
import { typographyVariantMap } from './types';
import * as Styled from './styles';
import type { ThemeColorVariantsWithDefault } from 'core/types';

export interface TypographyProps extends React.PropsWithChildren {
  className?: string;
  color?: ThemeColorVariantsWithDefault;
  gutterBottom?: boolean;
  hyphens?: boolean;
  noWrap?: boolean;
  style?: React.CSSProperties;
  textAlign?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  upperCase?: boolean;
  variant?: TypographyVariants;
}

const Typography: React.FC<TypographyProps> = ({
  children = null,
  className = '',
  color = 'default',
  gutterBottom = false,
  hyphens = false,
  noWrap = false,
  style = {},
  textAlign = 'inherit',
  upperCase = false,
  variant = 'body1'
}) => {
  const Component = typographyVariantMap[variant] as keyof JSX.IntrinsicElements;

  const styleProps = {
    variant,
    color,
    upperCase,
    hyphens,
    gutterBottom,
    noWrap,
    textAlign
  };

  return (
    <Styled.TypographyRoot {...styleProps} as={Component} style={style} className={className}>
      {children}
    </Styled.TypographyRoot>
  );
};

Typography.displayName = 'Typography';
export default Typography;
