import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: {
          flexGrow: 1,
          padding: 0,
          '& > *:first-child': {
            height: '100%',
            '& > *:first-child': {
              height: '100%'
            }
          }
        }
      },
      theme.overrides?.TabPanel || {}
    ),
  {
    name: 'jds-tab-cont'
  }
);
