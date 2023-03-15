import React from 'react';
import type { ThemeColorVariantsWithDefault } from 'core/types';
import type { DividerClassKey } from './types';
import type { Classes } from 'jss';
import { mergeClasses } from 'core/utils';
import { useStyles } from './useStyles';
import clsx from 'clsx';

export interface DividerProps {
  className?: string;
  classes?: Classes<DividerClassKey>;
  color?: ThemeColorVariantsWithDefault;
  component?: keyof JSX.IntrinsicElements;
  flexItem?: boolean;
  lineStrength?: string | number;
  removeMargin?: boolean;
  orientation?: 'horizontal' | 'vertical';
}

const Divider: React.FC<DividerProps> = ({
  className = '',
  classes = {},
  color = 'default',
  component = 'div',
  flexItem = false,
  lineStrength = 1,
  removeMargin = false,
  orientation = 'horizontal'
}) => {
  const Component = component;
  const classNames = mergeClasses(useStyles({ color, removeMargin, flexItem, orientation }), classes);

  const styles = () => {
    const styles: React.CSSProperties = {};
    if (orientation === 'horizontal') {
      styles.height = typeof lineStrength === 'string' ? lineStrength : `${lineStrength}px`;
    }
    if (orientation === 'vertical') {
      styles.width = typeof lineStrength === 'string' ? lineStrength : `${lineStrength}px`;
    }

    return styles;
  };

  return (
    <Component className={clsx(classNames.root, className)}>
      <hr style={styles()} />
    </Component>
  );
};

export default Divider;
