import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { BackdropProps } from './Backdrop';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: (props: BackdropProps) => ({
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 1000,
          backdropFilter: `brightness(${(10 - (props.level || 5)) * 10}%)`
        })
      },
      theme.overrides?.Backdrop || {}
    ),
  {
    name: 'jds-backdrop'
  }
);
