import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: {
          '& pre': {
            borderRadius: theme.shape.borderRadius.medium,
            overFlow: 'auto'
          },
          '& code': {
            fontFamily: theme.typography.monospaceFontFamily,
            fontSize: '0.875rem'
          }
        }
      },
      theme.overrides?.Code || {}
    ),
  {
    name: 'jds-code'
  }
);
