import type { ColorVariants } from '@core/types';
import React from 'react';
import './Typography.styles.scss';
import classNames from 'classnames';
import type { TypographyVariants } from '@core/types';
import { typographyVariantMap } from '@core/types';

export interface TypographyProps {
  children?: React.ReactNode;
  className?: string;
  color?: ColorVariants | `#${string}`;
  gutterBottom?: boolean;
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
  noWrap = false,
  style,
  textAlign = 'inherit',
  upperCase = false,
  variant = 'body1'
}) => {
  const Component = typographyVariantMap[
    variant
  ] as keyof JSX.IntrinsicElements;
  const colorClassName = `jds-typography--color--${color}`;

  const classes = classNames(
    'jds-typography',
    `jds-typography--variant--${variant}`,
    {
      [colorClassName]: !color.startsWith('#'),
      'jds-typography--uppercase': upperCase
    },
    className
  );

  const getStyles = () => {
    const styles: React.CSSProperties = {
      textAlign: textAlign,
      ...style
    };

    if (!gutterBottom) {
      styles.marginBottom = 0;
    }

    if (noWrap) {
      styles.overflow = 'hidden';
      styles.whiteSpace = 'nowrap';
      styles.textOverflow = 'ellipsis';
    }

    if (color.startsWith('#')) {
      styles.color = color;
      styles.textDecorationColor = color;
    }

    return styles;
  };

  return (
    <Component className={classes} style={getStyles()}>
      {children}
    </Component>
  );
};

export default Typography;
