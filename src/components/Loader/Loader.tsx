import React from 'react';
import type { Size, ThemeColorVariantsWithDefault } from 'core/types';
import * as Styled from './styles';

export interface LoaderProps {
  /**
   * CSS class applied to the root component.
   */
  className?: string;
  /**
   * The color of the loader component.
   */
  color?: ThemeColorVariantsWithDefault;
  /**
   * The size of the component.
   */
  size?: Size;
  /**
   * CSS styles applied to the component.
   */
  style?: React.CSSProperties;
}

const Loader: React.FC<LoaderProps> = ({ className = '', color = 'default', size = 'medium', style = {} }) => (
  <Styled.LoaderRoot style={style} color={color} size={size} className={className} />
);

export default Loader;
