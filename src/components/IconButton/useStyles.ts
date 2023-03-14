import { createStyles, mergeOverrides } from 'styling';
import type { Theme } from 'styling/types';
import type { IconButtonProps } from './IconButton';

export const useStyles = createStyles(
  (theme: Theme) =>
    mergeOverrides(
      {
        root: (props: IconButtonProps) => ({
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '9999px',
          willChange: 'transform',
          transition: 'all 0.2s',
          '& svg': {
            flexShrink: 0,
            transition: 'fill 0.2s',
            fill: theme.palette[props.color || 'primary'].main
          },
          '&:hover': {
            backgroundColor: props.enableBackground
              ? theme.palette.rgba(theme.palette[props.color || 'primary'].main, 0.15)
              : 'transparent',
            transform: props.disableTransform || 'scale(1.1)'
          },
          '&:hover svg': {
            fill: theme.palette[props.color || 'primary'].dark
          },
          '&:active': {
            transform: props.disableTransform || 'scale(0.9)'
          }
        }),
        small: {
          width: '1.6rem',
          height: '1.6rem'
        },
        medium: {
          width: '2rem',
          height: '2rem'
        },
        large: {
          width: '2.25rem',
          height: '2.25rem'
        }
      },
      theme.overrides?.IconButton || {}
    ),
  { name: 'jds-icon-button' }
);
