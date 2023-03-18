import React from 'react';
import { mergeClasses } from 'core/utils';
import type { LoaderSize, LoaderClassKey } from './types';
import type { Classes } from 'jss';
import { useStyles } from './useStyles';
import clsx from 'clsx';
import type { ThemeColorVariantsWithDefault } from 'core/types';

export interface LoaderProps {
  className?: string;
  classes?: Classes<LoaderClassKey>;
  color?: ThemeColorVariantsWithDefault;
  size?: LoaderSize;
  style?: React.CSSProperties;
}

const Loader: React.FC<LoaderProps> = ({
  classes = {},
  className = '',
  color = 'default',
  size = 'medium',
  style = {}
}) => {
  const classNames = mergeClasses(useStyles({ color }), classes);

  return <div style={style} className={clsx(classNames.root, classNames[size], className)} />;
};

export default Loader;
