import React from 'react';
import type { ButtonAppearance } from 'components/Button';
import type { Size, ThemeColorVariants } from 'core/types';
import { useStyledChildren } from './useStyledChildren';
import * as Styled from './styles';

export interface ButtonGroupProps extends React.PropsWithChildren, React.ComponentProps<'div'> {
  /**
   * The appearance of child buttons.
   */
  appearance?: ButtonAppearance;
  /**
   * Css class passed to the root component.
   */
  className?: string;
  /**
   * The color of child buttons. Can be any of the theme colors.
   */
  color?: ThemeColorVariants;
  /**
   * Size of child buttons.
   */
  size?: Size;
  /**
   * Dictates whether the buttons are lined up horizontally or vertically
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * If true, all buttons inside the group are disabled.
   */
  disabled?: boolean;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  appearance = 'filled',
  className = '',
  color = 'primary',
  disabled = false,
  orientation = 'horizontal',
  size = 'medium',
  children = null,
  ...props
}) => {
  const styledChildren = useStyledChildren(children, size, color, disabled, appearance);

  return (
    <Styled.ButtonGroupRoot orientation={orientation} className={className} {...props}>
      {styledChildren}
    </Styled.ButtonGroupRoot>
  );
};

export default ButtonGroup;
