import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: {
          display: 'flex',
          flex: '0 0 auto'
        }
      },
      theme.overrides?.Tabs || {}
    ),
  {
    name: 'jds-tabs'
  }
);
