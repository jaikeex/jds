import React from 'react';
import type { Size, ThemeColorVariantsWithDefault } from 'core/types';
import * as Styled from './styles';

export interface LoaderProps {
  className?: string;
  color?: ThemeColorVariantsWithDefault;
  size?: Size;
  style?: React.CSSProperties;
}

const Loader: React.FC<LoaderProps> = ({ className = '', color = 'default', size = 'medium', style = {} }) => (
  <Styled.LoaderRoot style={style} color={color} size={size} className={className} />
);

export default Loader;
