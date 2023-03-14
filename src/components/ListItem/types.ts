import type { ThemeColorVariants } from 'core/types';

export type ListItemColorVariants = ThemeColorVariants | 'default';

export type ListItemClassKey =
  | 'root'
  | 'selected'
  | 'clickable'
  | 'compact'
  | 'wide'
  | 'children'
  | 'element'
  | 'disabled';
