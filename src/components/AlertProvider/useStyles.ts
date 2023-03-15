import { createStyles } from 'styling';
import type { Theme } from 'styling/types';
import type { AlertProviderProps } from './AlertProvider';

export const useStyles = createStyles(
  (theme: Theme) => ({
    root: (props: AlertProviderProps) => ({
      width: '32rem',
      position: 'fixed',
      zIndex: 10000,
      [props.location?.horizontal || 'right']: 0,
      [props.location?.vertical || 'top']: 0
    })
  }),
  { name: 'jds-alert-provider' }
);
