import type { ThemeColorVariants } from 'core/types';
import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { AlertProps } from './Alert';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        '@keyframes appear': {
          from: { opacity: 0.5, scale: 0.5 },
          to: { opacity: 1, scale: 1 }
        },
        root: (props: AlertProps) => ({
          width: '30rem',
          padding: '1rem 0.5rem 1rem 1.5rem',
          border: 'none',
          borderRadius: theme.shape.borderRadius.medium,
          margin: theme.spacing.margin.medium,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          animation: '$appear 0.1s',

          backgroundColor:
            props.color === ('primary' || undefined)
              ? theme.palette.grey[800]
              : theme.palette[props.color as ThemeColorVariants].main,
          '& svg': {
            marginRight: theme.spacing.margin.medium,
            fill:
              props.color === ('primary' || undefined)
                ? theme.palette.text.contrast.light
                : theme.palette[props.color || 'primary'].contrastText
          }
        }),
        info: () => ({
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }),
        action: () => ({
          margin: `${theme.spacing.margin.xsmall} auto 0 0`
        }),
        message: (props: AlertProps) => ({
          paddingRight: theme.spacing.padding.xlarge,
          display: 'flex',
          alignItems: 'center',
          color:
            props.color === ('primary' || undefined)
              ? theme.palette.text.contrast.light
              : [theme.palette.getContrastText(theme.palette[props.color as ThemeColorVariants].main), '!important'],
          '& svg': {
            marginRight: theme.spacing.margin.xxsmall
          }
        }),
        closeBtn: () => ({
          marginLeft: 'auto'
        })
      },
      theme.overrides?.Alert || {}
    ),
  { name: 'jds-alert' }
);
