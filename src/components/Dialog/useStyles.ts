import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { DialogProps } from './Dialog';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        sheet: {
          padding: theme.spacing.padding[8],
          overFlow: 'auto'
        },
        backdrop: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      },
      theme.overrides?.Dialog || {}
    ),
  {
    name: 'jds-dialog'
  }
);
