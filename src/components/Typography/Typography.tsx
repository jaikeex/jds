import React from 'react';
import type { TypographyVariants } from './types';
import { typographyVariantMap } from './types';
import * as Styled from './styles';
import type { ThemeColorVariantsWithDefault } from 'core/types';
import type { Property } from 'csstype';

export interface TypographyProps extends React.PropsWithChildren {
  bold?: boolean;
  className?: string;
  color?: ThemeColorVariantsWithDefault;
  component?: React.ElementType;
  disabled?: boolean;
  gutterBottom?: boolean;
  hyphens?: boolean;
  noWrap?: boolean;
  style?: React.CSSProperties;
  textAlign?: Property.TextAlign;
  upperCase?: boolean;
  variant?: TypographyVariants;
}

const Typography: React.FC<TypographyProps> = ({
  bold = false,
  children = null,
  className = '',
  color = 'default',
  component = undefined,
  disabled = false,
  gutterBottom = false,
  hyphens = false,
  noWrap = false,
  style = {},
  textAlign = 'inherit',
  upperCase = false,
  variant = 'body1'
}) => {
  const Component = component || (typographyVariantMap[variant] as keyof JSX.IntrinsicElements);

  const styleProps = {
    variant,
    color,
    upperCase,
    bold,
    hyphens,
    gutterBottom,
    noWrap,
    textAlign
  };

  return (
    <Styled.TypographyRoot {...styleProps} as={Component} style={style} className={className} disabled={disabled}>
      {children}
    </Styled.TypographyRoot>
  );
};

Typography.displayName = 'Typography';
export default Typography;
