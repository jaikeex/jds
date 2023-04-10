import React from 'react';
import type { ThemeColorVariantsWithDefault } from 'core/types';
import * as Styled from './styles';

export interface DividerProps {
  /**
   * Css class passed to the root component.
   */
  className?: string;
  /**
   * The color of the divider. Can be any of the theme colors or `default`.
   */
  color?: ThemeColorVariantsWithDefault;
  /**
   * If specified, the divider will be rendered inside this HMTL element. Default is `div`
   */
  component?: keyof JSX.IntrinsicElements;
  /**
   * If true, the divider will maintain the correct dimensions when rendered inside a flex container.
   */
  flexItem?: boolean;
  /**
   * The strength of the divider line.
   */
  lineStrength?: string | number;
  /**
   * If true, will remove margin from both sides of the divider.
   */
  removeMargin?: boolean;
  /**
   * Specifies the direction of the divider.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * CSS styles passed to the <hr> element.
   */
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
