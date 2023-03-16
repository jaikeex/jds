import type { ThemeColorVariants } from 'core/types';
import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { ToggleButtonProps } from './ToggleButton';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: (props: ToggleButtonProps) => ({
          position: 'relative',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          borderRadius: theme.shape.borderRadius.small,
          backgroundColor: 'transparent',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          padding: theme.spacing.padding[3],
          border: props.removeBorder
            ? 'none'
            : {
                width: '1px',
                style: 'solid',
                color: theme.palette.rgba(theme.palette.text.primary, 0.2)
              },
          '&:hover': {
            backgroundColor:
              props.color === ('default' || undefined)
                ? theme.palette.rgba(theme.palette.text.primary, 0.1)
                : theme.palette.rgba(theme.palette[props.color as ThemeColorVariants].main, 0.1)
          }
        }),
        active: (props: ToggleButtonProps) => ({
          backgroundColor:
            props.color === ('default' || undefined)
              ? theme.palette.rgba(theme.palette.text.primary, 0.25)
              : theme.palette.rgba(theme.palette[props.color as ThemeColorVariants].main, 0.25),
          '&:hover': {
            backgroundColor:
              props.color === ('default' || undefined)
                ? theme.palette.rgba(theme.palette.text.primary, 0.35)
                : theme.palette.rgba(theme.palette[props.color as ThemeColorVariants].main, 0.35)
          }
        }),
        small: {
          height: '2.5rem',
          minWidth: '2.5rem'
        },
        medium: {
          height: '3rem',
          minWidth: '3rem'
        },
        large: {
          height: '3.5rem',
          minWidth: '3.5rem'
        },
        text: {},
        disabled: {
          cursor: 'default !important',
          backgroundColor: 'transparent !important',
          '& span': {
            color: theme.palette.text.disabled
          },
          '& svg': {
            fill: theme.palette.text.disabled
          }
        }
      },
      theme.overrides?.ToggleButton || {}
    ),
  { name: 'jds-toggle-btn' }
);
