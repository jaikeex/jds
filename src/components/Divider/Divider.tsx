import React from 'react';
import type { ThemeColorVariantsWithDefault } from 'core/types';
import * as Styled from './styles';

export interface DividerProps {
  className?: string;
  color?: ThemeColorVariantsWithDefault;
  component?: keyof JSX.IntrinsicElements;
  flexItem?: boolean;
  lineStrength?: string | number;
  removeMargin?: boolean;
  orientation?: 'horizontal' | 'vertical';
}

const Divider: React.FC<DividerProps> = ({
  className = '',
  color = 'default',
  component = 'div',
  flexItem = false,
  lineStrength = 1,
  removeMargin = false,
  orientation = 'horizontal'
}) => {
  const Component = component;

  const styleProps = {
    color,
    flexItem,
    removeMargin,
    orientation
  };

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
    <Styled.DividerRoot {...styleProps} as={Component} className={className}>
      <hr style={styles()} />
    </Styled.DividerRoot>
  );
};

export default Divider;
