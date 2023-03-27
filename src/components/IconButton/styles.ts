import styled from '@emotion/styled';
import type { ThemeColorVariants } from 'core/types';
import type { IconButtonProps } from './IconButton';
import { shouldForwardPropDefault } from 'core/utils';

export const IconButtonRoot = styled('button', {
  label: 'icon-btn',
  shouldForwardProp: shouldForwardPropDefault
})<IconButtonProps>((props) => ({
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
  transition: 'all 0.1s',
  'svg': {
    flexShrink: 0,
    transition: 'fill 0.2s',
    fill:
      props.color === ('default' || undefined)
        ? props.theme.palette.text.primary
        : props.theme.palette[props.color as ThemeColorVariants].main,

    ...(props.size === 'small' && {
      width: '1.6rem',
      height: '1.6rem'
    }),

    ...(props.size === 'medium' && {
      width: '2rem',
      height: '2rem'
    }),

    ...(props.size === 'large' && {
      width: '2.25rem',
      height: '2.25rem'
    })
  },
  '&:hover': {
    backgroundColor: props.enableBackground
      ? props.theme.palette.rgba(
          props.color === ('default' || undefined)
            ? props.theme.palette.text.primary
            : props.theme.palette[props.color as ThemeColorVariants].main,
          0.15
        )
      : 'transparent',
    transform: props.enableBackground ? '' : 'scale(1.1)'
  },
  '&:hover svg': {
    fill:
      props.color === ('default' || undefined)
        ? props.theme.palette.text.primary
        : props.theme.palette[props.color as ThemeColorVariants].dark
  },
  '&:active': {
    transform: props.enableBackground ? '' : 'scale(0.9)'
  },

  ...(props.size === 'small' && {
    width: '2.25rem',
    height: '2.25rem'
  }),

  ...(props.size === 'medium' && {
    width: '2.75rem',
    height: '2.75rem'
  }),

  ...(props.size === 'large' && {
    width: '3rem',
    height: '3rem'
  }),

  ...(props.disabled && {
    cursor: 'default !important',
    'svg': {
      fill: `${props.theme.palette.rgba(props.theme.palette.text.disabled, 0.5)} !important`
    },
    '&:hover svg': {
      fill: `${props.theme.palette.rgba(props.theme.palette.text.disabled, 0.5)} !important`
    },
    '&:hover': {
      transform: 'none !important'
    },
    '&:active': {
      transform: 'none !important'
    }
  })
}));
