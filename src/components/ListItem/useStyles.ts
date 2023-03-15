import type { Theme } from 'styling/types';
import { createStyles, mergeOverrides } from 'styling';
import type { ThemeColorVariants } from 'core/types';
import type { ListItemProps } from './ListItem';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: (props: ListItemProps) => ({
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          display: 'flex',
          alignItems: 'center',
          backgroundColor:
            props.color === ('default' || undefined)
              ? 'transparent'
              : theme.palette.rgba(theme.palette[props.color as ThemeColorVariants].dark, 0.4)
        }),
        selected: (props: ListItemProps) => ({
          backgroundColor:
            props.color === ('default' || undefined)
              ? theme.palette.rgba(theme.palette.common.blue[400], 0.2)
              : theme.palette.rgba(theme.palette[props.color as ThemeColorVariants].light, 0.5)
        }),
        clickable: {
          cursor: 'pointer',
          transition: 'box-shadow 0.15s',
          '&:hover': {
            boxShadow: {
              inset: 'inset',
              x: 0,
              y: 0,
              blur: '100px',
              spread: '100px',
              color: theme.palette.rgba(theme.palette.text.primary, 0.1)
            }
          }
        },
        compact: (props: ListItemProps) => ({
          padding: [theme.spacing.padding[0], theme.spacing.padding[4]],
          height: '2rem'
        }),
        wide: (props: ListItemProps) => ({
          height: '3rem',
          padding: [theme.spacing.padding[2], theme.spacing.padding[4]]
        }),
        children: (props: ListItemProps) => ({
          flexGrow: 1,
          padding: [0, theme.spacing.padding[3]]
        }),
        element: {
          display: 'flex',
          alignItems: 'center',
          justifyItems: 'center'
        },
        disabled: {
          cursor: 'not-allowed',
          '& *': {
            color: theme.palette.text.disabled,
            fill: theme.palette.text.disabled
          },
          '&:hover': {
            boxShadow: 'none'
          }
        }
      },
      theme.overrides?.ListItem || {}
    ),
  { name: 'jds-list-item' }
);
