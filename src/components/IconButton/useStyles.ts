import type { ThemeColorVariants } from 'core/types';
import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { IconButtonProps } from './IconButton';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: (props: IconButtonProps) => ({
          border: 'none',
          padding: 0,
          backgroundColor: 'transparent',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          willChange: 'transform',
          transition: 'all 0.2s',
          '& svg': {
            flexShrink: 0,
            transition: 'fill 0.2s',
            fill:
              props.color === ('default' || undefined)
                ? theme.palette.text.primary
                : theme.palette[props.color as ThemeColorVariants].main
          },
          '&:hover': {
            backgroundColor: props.enableBackground
              ? theme.palette.rgba(
                  props.color === ('default' || undefined)
                    ? theme.palette.text.primary
                    : theme.palette[props.color as ThemeColorVariants].main,
                  0.15
                )
              : 'transparent',
            transform: props.enableBackground || 'scale(1.1)'
          },
          '&:hover svg': {
            fill:
              props.color === ('default' || undefined)
                ? theme.palette.text.primary
                : theme.palette[props.color as ThemeColorVariants].dark
          },
          '&:active': {
            transform: props.enableBackground || 'scale(0.9)'
          }
        }),
        small: (props: IconButtonProps) => ({
          width: props.enableBackground ? '2.25rem' : '1.6rem',
          height: props.enableBackground ? '2.25rem' : '1.6rem',
          '& svg': {
            width: '1.6rem',
            height: '1.6rem'
          }
        }),
        medium: (props: IconButtonProps) => ({
          width: props.enableBackground ? '2.75rem' : '2rem',
          height: props.enableBackground ? '2.75rem' : '2rem',
          '& svg': {
            width: '2rem',
            height: '2rem'
          }
        }),
        large: (props: IconButtonProps) => ({
          width: props.enableBackground ? '3rem' : '2.25rem',
          height: props.enableBackground ? '3rem' : '2.25rem',
          '& svg': {
            width: '2.25rem',
            height: '2.25rem'
          }
        }),
        disabled: (props: IconButtonProps) => ({
          cursor: 'default !important',
          '& svg': {
            fill: [theme.palette.rgba(theme.palette.text.disabled, 0.5), '!important']
          },
          '&:hover svg': {
            fill: [theme.palette.rgba(theme.palette.text.disabled, 0.5), '!important']
          },
          '&:hover': {
            transform: 'none !important'
          },
          '&:active': {
            transform: 'none !important'
          }
        })
      },
      theme.overrides?.IconButton || {}
    ),
  { name: 'jds-icon-button' }
);
