import type { ThemeColorVariants } from 'core/types';
import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { RadioProps } from './Radio';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: (props: RadioProps) => ({})
      },
      theme.overrides?.Radio || {}
    ),
  { name: 'jds-radio' }
);
