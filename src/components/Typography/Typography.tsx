import React from 'react';
import type { ThemeColorVariantsWithDefault, TypographyVariants } from 'core/types';
import { typographyVariantMap } from 'core/types';
import { useStyles } from './useStyles';
import clsx from 'clsx';
import type { TypographyClassKey } from './types';
import type { Classes } from 'jss';
import { mergeClasses } from 'core/utils';

export interface TypographyProps extends React.PropsWithChildren {
  classes?: Classes<TypographyClassKey>;
  className?: string;
  color?: ThemeColorVariantsWithDefault;
  gutterBottom?: boolean;
  noWrap?: boolean;
  style?: React.CSSProperties;
  textAlign?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  upperCase?: boolean;
  variant?: TypographyVariants;
}

const Typography: React.FC<TypographyProps> = ({
  children = null,
  classes = undefined,
  className = '',
  color = 'default',
  gutterBottom = false,
  noWrap = false,
  style = {},
  textAlign = 'inherit',
  upperCase = false,
  variant = 'body1'
}) => {
  const Component = typographyVariantMap[variant] as keyof JSX.IntrinsicElements;
  const classNames = classes ? mergeClasses(useStyles({ color }), classes) : useStyles({ color });

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

    return styles;
  };

  return (
    <Component
      className={clsx(classNames.root, classNames[variant], upperCase && classNames.uppercase, className)}
      style={getStyles()}
    >
      {children}
    </Component>
  );
};

export default Typography;
