import classNames from 'classnames';
import { IconSize, IconColor } from './types';

export const getIconClasses = (
  size: IconSize = 'medium',
  color: IconColor = 'default',
  className: string = ''
) =>
  classNames('jds-icon', `jds-icon--${size}`, `jds-icon--${color}`, className);

export const getFlatIconClasses = (size: IconSize = 'medium') =>
  classNames('jds-icon', `jds-icon--${size}`);
