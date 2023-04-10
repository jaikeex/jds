import React from 'react';
import type { ThemeColorVariantsWithDefault } from 'core/types';
import * as Styled from './styles';

export interface DividerProps extends React.ComponentProps<'div'> {
  className?: string;
  color?: ThemeColorVariantsWithDefault;
  component?: keyof JSX.IntrinsicElements;
  flexItem?: boolean;
  lineStrength?: string | number;
  removeMargin?: boolean;
  orientation?: 'horizontal' | 'vertical';
  style?: React.CSSProperties;
}

const Divider: React.FC<DividerProps> = ({
  className = '',
  color = 'default',
  component = 'div',
  flexItem = false,
  lineStrength = 1,
  removeMargin = false,
  style = {},
  orientation = 'horizontal',
  ...props
}) => {
  const Component = component;

  const styleProps = {
    color,
    flexItem,
    removeMargin,
    orientation
  };

  const styles = () => {
    const styles: React.CSSProperties = { ...style };
    if (orientation === 'horizontal') {
      styles.height = typeof lineStrength === 'string' ? lineStrength : `${lineStrength}px`;
    }
    if (orientation === 'vertical') {
      styles.width = typeof lineStrength === 'string' ? lineStrength : `${lineStrength}px`;
    }

    return styles;
  };

  return (
    <Styled.DividerRoot {...props} {...styleProps} style={style} as={Component} className={className}>
      <hr style={styles()} />
    </Styled.DividerRoot>
  );
};

export default Divider;
