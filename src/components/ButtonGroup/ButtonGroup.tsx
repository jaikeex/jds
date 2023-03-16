import React from 'react';
import type { ButtonAppearance, ButtonSize } from 'components/Button';
import { mergeClasses } from 'core/utils';
import type { ButtonGroupClassKey } from './types';
import type { Classes } from 'jss';
import { useStyles } from './useStyles';
import type { ThemeColorVariants } from 'core/types';
import { useStyledChildren } from './useStyledChildren';
import clsx from 'clsx';

export interface ButtonGroupProps {
  size?: ButtonSize;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  disabled?: boolean;
  color?: ThemeColorVariants;
  classes?: Classes<ButtonGroupClassKey>;
  appearance?: ButtonAppearance;
  style?: React.CSSProperties;
  children?: React.ReactElement | React.ReactElement[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  size = 'medium',
  className = '',
  classes = {},
  disabled = false,
  color = 'primary',
  orientation = 'horizontal',
  appearance = 'filled',
  style = {},
  children = null
}) => {
  const classNames = mergeClasses(useStyles({ orientation, appearance }), classes);
  const styledChildren = useStyledChildren(children, size, color, disabled, appearance, classNames);

  return (
    <div className={clsx(classNames.root, className)} style={style}>
      {styledChildren}
    </div>
  );
};

export default ButtonGroup;
