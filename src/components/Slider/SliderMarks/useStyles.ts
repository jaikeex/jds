import { createStyles } from 'styling';
import type { Theme } from 'styling/types';

export const useStyles = createStyles(
  (theme: Theme) => ({
    root: {
      position: 'relative',
      width: '100%',
      height: '2rem',
      marginTop: theme.spacing.margin[4]
    },
    mark: {
      position: 'absolute',
      transform: 'translateX(-50%)'
    }
  }),
  {
    name: 'jds-slider-marks'
  }
);
