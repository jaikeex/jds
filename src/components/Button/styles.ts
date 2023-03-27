import styled from '@emotion/styled';
import { shouldForwardPropDefault } from 'core/utils';
import type { ButtonProps } from './Button';

export const ButtonRoot = styled('button', {
  label: 'button',
  shouldForwardProp: shouldForwardPropDefault
})<ButtonProps>((props) => ({
  border: 'none',
  boxSizing: 'border-box',
  borderRadius: props.theme.shape.borderRadius.small,
  minWidth: '5rem',
  position: 'relative',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.25rem',
  transition: 'background-color 0.2s',
  cursor: props.disabled ? 'default' : 'pointer',

  ...(props.appearance === 'filled' && {
    backgroundColor: props.disabled
      ? props.theme.palette.rgba(props.theme.palette.text.disabled, 0.5)
      : props.theme.palette[props.color || 'primary'].main,
    'span': {
      color: props.disabled
        ? props.theme.palette.text.disabled
        : props.theme.palette[props.color || 'primary'].contrastText
    },
    'svg': {
      fill: props.disabled
        ? props.theme.palette.rgba(props.theme.palette.text.disabled, 0.5)
        : props.theme.palette[props.color || 'primary'].contrastText
    },
    '&:hover': {
      backgroundColor: props.disabled
        ? props.theme.palette.rgba(props.theme.palette.text.disabled, 0.5)
        : props.theme.palette[props.color || 'primary'].dark
    }
  }),

  ...(props.appearance === 'outlined' && {
    backgroundColor: 'transparent',
    outline: `1px solid ${
      props.disabled
        ? props.theme.palette.rgba(props.theme.palette.text.disabled, 0.5)
        : props.theme.palette[props.color || 'primary'].main
    }`,
    'span': {
      color: props.disabled
        ? props.theme.palette.rgba(props.theme.palette.text.disabled, 0.5)
        : props.theme.palette[props.color || 'primary'].dark
    },
    'svg': {
      fill: props.disabled
        ? props.theme.palette.rgba(props.theme.palette.text.disabled, 0.5)
        : props.theme.palette[props.color || 'primary'].dark
    },
    '&:hover': {
      backgroundColor: props.disabled
        ? 'transparent'
        : props.theme.palette.rgba(props.theme.palette[props.color || 'primary'].main, 0.1)
    }
  }),

  ...(props.appearance === 'subtle' && {
    backgroundColor: 'transparent',
    'span': {
      color: props.disabled
        ? props.theme.palette.rgba(props.theme.palette.text.disabled, 0.5)
        : props.theme.palette[props.color || 'primary'].dark
    },
    'svg': {
      fill: props.disabled
        ? props.theme.palette.rgba(props.theme.palette.text.disabled, 0.5)
        : props.theme.palette[props.color || 'primary'].dark
    },
    '&:hover': {
      backgroundColor: props.disabled
        ? 'transparent'
        : props.theme.palette.rgba(props.theme.palette[props.color || 'primary'].main, 0.1)
    }
  }),

  ...(props.size === 'small' && {
    padding: `${props.theme.spacing[2]} ${props.theme.spacing[3]}`
  }),

  ...(props.size === 'medium' && {
    padding: `${props.theme.spacing[3]} ${props.theme.spacing[4]}`
  }),

  ...(props.size === 'large' && {
    fontSize: '1.125rem',
    padding: `${props.theme.spacing[4]} ${props.theme.spacing[5]}`
  })
}));

export const ButtonIcon = styled('div', {
  label: 'button-icon',
  shouldForwardProp: shouldForwardPropDefault
})<ButtonProps>((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...(props.size === 'small' && {
    'svg': {
      height: '1rem',
      width: '1rem'
    }
  }),
  ...(props.size === 'medium' && {
    'svg': {
      height: '1.2rem',
      width: '1.2rem'
    }
  }),
  ...(props.size === 'large' && {
    'svg': {
      height: '1.4rem',
      width: '1.4rem'
    }
  })
}));
