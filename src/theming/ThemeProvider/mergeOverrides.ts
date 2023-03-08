import { merge } from 'lodash';
import type { Styles } from 'react-jss';

export const mergeOverrides = <C extends string = string, Props = unknown>(
  styles: Styles<C, Props, undefined>,
  overrides: Partial<Styles<C, Props, undefined>>
): Styles<C, Props, undefined> => merge(styles, overrides);
