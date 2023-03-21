import React from 'react';
import type { ButtonAppearance } from 'components/Button';
import type { Size, ThemeColorVariants } from 'core/types';
import { useStyledChildren } from './useStyledChildren';
import * as Styled from './styles';

export interface ButtonGroupProps extends React.PropsWithChildren {
  size?: Size;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  disabled?: boolean;
  color?: ThemeColorVariants;
  appearance?: ButtonAppearance;
  style?: React.CSSProperties;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  size = 'medium',
  className = '',
  disabled = false,
  color = 'primary',
  orientation = 'horizontal',
  appearance = 'filled',
  style = {},
  children = null
}) => {
  const styledChildren = useStyledChildren(children, size, color, disabled, appearance);

  return (
    <Styled.ButtonGroupRoot orientation={orientation} className={className} style={style}>
      {styledChildren}
    </Styled.ButtonGroupRoot>
  );
};

export default ButtonGroup;
