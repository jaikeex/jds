import { ColorVariants } from '@core/types';
import React from 'react';
import './Typography.styles.scss';
import classNames from 'classnames';
import { classNameColor } from '@core/utils';

const variantMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subHeading1: 'h6',
  subHeading2: 'h6',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  caption: 'p',
  button: 'span',
  label: 'span'
};

export interface TypographyProps {
  variant?: keyof typeof variantMap;
  color?: ColorVariants;
  textAlign?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  marginBottom?: number;
  marginTop?: number;
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
  marginBottom,
  marginTop,
  style,
  children
}) => {
  const Component = variantMap[variant] as keyof JSX.IntrinsicElements;

  const classes = classNames(
    'jds-typography',
    `jds-typography--variant--${variant}`,
    classNameColor('jds-typography', color),
    className
  );

  const getStyles = () => {
    const styles: React.CSSProperties = {
      textAlign: textAlign,
      marginBottom: `${marginBottom}px`,
      marginTop: `${marginTop}px`,
      ...style
    };

    if (noWrap) {
      styles.overflow = 'hidden';
      styles.whiteSpace = 'nowrap';
      styles.textOverflow = 'ellipsis';
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
