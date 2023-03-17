import { createStyles } from 'styling';
import type { Theme } from 'styling/types';

export const useStyles = createStyles(
  (theme: Theme) => ({
    root: {
      flexShrink: 0,
      borderRadius: 0,
      height: '2rem',
      paddingBottom: theme.spacing.padding[2],
      paddingTop: theme.spacing.padding[2],
      transition: 'all 0.15s',
      color: theme.palette.text.primary,
      whiteSpace: 'nowrap',
      width: 'max-content',
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    active: {
      color: theme.palette.primary.main,
      boxShadow: {
        inset: 'inset',
        x: 0,
        y: '-1px',
        blur: 0,
        spread: 0,
        color: theme.palette.primary.main
      }
    }
  }),
  {
    name: 'jds-tab-button'
  }
);
