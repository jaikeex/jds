import * as React from 'react';
import type { ThemeColorVariants } from 'core/types';
import { mergeClasses } from 'core/utils';
import type { Classes } from 'jss';
import type { RadioClassKey } from './types';
import { useStyles } from './useStyles';

export interface RadioProps {
  checked?: boolean;
  classes?: Classes<RadioClassKey>;
  className?: string;
  color?: ThemeColorVariants;
  icon?: React.ReactNode;
  iconChecked?: React.ReactNode;
  id?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  size?: 'small' | 'medium' | 'large';
  value?: string;
}

const Radio: React.FC<RadioProps> = ({
  checked = false,
  classes = {},
  className = '',
  color = 'primary',
  icon = null,
  iconChecked = null,
  id = '',
  name = '',
  onChange = () => {},
  required = false,
  size = 'medium',
  value = ''
}): JSX.Element => {
  const classNames = mergeClasses(useStyles(), classes);

  return <div>Radio</div>;
};

export default Radio;
