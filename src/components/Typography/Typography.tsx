import { ColorVariants } from '@core/types';
import React from 'react';
import './Typography.styles.scss';
import classNames from 'classnames';
import { typographyVariantMap, TypographyVariants } from '@core/types';

export interface TypographyProps {
  variant?: TypographyVariants;
  color?: ColorVariants | `#${string}`;
  textAlign?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  gutterBottom?: boolean;
  noWrap?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  color = 'default',
  textAlign = 'inherit',
  className = '',
  noWrap = false,
  gutterBottom = false,
  style,
  children
}) => {
  const Component = typographyVariantMap[
    variant
  ] as keyof JSX.IntrinsicElements;
  const colorClassName = `jds-typography--color--${color}`;

  const classes = classNames(
    'jds-typography',
    `jds-typography--variant--${variant}`,
    { [colorClassName]: !color.startsWith('#') },
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
