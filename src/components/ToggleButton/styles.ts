import styled from '@emotion/styled';
import type { ThemeColorVariants } from 'core/types';
import { shouldForwardPropDefault } from 'core/utils';
import type { ToggleButtonProps } from './ToggleButton';

export const ToggleButtonRoot = styled('button', {
  label: 'toggle-button',
  shouldForwardProp: shouldForwardPropDefault
})<ToggleButtonProps & { active: boolean; }>((props) => ({
  position: 'relative',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  borderRadius: props.theme.shape.borderRadius.small,
  backgroundColor: 'transparent',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  padding: props.theme.spacing[3],
  transition: 'background-color 0.1s',
  '& svg': {
    transition: 'fill 0.1s'
  },
  border: `1px solid ${
    props.color === ('default' || undefined)
      ? props.theme.palette.rgba(props.theme.palette.text.primary, 0.1)
      : props.theme.palette.rgba(props.theme.palette[props.color as ThemeColorVariants].main, 0.2)
  }`,
  '&:hover': {
    backgroundColor:
      props.color === ('default' || undefined)
        ? props.theme.palette.rgba(props.theme.palette.text.primary, 0.1)
        : props.theme.palette.rgba(props.theme.palette[props.color as ThemeColorVariants].main, 0.1)
  },

  ...(props.appearance === 'filled' && {
    ...(props.active && {
      backgroundColor:
        props.color === 'default'
          ? props.theme.palette.primary.main
          : props.theme.palette[props.color || 'primary'].main,
      '&:hover': {
        backgroundColor:
          props.color === 'default'
            ? props.theme.palette.primary.dark
            : props.theme.palette[props.color || 'primary'].dark
      },
      'span': {
        color:
          props.color === 'default'
            ? props.theme.palette.primary.contrastText
            : props.theme.palette[props.color || 'primary'].contrastText
      },
      'svg': {
        fill:
          props.color === 'default'
            ? props.theme.palette.primary.contrastText
            : props.theme.palette[props.color || 'primary'].contrastText
      }
    })
  }),

  ...(props.appearance === 'outlined' && {
    ...(props.active && {
      backgroundColor:
        props.color === ('default' || undefined)
          ? props.theme.palette.rgba(props.theme.palette.text.primary, 0.25)
          : props.theme.palette.rgba(props.theme.palette[props.color as ThemeColorVariants].main, 0.25),
      '&:hover': {
        backgroundColor:
          props.color === ('default' || undefined)
            ? props.theme.palette.rgba(props.theme.palette.text.primary, 0.35)
            : props.theme.palette.rgba(props.theme.palette[props.color as ThemeColorVariants].main, 0.35)
      }
    })
  }),

  ...(props.appearance === 'subtle' && {
    border: 'none',
    ...(props.active && {
      backgroundColor:
        props.color === ('default' || undefined)
          ? props.theme.palette.rgba(props.theme.palette.text.primary, 0.25)
          : props.theme.palette.rgba(props.theme.palette[props.color as ThemeColorVariants].main, 0.25),
      '&:hover': {
        backgroundColor:
          props.color === ('default' || undefined)
            ? props.theme.palette.rgba(props.theme.palette.text.primary, 0.35)
            : props.theme.palette.rgba(props.theme.palette[props.color as ThemeColorVariants].main, 0.35)
      }
    })
  }),

  ...(props.size === 'small' && {
    height: '2.5rem',
    minWidth: '2.5rem'
  }),

  ...(props.size === 'medium' && {
    height: '3rem',
    minWidth: '3rem'
  }),

  ...(props.size === 'large' && {
    height: '3.5rem',
    minWidth: '3.5rem'
  }),

  ...(props.disabled && {
    cursor: 'default !important',
    backgroundColor: 'transparent !important',
    '& span': {
      color: props.theme.palette.text.disabled
    },
    '& svg': {
      fill: props.theme.palette.text.disabled
    }
  })
}));
