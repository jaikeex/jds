import classNames from 'classnames';
import type { ColorVariants, ExtendedSize } from '@core/types';

export const getIconClasses = (
  size: ExtendedSize = 'medium',
  color: ColorVariants | `#${string}` = 'default',
  className = ''
) => {
  const colorClassName = `jds-icon--${color}`;

  return classNames(
    'jds-icon',
    `jds-icon--${size}`,
    { [colorClassName]: !color.startsWith('#') },
    className
  );
};

export const getFlatIconClasses = (size: ExtendedSize = 'medium') =>
  classNames('jds-icon', `jds-icon--${size}`);
