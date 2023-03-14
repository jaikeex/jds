import type { Theme } from 'styling/types';
import { createStyles, mergeOverrides } from 'styling/ThemeProvider';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: {
          position: 'relative'
        }
      },
      theme.overrides?.Menu || {}
    ),
  { name: 'jds-menu' }
);
