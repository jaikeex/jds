import type { Theme } from 'styling/types';
import { createStyles, mergeOverrides } from 'styling/ThemeProvider';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: {
          listStyle: 'none',
          padding: theme.spacing.padding[0],
          margin: theme.spacing.margin[0]
        }
      },
      theme.overrides?.List || {}
    ),
  { name: 'jds-list' }
);
